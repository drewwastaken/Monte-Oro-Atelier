// ========================================
// HAMBURGER MENU & SIDEBAR
// ========================================
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarMenu = document.getElementById('sidebar-menu');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Open sidebar
hamburgerMenu.addEventListener('click', () => {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close sidebar
const closeSidebar = () => {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking links and smooth scroll
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            closeSidebar();
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
});

// ========================================
// FEATURES SECTION - IMAGE SWAP ON HOVER
// ========================================
const featureItems = document.querySelectorAll('.feature-item');
const featureImg = document.getElementById('feature-img');
const featuresContainer = document.getElementById('features-list');

// Store the default image URL
const defaultFeatureImage = 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80';
let currentFeatureImage = defaultFeatureImage;

// Add hover listeners to each feature item
featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const newImageUrl = item.getAttribute('data-image');
        
        if (newImageUrl && newImageUrl !== currentFeatureImage) {
            // Fade out
            featureImg.style.opacity = '0';
            
            // Change image after fade out
            setTimeout(() => {
                featureImg.src = newImageUrl;
                currentFeatureImage = newImageUrl;
                // Fade in
                featureImg.style.opacity = '1';
            }, 300);
        }
    });
});

// Reset to default image when mouse leaves the features content area
featuresContainer.addEventListener('mouseleave', () => {
    if (currentFeatureImage !== defaultFeatureImage) {
        // Fade out
        featureImg.style.opacity = '0';
        
        // Change back to default
        setTimeout(() => {
            featureImg.src = defaultFeatureImage;
            currentFeatureImage = defaultFeatureImage;
            // Fade in
            featureImg.style.opacity = '1';
        }, 300);
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    scrollRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animation when element is 80% visible in viewport
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('revealed');
        }
    });
};

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Check on page load
revealOnScroll();

// ========================================
// COLOR SWATCH SELECTOR - PRODUCT IMAGE SWAP
// ========================================
const colorSwatches = document.querySelectorAll('.color-swatch');
const productImg = document.getElementById('product-img');

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        // Remove active class from all swatches
        colorSwatches.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked swatch
        swatch.classList.add('active');
        
        // Get the new image URL from data attribute
        const newImageUrl = swatch.getAttribute('data-image');
        
        // Fade out current image
        productImg.style.opacity = '0';
        
        // Change image after fade out completes
        setTimeout(() => {
            productImg.src = newImageUrl;
            // Fade in new image
            productImg.style.opacity = '1';
        }, 300);
    });
});

// ========================================
// OPTIONAL: FUTURE E-COMMERCE FUNCTIONALITY
// ========================================
// Placeholder for Shop, Account, and Cart functionality
// These sections can be built out with proper backend integration

// Example structure for future development:
/*
const accountSection = document.querySelector('#account');
const shopSection = document.querySelector('#shop');

// Account page would include:
// - Profile picture upload
// - Name/email fields
// - Payment method management
// - Order history
// - Address book

// Shop page would include:
// - Product grid/list
// - Filtering and sorting
// - Add to cart functionality
// - Quick view modals
*/  