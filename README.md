# MarketHub - E-commerce Marketplace Prototype

A modern, responsive e-commerce marketplace prototype built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Catalog**: Browse featured products with ratings and seller information
- **Category Navigation**: Shop by different product categories
- **Shopping Cart**: Add/remove items with real-time cart updates
- **Cart Sidebar**: Slide-out cart panel with item management
- **Search Functionality**: Search bar for finding products (UI ready)
- **User Authentication**: Sign-in button (UI ready for backend integration)

## Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality and interactivity
└── README.md       # This file
```

## How to Use

1. Open `index.html` in any modern web browser
2. Browse products in the featured section
3. Click "Add to Cart" to add items to your shopping cart
4. Click the cart icon (🛒) to view your cart
5. Remove items by clicking the trash icon in the cart
6. Explore different categories

## Features Implemented

### Current Features
- ✅ Product listing with 8 sample products
- ✅ Shopping cart functionality
- ✅ Add/remove items from cart
- ✅ Real-time cart total calculation
- ✅ Cart item counter badge
- ✅ Responsive navigation
- ✅ Category browsing
- ✅ Product ratings display
- ✅ Smooth animations and transitions
- ✅ Toast notifications

### Ready for Backend Integration
- 🔄 User authentication
- 🔄 Product search
- 🔄 Checkout process
- 🔄 Payment gateway
- 🔄 Order management
- 🔄 Seller dashboard
- 🔄 Product filtering

## Customization

### Adding More Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 9,
    name: "Product Name",
    seller: "Seller Name",
    price: 99.99,
    rating: 4.5,
    reviews: 100,
    icon: "🎁"
}
```

### Changing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* Add your custom colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- User authentication system
- Payment processing
- Product reviews and ratings
- Wishlist functionality
- Order tracking
- Seller dashboard
- Advanced search and filters
- Product recommendations
- Multi-language support

## License

This is a prototype for demonstration purposes.

---

**Built with ❤️ for MarketHub**
