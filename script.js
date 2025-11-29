// script.js for Golu Store - Professional Grocery Website

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header-main').appendChild(mobileMenuButton);

    const nav = document.querySelector('nav');
    mobileMenuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Search Functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function () {
        performSearch();
    });

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            alert(`Searching for: ${query}\n(In a real implementation, this would show search results)`);
            // In a real implementation, you would:
            // 1. Send the query to your backend
            // 2. Display the results on a search results page
        }
    }

    // Product Category Hover Effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    // Only initialize slider if there are multiple testimonials
    if (testimonials.length > 1) {
        showTestimonial(0);

        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Shopping Cart Functionality
    const cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    cartCount.textContent = '0';

    const cartIcon = document.createElement('div');
    cartIcon.className = 'cart-icon';
    cartIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cartIcon.appendChild(cartCount);

    document.querySelector('.logo').appendChild(cartIcon);

    // Simulate adding to cart
    const addToCartButtons = document.querySelectorAll('.cta-button');
    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Shop Now')) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const currentCount = parseInt(cartCount.textContent);
                cartCount.textContent = currentCount + 1;
                cartCount.classList.add('animate');

                setTimeout(() => {
                    cartCount.classList.remove('animate');
                }, 500);

                // In a real implementation, you would:
                // 1. Add the actual product to a cart array
                // 2. Update local storage or send to backend
                // 3. Show a confirmation message
            });
        }
    });

    // Newsletter Subscription
    const newsletterForm = document.createElement('form');
    newsletterForm.className = 'newsletter-form';
    newsletterForm.innerHTML = `
        <h3>Subscribe to Our Newsletter</h3>
        <div class="form-group">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </div>
    `;

    document.querySelector('.footer-col:first-child').appendChild(newsletterForm);

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        this.querySelector('input').value = '';

        // In a real implementation, you would:
        // 1. Validate the email
        // 2. Send it to your backend/newsletter service
        // 3. Show a proper success message
    });

    // Add some CSS for the new elements
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary);
            cursor: pointer;
        }
        
        .cart-icon {
            position: relative;
            margin-left: 20px;
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        .cart-count {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: var(--secondary);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            transition: transform 0.3s;
        }
        
        .cart-count.animate {
            transform: scale(1.5);
        }
        
        .newsletter-form {
            margin-top: 20px;
        }
        
        .newsletter-form h3 {
            font-size: 1rem;
            margin-bottom: 10px;
            color: var(--secondary);
        }
        
        .newsletter-form .form-group {
            display: flex;
        }
        
        .newsletter-form input {
            flex: 1;
            padding: 8px 12px;
            border: none;
            border-radius: 4px 0 0 4px;
        }
        
        .newsletter-form button {
            background-color: var(--secondary);
            color: #333;
            border: none;
            padding: 8px 15px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block;
            }
            
            nav ul {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--white);
                flex-direction: column;
                padding: 20px 0;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
            }
            
            nav ul.show {
                display: flex;
            }
            
            nav ul li {
                margin: 10px 0;
            }
        }
    `;
    document.head.appendChild(style);
});