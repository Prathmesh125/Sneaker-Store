// Sample product data
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        price: 11250.00, // Converted from $150 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1450&auto=format&fit=crop",
        category: "Running",
        rating: 4.5,
        isNew: true,
        images: [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1450&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1562&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584735175315-9d5df23be620?q=80&w=1587&auto=format&fit=crop"
        ],
        sizes: [7, 8, 9, 10, 11],
        colors: ["Black", "White", "Red"],
        description: "The Nike Air Max 270 delivers a plush ride with its large Air unit in the heel and foam midsole. The sleek, running-inspired design pairs with a breathable mesh upper for a comfortable, everyday sneaker."
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        price: 13500.00, // Converted from $180 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1431&auto=format&fit=crop",
        category: "Running",
        rating: 4.8,
        isNew: false,
        images: [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1431&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1528&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1431&auto=format&fit=crop&flip=horizontal",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1431&auto=format&fit=crop&sat=-100"
        ],
        sizes: [7, 8, 9, 10, 11, 12],
        colors: ["Black", "White", "Blue"],
        description: "Experience incredible energy return with the Adidas Ultraboost 22. The responsive Boost midsole and supportive Primeknit upper combine to create a running shoe that's both comfortable and performance-driven."
    },
    {
        id: 3,
        name: "Jordan 1 Retro High",
        price: 12750.00, // Converted from $170 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?q=80&w=1480&auto=format&fit=crop",
        category: "Basketball",
        rating: 4.9,
        isNew: false,
        images: [
            "https://images.unsplash.com/photo-1597248881519-db089d3744a5?q=80&w=1480&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1530&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop"
        ],
        sizes: [8, 9, 10, 11, 12],
        colors: ["Red/Black", "Blue/White", "Black/White"],
        description: "The Air Jordan 1 Retro High is the shoe that started it all. This iconic basketball sneaker features a classic leather upper, Air cushioning, and a design that revolutionized sneaker culture."
    },
    {
        id: 4,
        name: "Puma RS-X",
        price: 8250.00, // Converted from $110 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop",
        category: "Casual",
        rating: 4.3,
        isNew: true,
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=1480&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605034314233-f646e7657a5d?q=80&w=1480&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=1480&auto=format&fit=crop&sat=-100"
        ],
        sizes: [7, 8, 9, 10, 11],
        colors: ["White/Blue", "Black/Red", "Gray/Yellow"],
        description: "The Puma RS-X reinvents Puma's Running System technology with a bulky design, bold color combinations, and exceptional cushioning for all-day comfort."
    },
    {
        id: 5,
        name: "New Balance 990v5",
        price: 13875.00, // Converted from $185 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop",
        category: "Running",
        rating: 4.7,
        isNew: false,
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1471&auto=format&fit=crop&flip=horizontal",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop&sat=-100"
        ],
        sizes: [8, 9, 10, 11, 12],
        colors: ["Gray", "Navy", "Black"],
        description: "The New Balance 990v5 continues the legacy of the iconic 990 series with premium materials, superior cushioning, and the perfect blend of stability and comfort."
    },
    {
        id: 6,
        name: "Vans Old Skool",
        price: 5250.00, // Converted from $70 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1598&auto=format&fit=crop",
        category: "Casual",
        rating: 4.6,
        isNew: false,
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1598&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1470&auto=format&fit=crop"
        ],
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ["Black/White", "Navy/White", "Red/White"],
        description: "The Vans Old Skool is a classic skate shoe with the iconic side stripe. Its durable canvas and suede upper, padded collar, and signature waffle outsole make it a timeless favorite."
    },
    {
        id: 7,
        name: "Converse Chuck Taylor All Star",
        price: 4500.00, // Converted from $60 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1421&auto=format&fit=crop",
        category: "Casual",
        rating: 4.5,
        isNew: false,
        images: [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1421&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=1471&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop"
        ],
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ["Black", "White", "Red", "Navy"],
        description: "The Converse Chuck Taylor All Star is an American icon with its canvas upper, rubber toe cap, and timeless design that has remained largely unchanged for over a century."
    },
    {
        id: 8,
        name: "Nike LeBron 19",
        price: 15000.00, // Converted from $200 to ₹ (1 USD = 75 INR)
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
        category: "Basketball",
        rating: 4.8,
        isNew: true,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1587&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579338908476-35790e5c6a2a?q=80&w=1587&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579338834087-03729ddc3e49?q=80&w=1587&auto=format&fit=crop"
        ],
        sizes: [8, 9, 10, 11, 12, 13],
        colors: ["Black/Red", "White/Gold", "Blue/Black"],
        description: "The Nike LeBron 19 is designed for the King himself, featuring a combination of Air Max and Zoom Air cushioning for explosive power and speed on the basketball court."
    }
];

// Cart functionality
let cart = [];

// Initialize cart from localStorage
try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        console.log('Cart loaded from localStorage:', cart); // Debug log
    } else {
        console.log('No cart found in localStorage'); // Debug log
    }
} catch (error) {
    console.error('Error loading cart from localStorage:', error); // Debug log
}

// Update cart count on page load
updateCartCount();

// Toggle menu for mobile
function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
}

// Display featured products on homepage
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (!featuredProductsContainer) return;

    // Clear container
    featuredProductsContainer.innerHTML = '';

    // Display first 4 products
    products.slice(0, 4).forEach(product => {
        const productElement = createProductElement(product);
        featuredProductsContainer.appendChild(productElement);
    });
}

// Create product element
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <div class="product-img">
            <img src="${product.image}" alt="${product.name}">
            ${product.isNew ? '<span class="product-label">New</span>' : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;

    // Add event listener to Add to Cart button
    productDiv.querySelector('.add-to-cart').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up to parent
        addToCart(product.id);
    });

    // Make the entire product card clickable
    productDiv.addEventListener('click', function() {
        navigateToProduct(product.id);
    });

    // Add cursor pointer to indicate clickability
    productDiv.style.cursor = 'pointer';

    return productDiv;
}

// Generate rating stars
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    // Half star
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Check if product is already in cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        // Increase quantity if product already in cart
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image, // This is already an absolute URL from our product data
            quantity: 1
        });
    }

    // Save cart to localStorage
    saveCart();

    // Update cart count
    updateCartCount();

    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Save cart to localStorage
function saveCart() {
    console.log('Saving cart to localStorage:', cart); // Debug log
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart saved successfully'); // Debug log
    } catch (error) {
        console.error('Error saving cart to localStorage:', error); // Debug log
    }
}

// Update cart count
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    console.log('Updating cart count to:', totalItems); // Debug log
    console.log('Cart count elements found:', cartCountElements.length); // Debug log

    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Show notification
function showNotification(message, type = 'success') {
    console.log('Showing notification:', message, 'Type:', type); // Debug log

    // Create notification element if it doesn't exist
    let notification = document.querySelector('.notification');

    if (!notification) {
        notification = document.createElement('div');
        notification.classList.add('notification');
        document.body.appendChild(notification);

        // Add CSS if not already in stylesheet
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 25px;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    z-index: 1000;
                    transform: translateX(150%);
                    transition: transform 0.3s ease;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                .notification.success {
                    background-color: #28a745;
                }
                .notification.error {
                    background-color: #dc3545;
                }
                .notification.show {
                    transform: translateX(0);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Reset classes and add type class
    notification.className = 'notification';
    notification.classList.add(type);

    // Set message and show notification
    notification.textContent = message;
    notification.classList.add('show');

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Navigate to product page
function navigateToProduct(productId) {
    window.location.href = `pages/product.html?id=${productId}`;
}

// Initialize page
function initPage() {
    // Display featured products on homepage
    displayFeaturedProducts();

    // Add event listeners for category items on homepage
    initCategoryLinks();

    // Add event listeners for product page
    const productContainer = document.getElementById('product-details');
    if (productContainer) {
        loadProductDetails();
    }

    // Add event listeners for cart page
    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
        displayCartItems();
    }
}

// Initialize category links on homepage
function initCategoryLinks() {
    const categoryItems = document.querySelectorAll('.category');

    if (categoryItems.length === 0) return;

    console.log('Found category items:', categoryItems.length); // Debug log

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent.trim();
            console.log('Category clicked:', categoryName); // Debug log

            // Navigate to products page with category filter
            window.location.href = `pages/products.html?category=${encodeURIComponent(categoryName)}`;
        });
    });
}

// Load product details on product page
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) return;

    const product = products.find(p => p.id === productId);

    if (!product) return;

    const productDetails = document.getElementById('product-details');
    const productImages = document.getElementById('product-images');
    const productInfo = document.getElementById('product-info');

    // Display product images
    // Check if image URL is absolute or relative
    const isAbsoluteUrl = (url) => url.startsWith('http://') || url.startsWith('https://');

    productImages.innerHTML = `
        <div class="main-image">
            <img src="${isAbsoluteUrl(product.images[0]) ? product.images[0] : '../' + product.images[0]}" alt="${product.name}" id="main-product-image">
        </div>
        <div class="thumbnail-container">
            ${product.images.map((img, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${isAbsoluteUrl(img) ? img : '../' + img}" alt="${product.name} ${index + 1}">
                </div>
            `).join('')}
        </div>
    `;

    // Display product info
    productInfo.innerHTML = `
        <h1>${product.name}</h1>
        <div class="product-rating">
            ${getRatingStars(product.rating)}
            <span class="rating-count">(${Math.floor(Math.random() * 500) + 100} reviews)</span>
        </div>
        <div class="product-price">₹${product.price.toFixed(2)}</div>
        <div class="product-description">
            <p>${product.description}</p>
        </div>
        <div class="product-options">
            <div class="size-selection">
                <h3>Select Size</h3>
                <div class="size-options">
                    ${product.sizes.map(size => `
                        <div class="size-option" data-size="${size}">
                            ${size}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="color-selection">
                <h3>Select Color</h3>
                <div class="color-options">
                    ${product.colors.map(color => `
                        <div class="color-option" data-color="${color}">
                            ${color}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="product-actions">
            <div class="quantity-selector">
                <button class="quantity-btn minus">-</button>
                <input type="number" value="1" min="1" max="10" id="quantity">
                <button class="quantity-btn plus">+</button>
            </div>
            <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
    `;

    // Add event listeners for thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const mainImage = document.getElementById('main-product-image');

            // Update main image
            mainImage.src = isAbsoluteUrl(product.images[index]) ? product.images[index] : `../${product.images[index]}`;

            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add event listeners for size options
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Add event listeners for color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Add event listeners for quantity buttons
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');

    minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 10) {
            quantityInput.value = quantity + 1;
        }
    });

    // Add event listener for add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        const selectedSize = document.querySelector('.size-option.selected');
        const selectedColor = document.querySelector('.color-option.selected');
        const quantity = parseInt(quantityInput.value);

        if (!selectedSize) {
            showNotification('Please select a size');
            return;
        }

        if (!selectedColor) {
            showNotification('Please select a color');
            return;
        }

        // Add to cart with selected options
        addToCartWithOptions(
            product.id,
            selectedSize.getAttribute('data-size'),
            selectedColor.getAttribute('data-color'),
            quantity
        );
    });

    // Display related products
    displayRelatedProducts(product);
}

// Add to cart with options
function addToCartWithOptions(productId, size, color, quantity) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Create unique ID for product with specific options
    const cartItemId = `${productId}-${size}-${color}`;

    // Check if product with same options is already in cart
    const existingProductIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingProductIndex !== -1) {
        // Increase quantity if product already in cart
        cart[existingProductIndex].quantity += quantity;
    } else {
        // Add new product to cart
        cart.push({
            id: product.id,
            cartItemId: cartItemId,
            name: product.name,
            price: product.price,
            image: product.image, // This is already an absolute URL from our product data
            size: size,
            color: color,
            quantity: quantity
        });
    }

    // Save cart to localStorage
    saveCart();

    // Update cart count
    updateCartCount();

    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Display cart items on cart page
function displayCartItems() {
    console.log('Displaying cart items:', cart); // Debug log
    const cartContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');

    if (!cartContainer || !cartSummary) {
        console.log('Cart container or summary not found'); // Debug log
        return;
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart"><h2>Your cart is empty</h2><p>Looks like you haven\'t added any products to your cart yet.</p><a href="products.html" class="btn">Continue Shopping</a></div>';
        cartSummary.style.display = 'none';
        return;
    }

    // Show cart summary
    cartSummary.style.display = 'block';

    // Clear container
    cartContainer.innerHTML = '';

    // Display cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Check if image URL is absolute or relative
        const isAbsoluteUrl = (url) => url && (url.startsWith('http://') || url.startsWith('https://'));

        // Use a default image if the image URL is missing or invalid
        const imageUrl = item.image && isAbsoluteUrl(item.image) ?
            item.image :
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${imageUrl}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                ${item.color ? `<p>Color: ${item.color}</p>` : ''}
                <p>Price: ₹${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.cartItemId || item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.cartItemId || item.id}">+</button>
            </div>
            <div class="cart-item-price">
                ₹${(item.price * item.quantity).toFixed(2)}
            </div>
            <div class="cart-item-remove">
                <button class="remove-btn" data-id="${item.cartItemId || item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Add event listeners for quantity buttons
    const minusBtns = document.querySelectorAll('.cart-item-quantity .minus');
    const plusBtns = document.querySelectorAll('.cart-item-quantity .plus');
    const removeBtns = document.querySelectorAll('.remove-btn');

    console.log('Minus buttons:', minusBtns.length); // Debug log
    console.log('Plus buttons:', plusBtns.length); // Debug log
    console.log('Remove buttons:', removeBtns.length); // Debug log

    minusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            console.log('Minus clicked for item:', itemId); // Debug log
            updateCartItemQuantity(itemId, -1);
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            console.log('Plus clicked for item:', itemId); // Debug log
            updateCartItemQuantity(itemId, 1);
        });
    });

    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            console.log('Remove clicked for item:', itemId); // Debug log
            removeCartItem(itemId);
        });
    });

    // Update cart summary
    updateCartSummary();

    // Add event listener to checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            console.log('Checkout button clicked'); // Debug log

            // Check if cart is empty
            if (!cart || cart.length === 0) {
                e.preventDefault();
                showNotification('Your cart is empty. Please add items to your cart before checkout.', 'error');
                return;
            }

            // If it's a link, let the default behavior happen (navigation to checkout.html)
            // If it's a button, redirect to checkout page
            if (!this.getAttribute('href')) {
                window.location.href = 'checkout.html';
            }
        });
    }
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    console.log('Updating quantity for item:', itemId, 'Change:', change); // Debug log
    const itemIndex = cart.findIndex(item => String(item.cartItemId || item.id) === String(itemId));

    console.log('Item index:', itemIndex); // Debug log

    if (itemIndex === -1) {
        console.log('Item not found in cart'); // Debug log
        return;
    }

    cart[itemIndex].quantity += change;
    console.log('New quantity:', cart[itemIndex].quantity); // Debug log

    // Remove item if quantity is 0
    if (cart[itemIndex].quantity <= 0) {
        console.log('Removing item due to zero quantity'); // Debug log
        cart.splice(itemIndex, 1);
    }

    // Save cart to localStorage
    saveCart();

    // Update cart count
    updateCartCount();

    // Show notification
    showNotification('Cart updated');

    // Refresh cart display
    displayCartItems();
}

// Remove cart item
function removeCartItem(itemId) {
    console.log('Removing item:', itemId); // Debug log
    const itemIndex = cart.findIndex(item => String(item.cartItemId || item.id) === String(itemId));

    console.log('Item index:', itemIndex); // Debug log

    if (itemIndex === -1) {
        console.log('Item not found in cart'); // Debug log
        return;
    }

    const removedItem = cart[itemIndex];
    cart.splice(itemIndex, 1);

    // Save cart to localStorage
    saveCart();

    // Update cart count
    updateCartCount();

    // Show notification
    showNotification(`${removedItem.name} removed from cart`);

    // Refresh cart display
    displayCartItems();
}

// Update cart summary
function updateCartSummary() {
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    if (!subtotalElement || !shippingElement || !taxElement || !totalElement) return;

    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Calculate shipping (free over ₹7500)
    const shipping = subtotal > 7500 ? 0 : 750; // 750 INR shipping fee (approximately $10)

    // Calculate tax (18% GST)
    const tax = subtotal * 0.18;

    // Calculate total
    const total = subtotal + shipping + tax;

    // Update elements
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    shippingElement.textContent = shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`;
    taxElement.textContent = `₹${tax.toFixed(2)}`;
    totalElement.textContent = `₹${total.toFixed(2)}`;
}

// Display related products
function displayRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('related-products');

    if (!relatedProductsContainer) return;

    // Clear container
    relatedProductsContainer.innerHTML = '';

    // Get related products (same category, excluding current product)
    const relatedProducts = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4); // Limit to 4 related products

    // If no related products in same category, get random products
    if (relatedProducts.length === 0) {
        const randomProducts = products
            .filter(p => p.id !== currentProduct.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

        randomProducts.forEach(product => {
            const productElement = createRelatedProductCard(product);
            relatedProductsContainer.appendChild(productElement);
        });
    } else {
        // Display related products
        relatedProducts.forEach(product => {
            const productElement = createRelatedProductCard(product);
            relatedProductsContainer.appendChild(productElement);
        });
    }
}

// Create related product card
function createRelatedProductCard(product) {
    const isAbsoluteUrl = (url) => url.startsWith('http://') || url.startsWith('https://');
    const productCard = document.createElement('div');
    productCard.classList.add('product');

    productCard.innerHTML = `
        <div class="product-img">
            <img src="${isAbsoluteUrl(product.image) ? product.image : '../' + product.image}" alt="${product.name}">
            ${product.isNew ? '<span class="product-label">New</span>' : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
            </div>
            <a href="product.html?id=${product.id}" class="btn view-details-btn">View Details</a>
        </div>
    `;

    return productCard;
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
