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
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function toggleFavorite(id) {
    const favorites = getFavorites();
    const index = favorites.indexOf(id);

    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites.includes(id);
}

// Index page functionality
function renderDestinations(destinationsToRender) {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    destinationsToRender.forEach(destination => {
        const isFavorite = getFavorites().includes(destination.id);
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

    // Attach event listeners to detail buttons
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(this.getAttribute('data-id'));
            const destination = destinations.find(dest => dest.id === id);
            showDestinationModal(destination);
        });
    });

    // Attach event listeners to heart icons
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            const isNowFavorite = toggleFavorite(id);

            // Update icon appearance
            if (isNowFavorite) {
                this.classList.replace('far', 'fas');
                this.classList.add('favorited');
            } else {
                this.classList.replace('fas', 'far');
                this.classList.remove('favorited');
            }
        });
    });
}

function showDestinationModal(destination) {
    if (!destination) return;

    currentDestination = destination;
    selectedRating = 0;

    const modal = document.getElementById('destinationModal');
    document.getElementById('modalTitle').textContent = destination.title;
    document.getElementById('modalLocation').textContent = destination.location;
    document.getElementById('modalImage').src = destination.image;
    document.getElementById('modalImage').alt = destination.title;
    document.getElementById('modalRating').innerHTML = renderStars(destination.rating);
    document.getElementById('modalReviews').textContent = `(${destination.reviews} ulasan)`;
    document.getElementById('modalDescription').textContent = destination.description;

    // Set data-id for buttons
    document.getElementById('historyButton').setAttribute('data-id', destination.id);
    document.getElementById('mapsButton').setAttribute('data-id', destination.id);

    // Reset rating UI
    const stars = document.querySelectorAll('#ratingStars .fa-star');
    stars.forEach(star => {
        star.classList.remove('fas', 'text-persian-orange');
        star.classList.add('far', 'text-gray-400');
    });

    // Hide submit button
    const submitBtn = document.getElementById('submitRating');
    if (submitBtn) submitBtn.classList.add('hidden');

    // Clear rating message
    const ratingMessage = document.getElementById('ratingMessage');
    if (ratingMessage) ratingMessage.textContent = '';

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Filter destinations by category
function filterDestinations(category) {
    if (category === 'all') {
        return destinations;
    }

    return destinations.filter(destination =>
        destination.category.toLowerCase().includes(category.toLowerCase())
    );
}

// Search page functionality
function getCategoryName(category) {
    const categories = {
        'pantai': 'Pantai',
        'alam': 'Alam',
        'budaya': 'Budaya',
        'sejarah': 'Sejarah',
        'pegunungan': 'Pegunungan',
        'kuliner': 'Kuliner',
        'religi': 'Religi',
        'edukasi': 'Edukasi',
        'danau': 'Danau',
        'air terjun': 'Air Terjun',
        'taman': 'Taman'
    };
    return categories[category] || category;
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300';

    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
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

    return card;
}

function displaySearchResults(results) {
    const resultsSection = document.getElementById('searchResults');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!resultsSection || !resultsGrid || !noResults || !resultCount) return;

    resultCount.textContent = `${results.length} Hasil`;
    resultsGrid.innerHTML = '';

    if (results.length > 0) {
        noResults.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        results.forEach(destination => {
            const card = createDestinationCard(destination);
            resultsGrid.appendChild(card);
        });

        // Attach event listeners to view detail buttons
        document.querySelectorAll('.view-detail').forEach(button => {
            button.addEventListener('click', function () {
                const destinationId = parseInt(this.getAttribute('data-id'));
                const destination = destinations.find(dest => dest.id === destinationId);
                showDestinationModal(destination);
            });
        });
    } else {
        resultsSection.classList.remove('hidden');
        noResults.classList.remove('hidden');
    }
}

// Global variables
let selectedRating = 0;
let currentDestination = null;

// History page functions
function showHistoryPage(destinationId) {
    const history = historyData[destinationId];
    if (!history) return;

    document.getElementById('historyTitle').textContent = "Sejarah & Budaya " + history.title;
    document.getElementById('historyLocation').textContent = history.location;
    document.getElementById('historyImage').src = history.image;
    document.getElementById('historyContent').innerHTML = history.content;
    document.getElementById('destinationModal').classList.add('hidden');
    document.getElementById('historyPage').classList.remove('hidden');
}

// Initialize pages
document.addEventListener('DOMContentLoaded', () => {
    // Initialize favorites
    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }

    // Check login status
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.pathname.includes('login.html') &&
        !window.location.pathname.includes('buat akun.html') &&
        !window.location.pathname.includes('welcome page.html')) {
        window.location.href = 'login.html';
    }

    // Common modal events
    function setupModalEvents() {
        // Close modal
        document.querySelector('.close-modal')?.addEventListener('click', function () {
            const modal = document.getElementById('destinationModal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // History button
        document.getElementById('historyButton')?.addEventListener('click', function () {
            const destinationId = parseInt(this.getAttribute('data-id'));
            showHistoryPage(destinationId);
        });

        // Map button
        document.getElementById('mapsButton')?.addEventListener('click', function () {
            const destinationId = parseInt(this.getAttribute('data-id'));
            const destination = destinations.find(dest => dest.id === destinationId);
            if (destination) {
                // Create a Google Maps search URL
                const query = encodeURIComponent(`${destination.title}, ${destination.location}`);
                window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
            }
        });

        // Back button
        document.getElementById('backBtn')?.addEventListener('click', function () {
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

    // Setup rating widget
    function setupRatingWidget() {
        // Use event delegation for rating stars
        document.getElementById('destinationModal')?.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains('fa-star') && e.target.parentElement.id === 'ratingStars') {
                const value = parseInt(e.target.getAttribute('data-value'));
                selectedRating = value;

                const stars = document.querySelectorAll('#ratingStars .fa-star');
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.remove('far', 'text-gray-400');
                        s.classList.add('fas', 'text-persian-orange');
                    } else {
                        s.classList.remove('fas', 'text-persian-orange');
                        s.classList.add('far', 'text-gray-400');
                    }
                });

                document.getElementById('submitRating')?.classList.remove('hidden');
            }
        });

        // Submit rating
        document.getElementById('submitRating')?.addEventListener('click', function () {
            if (selectedRating > 0 && currentDestination) {
                // Update user rating in localStorage
                const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
                userRatings[currentDestination.id] = selectedRating;
                localStorage.setItem('userRatings', JSON.stringify(userRatings));

                // Update the destination rating
                const newRating = (currentDestination.rating * currentDestination.reviews + selectedRating) /
                    (currentDestination.reviews + 1);
                currentDestination.rating = parseFloat(newRating.toFixed(1));
                currentDestination.reviews += 1;

                document.getElementById('modalRating').innerHTML = renderStars(currentDestination.rating);
                document.getElementById('modalReviews').textContent = `(${currentDestination.reviews} ulasan)`;
                document.getElementById('ratingMessage').textContent = 'Terima kasih atas rating Anda!';
                this.classList.add('hidden');

                // Update UI
                if (document.getElementById('destinationsGrid')) {
                    renderDestinations(destinations);
                } else if (document.getElementById('searchResultsGrid')) {
                    displaySearchResults(destinations);
                }
            }
        });
    }

    // Load user ratings
    function loadUserRatings() {
        const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
        destinations.forEach(destination => {
            if (userRatings[destination.id]) {
                destination.userRating = userRatings[destination.id];
            }
        });
    }

    // Initialize user ratings in localStorage
    if (!localStorage.getItem('userRatings')) {
        localStorage.setItem('userRatings', JSON.stringify({}));
    }

    // Load user ratings
    loadUserRatings();

    // Index page initialization
    if (document.getElementById('destinationsGrid')) {
        renderDestinations(destinations);
        setupModalEvents();
        setupRatingWidget();

        // Add event listeners to filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Filter destinations
                const category = this.getAttribute('data-category');
                const filteredDestinations = filterDestinations(category);
                renderDestinations(filteredDestinations);
            });
        });
    }

    // Search page initialization
    if (document.getElementById('searchForm')) {
        // Show all destinations by default
        displaySearchResults(destinations);
        setupModalEvents();
        setupRatingWidget();

        // Search form submit
        document.getElementById('searchForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const location = document.getElementById('searchLocation').value;
            const category = document.getElementById('searchCategory').value;
            let filteredDestinations = destinations;

            if (location) {
                filteredDestinations = filteredDestinations.filter(dest =>
                    dest.location.toLowerCase().includes(location.toLowerCase())
                );
            }

            if (category && category !== 'all') {
                filteredDestinations = filteredDestinations.filter(dest =>
                    dest.category.toLowerCase().includes(category.toLowerCase())
                );
            }

            displaySearchResults(filteredDestinations);
        });
    }

    // Logout functionality
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }
});