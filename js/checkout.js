// Checkout Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize checkout page
    initCheckout();

    // Add event listeners for navigation buttons
    document.getElementById('to-customer-details').addEventListener('click', function() {
        goToStep(2);
    });

    document.getElementById('back-to-summary').addEventListener('click', function() {
        goToStep(1);
    });

    document.getElementById('to-payment').addEventListener('click', function() {
        // Validate customer form before proceeding
        if (validateCustomerForm()) {
            goToStep(3);
        }
    });

    document.getElementById('back-to-details').addEventListener('click', function() {
        goToStep(2);
    });

    document.getElementById('place-order').addEventListener('click', function() {
        // Validate payment form before proceeding
        if (validatePaymentForm()) {
            placeOrder();
        }
    });

    document.getElementById('download-bill').addEventListener('click', function() {
        generateBill();
    });

    // Add event listeners for payment method selection
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const paymentOptions = document.querySelectorAll('.payment-option-header');

    // Add click event to radio buttons
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            updatePaymentDetails();
        });
    });

    // Add click event to payment option headers
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Find the radio button within this payment option
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                // Trigger the change event
                const event = new Event('change');
                radio.dispatchEvent(event);
            }
        });
    });
});

// Initialize checkout page
function initCheckout() {
    // Load cart items from localStorage
    loadCart();

    // Display order summary
    displayOrderSummary();

    // Update payment details based on default selection
    updatePaymentDetails();
}

// Load cart from localStorage
function loadCart() {
    try {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            cart = JSON.parse(cartData);
            updateCartCount();
        }
    } catch (error) {
        console.error('Error loading cart:', error);
        cart = [];
    }
}

// Display order summary
function displayOrderSummary() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    if (!checkoutItemsContainer) return;

    // Clear container
    checkoutItemsContainer.innerHTML = '';

    // Check if cart is empty
    if (!cart || cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Your cart is empty. Please add items to your cart before checkout.</p>';
        document.getElementById('to-customer-details').disabled = true;
        return;
    }

    // Display cart items
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        // Check if image URL is absolute or relative
        const isAbsoluteUrl = (url) => url && (url.startsWith('http://') || url.startsWith('https://'));

        // Use a default image if the image URL is missing or invalid
        const imageUrl = item.image && isAbsoluteUrl(item.image) ?
            item.image :
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop';

        orderItem.innerHTML = `
            <div class="order-item-image">
                <img src="${imageUrl}" alt="${item.name}">
            </div>
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-price">₹${item.price.toFixed(2)}</div>
                <div class="order-item-quantity">Quantity: ${item.quantity}</div>
                ${item.size ? `<div class="order-item-size">Size: ${item.size}</div>` : ''}
                ${item.color ? `<div class="order-item-color">Color: ${item.color}</div>` : ''}
            </div>
            <div class="order-item-total">
                ₹${(item.price * item.quantity).toFixed(2)}
            </div>
        `;

        checkoutItemsContainer.appendChild(orderItem);
    });

    // Update order summary
    updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Calculate shipping (free over ₹7500)
    const shipping = subtotal > 7500 ? 0 : 750;

    // Calculate tax (18% GST)
    const tax = subtotal * 0.18;

    // Calculate total
    const total = subtotal + shipping + tax;

    // Update elements
    document.getElementById('checkout-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`;
    document.getElementById('checkout-tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `₹${total.toFixed(2)}`;
}

// Update payment details based on selected payment method
function updatePaymentDetails() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

    // Hide all payment details
    document.querySelectorAll('.payment-details').forEach(details => {
        details.style.display = 'none';
    });

    // Show selected payment details
    document.getElementById(`${selectedMethod}-details`).style.display = 'block';

    // Reset all payment options styling
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('active');
    });

    // Add active class to selected payment option
    document.getElementById(`${selectedMethod}-option`).classList.add('active');

    // Focus on the first input field in the selected payment method
    const firstInput = document.getElementById(`${selectedMethod}-details`).querySelector('input');
    if (firstInput) {
        setTimeout(() => {
            firstInput.focus();
        }, 300);
    }

    // Update Place Order button text based on payment method
    const placeOrderBtn = document.getElementById('place-order');
    if (placeOrderBtn) {
        switch(selectedMethod) {
            case 'upi':
                placeOrderBtn.textContent = 'Pay with UPI';
                break;
            case 'card':
                placeOrderBtn.textContent = 'Pay with Card';
                break;
            case 'cod':
                placeOrderBtn.textContent = 'Place Order (COD)';
                break;
            default:
                placeOrderBtn.textContent = 'Place Order';
        }
    }
}

// Navigate to a specific step
function goToStep(step) {
    // Update active step
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        if (index + 1 < step) {
            el.classList.add('completed');
            el.classList.remove('active');
        } else if (index + 1 === step) {
            el.classList.add('active');
            el.classList.remove('completed');
        } else {
            el.classList.remove('active', 'completed');
        }
    });

    // Update progress lines
    document.querySelectorAll('.progress-line').forEach((line, index) => {
        if (index + 1 < step) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });

    // Show active step content
    document.querySelectorAll('.checkout-step').forEach(content => {
        content.classList.remove('active');
    });

    const steps = ['order-summary', 'customer-details', 'payment-method', 'order-confirmation'];
    document.getElementById(steps[step - 1]).classList.add('active');

    // Scroll to top of the checkout section
    document.querySelector('.checkout-section').scrollIntoView({ behavior: 'smooth' });
}

// Validate customer form
function validateCustomerForm() {
    const form = document.getElementById('customer-form');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        alert('Please fill in all required fields.');
    }

    return isValid;
}

// Validate payment form
function validatePaymentForm() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    let isValid = true;

    if (selectedMethod === 'upi') {
        const upiId = document.getElementById('upi-id');
        if (!upiId.value.trim() || !upiId.value.includes('@')) {
            upiId.classList.add('error');
            isValid = false;
            alert('Please enter a valid UPI ID.');
        } else {
            upiId.classList.remove('error');
        }
    } else if (selectedMethod === 'card') {
        const cardInputs = document.querySelectorAll('#card-details input');
        cardInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('Please fill in all card details.');
        }
    }

    return isValid;
}

// Place order
function placeOrder() {
    // Generate order number
    const orderNumber = generateOrderNumber();

    // Get current date
    const orderDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Get payment method
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const paymentMethodText = {
        'upi': 'UPI',
        'card': 'Credit/Debit Card',
        'cod': 'Cash on Delivery'
    }[paymentMethod];

    // Get total amount
    const totalAmount = document.getElementById('checkout-total').textContent;

    // Update confirmation page
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('order-date').textContent = orderDate;
    document.getElementById('order-payment-method').textContent = paymentMethodText;
    document.getElementById('order-total').textContent = totalAmount;

    // Save order details to localStorage for bill generation
    const customerDetails = {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value
    };

    const orderDetails = {
        orderNumber,
        orderDate,
        paymentMethod: paymentMethodText,
        totalAmount,
        items: cart,
        customer: customerDetails,
        subtotal: document.getElementById('checkout-subtotal').textContent,
        shipping: document.getElementById('checkout-shipping').textContent,
        tax: document.getElementById('checkout-tax').textContent
    };

    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // Clear cart
    localStorage.removeItem('cart');
    cart = [];
    updateCartCount();

    // Go to confirmation step
    goToStep(4);
}

// Generate order number
function generateOrderNumber() {
    const prefix = 'SZ';
    const timestamp = new Date().getTime().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
}

// Generate and download bill
function generateBill() {
    // Get order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('lastOrder'));
    if (!orderDetails) {
        alert('Order details not found.');
        return;
    }

    // Create bill content
    let billContent = `
        <html>
        <head>
            <title>Invoice - ${orderDetails.orderNumber}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    color: #333;
                }
                .invoice {
                    max-width: 800px;
                    margin: 0 auto;
                    border: 1px solid #ddd;
                    padding: 30px;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .header h1 {
                    color: #ff3d3d;
                    margin: 0;
                }
                .company-details {
                    margin-bottom: 30px;
                }
                .invoice-details {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 30px;
                }
                .customer-details, .order-details {
                    width: 48%;
                }
                h2 {
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                    margin-top: 0;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f9f9f9;
                }
                .total-row {
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 50px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="invoice">
                <div class="header">
                    <h1>SneakerZone</h1>
                    <p>Your one-stop shop for premium sneakers</p>
                </div>

                <div class="company-details">
                    <p>123 Sneaker St, Footwear City</p>
                    <p>Phone: +1 234 567 8900 | Email: info@sneakerzone.com</p>
                    <p>GST: 27AADCS0472N1Z1</p>
                </div>

                <div class="invoice-details">
                    <div class="customer-details">
                        <h2>Bill To</h2>
                        <p><strong>${orderDetails.customer.name}</strong></p>
                        <p>${orderDetails.customer.address}</p>
                        <p>${orderDetails.customer.city}, ${orderDetails.customer.state} - ${orderDetails.customer.pincode}</p>
                        <p>Phone: ${orderDetails.customer.phone}</p>
                        <p>Email: ${orderDetails.customer.email}</p>
                    </div>

                    <div class="order-details">
                        <h2>Invoice Details</h2>
                        <p><strong>Invoice Number:</strong> INV-${orderDetails.orderNumber}</p>
                        <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
                        <p><strong>Date:</strong> ${orderDetails.orderDate}</p>
                        <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
                    </div>
                </div>

                <h2>Order Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    // Add items to bill
    orderDetails.items.forEach(item => {
        billContent += `
            <tr>
                <td>${item.name}${item.size ? ` (Size: ${item.size})` : ''}${item.color ? ` (Color: ${item.color})` : ''}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    });

    // Add summary to bill
    billContent += `
                    </tbody>
                </table>

                <table>
                    <tr>
                        <td style="text-align: right; width: 80%;">Subtotal:</td>
                        <td>${orderDetails.subtotal}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping:</td>
                        <td>${orderDetails.shipping}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax (18% GST):</td>
                        <td>${orderDetails.tax}</td>
                    </tr>
                    <tr class="total-row">
                        <td style="text-align: right;">Total:</td>
                        <td>${orderDetails.totalAmount}</td>
                    </tr>
                </table>

                <div class="footer">
                    <p>Thank you for shopping with SneakerZone!</p>
                    <p>For any queries related to this order, please contact our customer support.</p>
                </div>
            </div>
        </body>
        </html>
    `;

    // Create a Blob with the HTML content
    const blob = new Blob([billContent], { type: 'text/html' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Invoice-${orderDetails.orderNumber}.html`;

    // Trigger download
    document.body.appendChild(a);
    a.click();

    // Clean up
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}
