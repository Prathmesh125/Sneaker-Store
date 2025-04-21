// Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize products page
    initProductsPage();

    // Add event listeners for filters
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('price-filter').addEventListener('change', filterProducts);
    document.getElementById('sort-filter').addEventListener('change', filterProducts);

    // Add event listener for search
    document.getElementById('search-button').addEventListener('click', searchProducts);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
});

// Initialize products page
function initProductsPage() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    console.log('URL category parameter:', categoryParam); // Debug log

    if (categoryParam) {
        // Set the category filter dropdown to match the URL parameter
        const categoryFilter = document.getElementById('category-filter');

        // Find the option that matches the category (case insensitive)
        const options = Array.from(categoryFilter.options);
        const matchingOption = options.find(option =>
            option.value.toLowerCase() === categoryParam.toLowerCase() ||
            option.text.toLowerCase() === categoryParam.toLowerCase()
        );

        if (matchingOption) {
            categoryFilter.value = matchingOption.value;
            console.log('Set category filter to:', matchingOption.value); // Debug log

            // Apply filters
            filterProducts();
            return;
        }
    }

    // If no URL parameters or no matching category, display all products
    displayAllProducts();
}

// Display all products
function displayAllProducts() {
    const productsContainer = document.getElementById('products-container');

    if (!productsContainer) return;

    // Clear container
    productsContainer.innerHTML = '';

    // Check if products exist
    if (!products || products.length === 0) {
        document.getElementById('no-products').style.display = 'block';
        return;
    }

    // Display all products
    products.forEach(product => {
        const productElement = createProductCard(product);
        productsContainer.appendChild(productElement);
    });
}

// Create product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.isNew ? '<span class="product-badge">New</span>' : ''}
        </div>
        <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-category">${product.category}</div>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;

    // Make the entire product card clickable
    productCard.addEventListener('click', function(e) {
        // Navigate to product details page
        window.location.href = `product.html?id=${product.id}`;
    });

    // Add event listener to Add to Cart button
    productCard.querySelector('.add-to-cart-btn').addEventListener('click', function(e) {
        // Prevent the click from bubbling up to the card
        e.stopPropagation();
        addToCart(product.id);
    });

    // Add cursor pointer to indicate clickability
    productCard.style.cursor = 'pointer';

    return productCard;
}

// Filter products based on selected filters
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    // Filter products
    let filteredProducts = [...products];

    // Apply category filter
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // Apply price filter (adjusted for INR)
    if (priceFilter !== 'all') {
        if (priceFilter === '0-100') {
            filteredProducts = filteredProducts.filter(product => product.price <= 7500); // 0-7500 INR
        } else if (priceFilter === '100-150') {
            filteredProducts = filteredProducts.filter(product => product.price > 7500 && product.price <= 11250); // 7500-11250 INR
        } else if (priceFilter === '150-200') {
            filteredProducts = filteredProducts.filter(product => product.price > 11250 && product.price <= 15000); // 11250-15000 INR
        } else if (priceFilter === '200+') {
            filteredProducts = filteredProducts.filter(product => product.price > 15000); // 15000+ INR
        }
    }

    // Apply search filter
    if (searchInput) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchInput) ||
            product.category.toLowerCase().includes(searchInput) ||
            product.description.toLowerCase().includes(searchInput)
        );
    }

    // Sort products
    if (sortFilter === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortFilter === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortFilter === 'name-desc') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Display filtered products
    displayFilteredProducts(filteredProducts);
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('products-container');
    const noProductsElement = document.getElementById('no-products');

    if (!productsContainer) return;

    // Clear container
    productsContainer.innerHTML = '';

    // Check if filtered products exist
    if (!filteredProducts || filteredProducts.length === 0) {
        noProductsElement.style.display = 'block';
        return;
    }

    // Hide no products message
    noProductsElement.style.display = 'none';

    // Display filtered products
    filteredProducts.forEach(product => {
        const productElement = createProductCard(product);
        productsContainer.appendChild(productElement);
    });
}

// Search products
function searchProducts() {
    filterProducts();
}
