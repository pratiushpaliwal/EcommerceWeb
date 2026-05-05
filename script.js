// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        seller: "TechStore",
        price: 79.99,
        rating: 4.5,
        reviews: 128,
        icon: "🎧"
    },
    {
        id: 2,
        name: "Smart Watch",
        seller: "GadgetHub",
        price: 199.99,
        rating: 4.8,
        reviews: 256,
        icon: "⌚"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        seller: "BagWorld",
        price: 49.99,
        rating: 4.3,
        reviews: 89,
        icon: "🎒"
    },
    {
        id: 4,
        name: "Coffee Maker",
        seller: "HomeEssentials",
        price: 89.99,
        rating: 4.6,
        reviews: 342,
        icon: "☕"
    },
    {
        id: 5,
        name: "Running Shoes",
        seller: "SportsPro",
        price: 129.99,
        rating: 4.7,
        reviews: 512,
        icon: "👟"
    },
    {
        id: 6,
        name: "Desk Lamp",
        seller: "LightingCo",
        price: 34.99,
        rating: 4.4,
        reviews: 167,
        icon: "💡"
    },
    {
        id: 7,
        name: "Yoga Mat",
        seller: "FitLife",
        price: 29.99,
        rating: 4.5,
        reviews: 234,
        icon: "🧘"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        seller: "AudioMax",
        price: 59.99,
        rating: 4.6,
        reviews: 445,
        icon: "🔊"
    }
];

// Cart state
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Render products
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-seller">by ${product.seller}</p>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');

    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification('Added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    🗑️
                </button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
