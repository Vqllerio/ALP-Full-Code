// API Configuration
const API_BASE_URL = 'http://localhost:8080/api';

// Common functions
function renderStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star text-persian-orange"></i>';
    }

    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt text-persian-orange"></i>';
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star text-persian-orange"></i>';
    }

    return starsHTML;
}

// Favorite functions (now using backend API)
async function getFavorites() {
    try {
        const response = await fetch(`${API_BASE_URL}/favorites`);
        if (!response.ok) throw new Error('Failed to fetch favorites');
        const favorites = await response.json();
        return favorites.map(fav => fav.destinationId);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
}

async function toggleFavorite(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                destinationId: id,
                userId: getCurrentUserId() // Implement this based on your auth system
            })
        });

        if (!response.ok) throw new Error('Failed to update favorite');

        const result = await response.json();
        return result.isFavorite; // Your backend should return { isFavorite: boolean }
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return false;
    }
}

// Index page functionality (now fetches from backend)
async function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    // Show loading state
    grid.innerHTML = '<div class="loading">Loading destinations...</div>';

    try {
        // Fetch destinations and favorites in parallel
        const [destinationsResponse, favorites] = await Promise.all([
            fetch(`${API_BASE_URL}/destinations`),
            getFavorites()
        ]);

        if (!destinationsResponse.ok) throw new Error('Failed to fetch destinations');

        const destinations = await destinationsResponse.json();
        grid.innerHTML = '';

        destinations.forEach(destination => {
            const isFavorite = favorites.includes(destination.id);
            const card = document.createElement('div');
            card.className = 'card group relative rounded-2xl overflow-hidden shadow-xl h-96 shine-effect';
            card.innerHTML = `
                <i class="heart-icon ${isFavorite ? 'fas favorited' : 'far'} fa-heart" 
                   data-id="${destination.id}"></i>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                <img src="${destination.image}" 
                    alt="${destination.title}" 
                    class="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                
                <div class="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div class="tag inline-block px-3 py-1 rounded-full text-sm text-azure mb-2">
                        <i class="fas fa-map-marker-alt mr-1"></i> ${destination.location}
                    </div>
                    <h3 class="text-2xl font-bold text-azure mb-2">${destination.title}</h3>
                    <div class="flex items-center text-persian-orange mb-3">
                        ${renderStars(destination.rating)}
                        <span class="text-azure text-sm ml-2">${destination.rating} (${destination.reviews.toLocaleString()} ulasan)</span>
                    </div>
                    <p class="text-azure/90 mb-4">${destination.description}</p>
                    <button class="detail-btn px-4 py-2 bg-azure text-teal rounded-full font-semibold text-sm hover:bg-gray-100 transition flex items-center"
                            data-id="${destination.id}">
                        <i class="fas fa-info-circle mr-2"></i> Detail Wisata
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        // Attach event listeners (same as before)
        document.querySelectorAll('.detail-btn').forEach(button => {
            button.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                const destination = destinations.find(dest => dest.id === id);
                showDestinationModal(destination);
            });
        });

        document.querySelectorAll('.heart-icon').forEach(icon => {
            icon.addEventListener('click', async function (e) {
                e.stopPropagation();
                const id = parseInt(this.getAttribute('data-id'));
                const isNowFavorite = await toggleFavorite(id);

                if (isNowFavorite) {
                    this.classList.replace('far', 'fas');
                    this.classList.add('favorited');
                } else {
                    this.classList.replace('fas', 'far');
                    this.classList.remove('favorited');
                }
            });
        });

    } catch (error) {
        console.error('Error rendering destinations:', error);
        grid.innerHTML = '<div class="error">Failed to load destinations. Please try again later.</div>';
    }
}

// Search page functionality (updated to use async)
async function displaySearchResults(results) {
    const resultsSection = document.getElementById('searchResults');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!resultsSection || !resultsGrid || !noResults || !resultCount) return;

    // Show loading state
    resultsGrid.innerHTML = '<div class="loading">Loading results...</div>';

    try {
        const favorites = await getFavorites();
        resultCount.textContent = `${results.length} Hasil`;
        resultsGrid.innerHTML = '';

        if (results.length > 0) {
            noResults.classList.add('hidden');
            resultsSection.classList.remove('hidden');

            results.forEach(destination => {
                const isFavorite = favorites.includes(destination.id);
                const card = createDestinationCard(destination, isFavorite);
                resultsGrid.appendChild(card);
            });

            // Attach event listeners
            document.querySelectorAll('.view-detail').forEach(button => {
                button.addEventListener('click', function () {
                    const destinationId = parseInt(this.getAttribute('data-id'));
                    const destination = results.find(dest => dest.id === destinationId);
                    showDestinationModal(destination);
                });
            });
        } else {
            resultsSection.classList.remove('hidden');
            noResults.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error displaying search results:', error);
        resultsGrid.innerHTML = '<div class="error">Failed to load results. Please try again later.</div>';
    }
}

// Modified createDestinationCard to include favorite status
function createDestinationCard(destination, isFavorite = false) {
    const card = document.createElement('div');
    card.className = 'destination-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300';

    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <i class="heart-icon absolute top-3 left-3 ${isFavorite ? 'fas favorited' : 'far'} fa-heart z-20" 
               data-id="${destination.id}"></i>
            <img src="${destination.image}" alt="${destination.title}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 class="text-xl font-bold text-azure">${destination.title}</h3>
            </div>
            <div class="absolute top-3 right-3 bg-azure/90 text-liver px-2 py-1 rounded-full text-xs font-semibold">
                ${getCategoryName(destination.category)}
            </div>
        </div>
        <div class="p-5">
            <div class="flex items-center mb-3">
                <i class="fas fa-map-marker-alt text-teal mr-2"></i>
                <span class="text-liver">${destination.location}</span>
            </div>
            <div class="flex items-center mb-4">
                <div class="flex">
                    ${renderStars(destination.rating)}
                </div>
                <span class="text-liver text-sm ml-2">(${destination.reviews} ulasan)</span>
            </div>
            <p class="text-liver/80 text-sm mb-4 line-clamp-2">${destination.description}</p>
            <button class="w-full py-2 bg-teal text-azure rounded-lg font-medium hover:bg-midnight-green transition view-detail" 
                    data-id="${destination.id}">
                Lihat Detail
            </button>
        </div>
    `;

    // Add favorite toggle
    card.querySelector('.heart-icon')?.addEventListener('click', async function (e) {
        e.stopPropagation();
        const id = parseInt(this.getAttribute('data-id'));
        const isNowFavorite = await toggleFavorite(id);

        if (isNowFavorite) {
            this.classList.replace('far', 'fas');
            this.classList.add('favorited');
        } else {
            this.classList.replace('fas', 'far');
            this.classList.remove('favorited');
        }
    });

    return card;
}

// Initialize pages (updated to use async)
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize user session
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.pathname.includes('login.html') &&
        !window.location.pathname.includes('buat akun.html') &&
        !window.location.pathname.includes('welcome page.html')) {
        window.location.href = 'login.html';
    }

    // Index page initialization
    if (document.getElementById('destinationsGrid')) {
        await renderDestinations();
        setupModalEvents();
        setupRatingWidget();

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', async function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');

                try {
                    const response = await fetch(`${API_BASE_URL}/destinations?category=${category}`);
                    if (!response.ok) throw new Error('Filter failed');
                    const filteredDestinations = await response.json();
                    renderDestinations(filteredDestinations);
                } catch (error) {
                    console.error('Error filtering:', error);
                }
            });
        });
    }

    // Search page initialization
    if (document.getElementById('searchForm')) {
        try {
            const response = await fetch(`${API_BASE_URL}/destinations`);
            if (!response.ok) throw new Error('Failed to load destinations');
            const destinations = await response.json();
            displaySearchResults(destinations);

            document.getElementById('searchForm').addEventListener('submit', async function (e) {
                e.preventDefault();
                const location = document.getElementById('searchLocation').value;
                const category = document.getElementById('searchCategory').value;

                try {
                    let url = `${API_BASE_URL}/destinations?`;
                    if (location) url += `location=${encodeURIComponent(location)}&`;
                    if (category && category !== 'all') url += `category=${encodeURIComponent(category)}`;

                    const response = await fetch(url);
                    if (!response.ok) throw new Error('Search failed');
                    const results = await response.json();
                    displaySearchResults(results);
                } catch (error) {
                    console.error('Error searching:', error);
                }
            });
        } catch (error) {
            console.error('Error initializing search:', error);
        }
    }
});

/* REST OF YOUR ORIGINAL CODE REMAINS UNCHANGED */
// (All your existing functions like showDestinationModal, filterDestinations,
// getCategoryName, setupModalEvents, setupRatingWidget, etc. remain exactly the same)