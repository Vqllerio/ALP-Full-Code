// API Configuration
const API_BASE_URL = 'http://localhost:8080/api';

// Global variables
let destinations = [];
let currentDestination = null;
let selectedRating = 0;

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

// Favorite functions
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
                userId: sessionStorage.getItem('userId') || 0
            })
        });

        if (!response.ok) throw new Error('Failed to update favorite');
        return await response.json();
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return { isFavorite: false };
    }
}

// Destination functions
async function fetchDestinations(category = 'all') {
    try {
        const url = category === 'all'
            ? `${API_BASE_URL}/destinations`
            : `${API_BASE_URL}/destinations?category=${category}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch destinations');
        return await response.json();
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return [];
    }
}

async function fetchDestinationHistory(destinationId) {
    try {
        const response = await fetch(`${API_BASE_URL}/destinations/${destinationId}/history`);
        if (!response.ok) throw new Error('Failed to fetch history');
        return await response.json();
    } catch (error) {
        console.error('Error fetching destination history:', error);
        return null;
    }
}

async function submitRating(destinationId, rating) {
    try {
        const response = await fetch(`${API_BASE_URL}/destinations/${destinationId}/rate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: rating,
                userId: sessionStorage.getItem('userId') || 0
            }),
        });

        if (!response.ok) throw new Error('Failed to submit rating');
        return await response.json();
    } catch (error) {
        console.error('Error submitting rating:', error);
        return null;
    }
}

// UI Functions
function setupModalEvents() {
    // Close modal
    document.querySelector('.close-modal')?.addEventListener('click', () => {
        document.getElementById('destinationModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // History button
    document.getElementById('historyButton')?.addEventListener('click', async function () {
        const destinationId = parseInt(this.getAttribute('data-id'));
        const history = await fetchDestinationHistory(destinationId);
        if (history) showHistoryPage(history);
    });

    // Map button
    document.getElementById('mapsButton')?.addEventListener('click', function () {
        const destinationId = parseInt(this.getAttribute('data-id'));
        const destination = destinations.find(dest => dest.iddestination === destinationId);
        if (destination) {
            const query = encodeURIComponent(`${destination.title}, ${destination.location}`);
            window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
        }
    });

    // Back button
    document.getElementById('backBtn')?.addEventListener('click', () => {
        document.getElementById('historyPage').classList.add('hidden');
        document.getElementById('destinationModal').classList.remove('hidden');
    });

    // Close modal when clicking outside
    document.getElementById('destinationModal')?.addEventListener('click', function (e) {
        if (e.target === this) {
            this.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

function setupRatingWidget() {
    // Rating stars
    document.getElementById('destinationModal')?.addEventListener('click', function (e) {
        if (e.target?.classList?.contains('fa-star') && e.target.parentElement.id === 'ratingStars') {
            selectedRating = parseInt(e.target.getAttribute('data-value'));
            const stars = document.querySelectorAll('#ratingStars .fa-star');

            stars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.replace('far', 'fas');
                    s.classList.add('text-persian-orange');
                } else {
                    s.classList.replace('fas', 'far');
                    s.classList.remove('text-persian-orange');
                }
            });

            document.getElementById('submitRating')?.classList.remove('hidden');
        }
    });

    // Submit rating
    document.getElementById('submitRating')?.addEventListener('click', async function () {
        if (selectedRating > 0 && currentDestination) {
            const result = await submitRating(currentDestination.iddestination, selectedRating);
            if (result) {
                currentDestination.rating = result.rating;
                currentDestination.reviews = result.reviews;

                document.getElementById('modalRating').innerHTML = renderStars(currentDestination.rating);
                document.getElementById('modalReviews').textContent = `(${currentDestination.reviews} ulasan)`;
                document.getElementById('ratingMessage').textContent = 'Terima kasih atas rating Anda!';
                this.classList.add('hidden');

                // Update the grid display
                renderDestinations(destinations);
            } else {
                document.getElementById('ratingMessage').textContent = 'Gagal mengirim rating. Silakan coba lagi.';
            }
        }
    });
}

function showDestinationModal(destination) {
    if (!destination) return;
    currentDestination = destination;

    document.getElementById('modalTitle').textContent = destination.title;
    document.getElementById('modalLocation').textContent = destination.location;
    document.getElementById('modalImage').src = destination.image;
    document.getElementById('modalImage').alt = destination.title;
    document.getElementById('modalRating').innerHTML = renderStars(destination.rating);
    document.getElementById('modalReviews').textContent = `(${destination.reviews} ulasan)`;
    document.getElementById('modalDescription').textContent = destination.description;
    document.getElementById('historyButton').setAttribute('data-id', destination.iddestination);
    document.getElementById('mapsButton').setAttribute('data-id', destination.iddestination);

    // Reset rating UI
    selectedRating = 0;
    document.getElementById('submitRating').classList.add('hidden');
    document.getElementById('ratingMessage').textContent = '';

    // Show modal
    document.getElementById('destinationModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function showHistoryPage(history) {
    if (!history) return;

    document.getElementById('historyTitle').textContent = "Sejarah & Budaya " + history.title;
    document.getElementById('historyLocation').textContent = history.location;
    document.getElementById('historyImage').src = history.image;
    document.getElementById('historyContent').innerHTML = history.history_content;
    document.getElementById('destinationModal').classList.add('hidden');
    document.getElementById('historyPage').classList.remove('hidden');
}

async function renderDestinations(destinationsToRender) {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const favorites = await getFavorites();

    for (const destination of destinationsToRender) {
        const isFavorite = favorites.includes(destination.iddestination);
        const card = document.createElement('div');
        card.className = 'card group relative rounded-2xl overflow-hidden shadow-xl h-96 shine-effect';
        card.innerHTML = `
            <i class="heart-icon ${isFavorite ? 'fas favorited' : 'far'} fa-heart absolute top-4 right-4 z-20 text-xl cursor-pointer" 
               data-id="${destination.iddestination}"></i>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
            <img src="${destination.image}" 
                alt="${destination.title}" 
                class="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            
            <div class="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div class="tag inline-block px-3 py-1 rounded-full text-sm text-azure mb-2 bg-teal/80">
                    <i class="fas fa-${getCategoryIcon(destination.category)} mr-1"></i> ${destination.location}
                </div>
                <h3 class="text-2xl font-bold text-azure mb-2">${destination.title}</h3>
                <div class="flex items-center text-persian-orange mb-3">
                    ${renderStars(destination.rating)}
                    <span class="text-azure text-sm ml-2">${destination.rating.toFixed(1)} (${destination.reviews} ulasan)</span>
                </div>
                <p class="text-azure/90 mb-4 line-clamp-2">${destination.description}</p>
                <button class="detail-btn px-4 py-2 bg-azure text-teal rounded-full font-semibold text-sm hover:bg-gray-100 transition flex items-center"
                        data-id="${destination.iddestination}">
                    <i class="fas fa-info-circle mr-2"></i> Detail Wisata
                </button>
            </div>
        `;
        grid.appendChild(card);
    }

    // Attach event listeners
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(this.getAttribute('data-id'));
            const destination = destinationsToRender.find(dest => dest.iddestination === id);
            showDestinationModal(destination);
        });
    });

    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', async function (e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            const result = await toggleFavorite(id);

            if (result?.isFavorite) {
                this.classList.replace('far', 'fas');
                this.classList.add('favorited');
            } else {
                this.classList.replace('fas', 'far');
                this.classList.remove('favorited');
            }
        });
    });
}

function getCategoryIcon(category) {
    switch (category.toLowerCase()) {
        case 'pegunungan': return 'mountain';
        case 'pantai': return 'umbrella-beach';
        case 'budaya': return 'landmark';
        case 'kuliner': return 'utensils';
        default: return 'map-marker-alt';
    }
}

// Initialize the application
async function initializeApp() {
    // Check login status
    if (!sessionStorage.getItem('isLoggedIn') &&
        !window.location.pathname.includes('login.html') &&
        !window.location.pathname.includes('buat akun.html') &&
        !window.location.pathname.includes('welcome page.html')) {
        window.location.href = 'login.html';
        return;
    }

    // Setup logout button
    document.getElementById('logoutButton')?.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    // Initialize main page
    if (document.getElementById('destinationsGrid')) {
        destinations = await fetchDestinations();
        renderDestinations(destinations);
        setupModalEvents();
        setupRatingWidget();

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', async function () {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                destinations = await fetchDestinations(category === 'all' ? 'all' : category);
                renderDestinations(destinations);
            });
        });
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);