// Cart functionality
let cart = [];

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice
        };
        
        cart.push(cartItem);
        showNotification(`${productName} added to cart!`);
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.textContent = `🛒 Cart (${cart.length})`;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #d4af37;
        color: #0a0a0a;
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: bold;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simulate form submission
        console.log('Form submitted:', { name, email, message });
        showNotification('Thank you! We will contact you soon.');
        this.reset();
    });
}

// CTA Button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

// Add animation styles
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

    .product-card {
        animation: fadeInUp 0.6s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize
console.log('Eve Perfumee Website Loaded');
updateCartCount();
