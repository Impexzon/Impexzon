// Premium mobile navigation with enhanced performance
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // FIX: Ensure navbar is always visible
    if (header) {
        header.style.display = 'block';
        header.style.visibility = 'visible';
        header.style.opacity = '1';
    }
    
    // ==========================================================
    // ⭐ BFCache FIX: Force menu state reset on browser back/forward (Issue 1 Fix)
    // ==========================================================
    window.addEventListener('pageshow', function(event) {
        // Check if the page is loaded from the cache (when using back/forward buttons)
        if (event.persisted) {
            // Ensure the header is visible (Safety check)
            if (header) {
                header.style.display = 'block';
                header.style.visibility = 'visible';
                header.style.opacity = '1';
            }
            
            // Remove active class from mobile menu elements
            if (navMenu && navMenu.classList.contains('active')) {
                // If it's a mobile view, hide the menu
                navMenu.classList.remove('active');
            }
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
            }
        }
    });
    // ==========================================================
    
    // HAMBURGER MENU FUNCTIONALITY
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // FIX: Prevent navbar from hiding
            if (header) {
                header.style.display = 'block';
            }
            
            // Staggered animation for nav items
            if (navMenu.classList.contains('active')) {
                animateMenuOpen();
            } else {
                animateMenuClose();
            }
        });
    }
    
    // Staggered menu item animations disabled to prevent desynchronization/invisible option bugs.
    // CSS transition now handles layout slide & fade smoothly and natively.
    function animateMenuOpen() {
        navMenu.style.animation = 'none';
        navLinks.forEach(link => {
            link.style.animation = 'none';
        });
    }
    
    function animateMenuClose() {
        navMenu.style.animation = 'none';
        navLinks.forEach(link => {
            link.style.animation = 'none';
        });
    }
    
    // Close mobile/tablet menu when clicking on a link with smooth exit
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
    
            // Only handle mobile/tablet menu closing (drawer width is active up to 1024px)
            if (window.innerWidth <= 1024) {
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    animateMenuClose();
                }
            }
    
            // IMPORTANT: allow normal navigation
            return true;
        });
    });
    
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            if (!event.target.closest('.hamburger') && !event.target.closest('.nav-menu')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                animateMenuClose();
                
                // FIX: Ensure navbar stays visible
                if (header) {
                    header.style.display = 'block';
                }
            }
        }
    });
    
    // FIX: Window resize handler to ensure navbar visibility
    window.addEventListener('resize', function() {
        if (header) {
            header.style.display = 'block';
        }
        if (window.innerWidth > 1024 && navMenu) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });

    // ========== SMOOTH SCROLLING FIX ==========
    
    // Modern smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // 1. Ignore empty links or just "#"
            if (href === '#' || href === '#!') return;
            
            // 2. Find the target element on THIS page
            const target = document.querySelector(href);
            
            // 3. CRITICAL: Only prevent default if the target actually exists on this page
            if (target) {
                e.preventDefault(); // Stop navigation only if we can scroll
                
                // Close mobile menu logic
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    animateMenuClose();
                    
                    setTimeout(() => {
                        smoothScrollTo(target);
                    }, 300);
                } else {
                    smoothScrollTo(target);
                }
            }
            // If target is null, the browser will ignore this and navigate normally
        });
    });

    // High-performance smooth scroll function
    function smoothScrollTo(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 80; // Offset for fixed header
        const duration = 800;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth acceleration/deceleration
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // ========== PERFORMANCE OPTIMIZATIONS ==========
    
    // Throttled scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Add any scroll-based animations here
            }, 100);
        }
    });

    // Optimize animations with will-change
    if (navMenu) {
        navMenu.style.willChange = 'transform, opacity';
    }
    navLinks.forEach(link => {
        link.style.willChange = 'transform, opacity';
    });

    // Sync body scrolling lock with menu active state automatically
    if (navMenu) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    const isActive = navMenu.classList.contains('active');
                    document.body.classList.toggle('menu-open', isActive);
                }
            });
        });
        observer.observe(navMenu, { attributes: true });
    }

    // ==========================================================
    // Navigation Drawer Menu Handlers
    // ==========================================================
    
    // Close button inside the drawer
    const drawerClose = document.getElementById('drawerClose');
    if (drawerClose) {
        drawerClose.addEventListener('click', function() {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) {
                navMenu.classList.remove('active');
                animateMenuClose();
            }
        });
    }

    // Search input inside the drawer
    const drawerSearchInput = document.getElementById('drawerSearchInput');
    if (drawerSearchInput) {
        drawerSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = drawerSearchInput.value.trim();
                if (query) {
                    const base = window.siteBaseUrl || "";
                    const cleanPath = window.location.pathname.replace(/\/$/, "");
                    const productsPath = `${base}/products`.replace(/\/$/, "");
                    const isProductsPage = cleanPath === productsPath;
                    if (isProductsPage && typeof window.filterProductsByQuery === 'function') {
                        window.filterProductsByQuery(query);
                        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(query);
                        window.history.pushState({path: newUrl}, '', newUrl);
                        
                        // Close drawer
                        const navMenu = document.querySelector('.nav-menu');
                        const hamburger = document.querySelector('.hamburger');
                        if (navMenu) navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                    } else {
                        window.location.href = `${base}/products/?q=${encodeURIComponent(query)}`;
                    }
                }
            }
        });
    }

    // Dynamic Auth text and event handlers in the drawer
    const drawerSignInBtn = document.getElementById('drawerSignInBtn');
    if (drawerSignInBtn) {
        drawerSignInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const auth = window.firebaseAuthInstance || (window.firebase && window.firebase.auth && window.firebase.auth());
            if (auth) {
                if (auth.currentUser) {
                    if (window.logoutUser) {
                        window.logoutUser();
                    }
                } else {
                    if (window.loginWithGoogle) {
                        window.loginWithGoogle();
                    }
                }
            } else {
                console.error("Firebase Auth not initialized");
            }
        });

        // Sync sign in/out text
        const auth = window.firebaseAuthInstance || (window.firebase && window.firebase.auth && window.firebase.auth());
        if (auth) {
            auth.onAuthStateChanged(function(user) {
                const drawerSignInText = document.getElementById('drawerSignInText');
                if (user) {
                    if (drawerSignInText) {
                        drawerSignInText.textContent = 'SIGN OUT';
                    } else {
                        drawerSignInBtn.textContent = 'SIGN OUT';
                    }
                } else {
                    if (drawerSignInText) {
                        drawerSignInText.textContent = 'SIGN IN';
                    } else {
                        drawerSignInBtn.textContent = 'SIGN IN';
                    }
                }
            });
        }
    }
});

// ==========================================================
// ENHANCED BFCache FIX: Force complete navbar repaint on back/forward
// ==========================================================

// Listen for pageshow event (triggers on back/forward navigation)
window.addEventListener('pageshow', function(event) {
    // This fires when page is loaded from back/forward cache
    if (event.persisted) {
        console.log('Back/Forward navigation detected - fixing navbar visibility');
        
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-link');
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        // CRITICAL: Force complete style reset and repaint
        if (header) {
            // Force visibility styles
            header.style.cssText = `
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: fixed !important;
                top: 0 !important;
                width: 100% !important;
                z-index: 1000 !important;
            `;
        }
        
        // Force nav links to be visible
        navLinks.forEach(link => {
            link.style.cssText = `
                color: var(--primary-nav-color) !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: block !important;
            `;
        });
        
        // Ensure mobile menu is closed
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
        
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
        }
        
        // Add a class to body for CSS targeting
        document.body.classList.add('pageshow');
        
        // Remove the class after a short delay
        setTimeout(() => {
            document.body.classList.remove('pageshow');
        }, 100);
    }
});

// Additional safety: Also fix visibility on regular page load
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (header) {
        header.style.visibility = 'visible';
        header.style.opacity = '1';
    }
    
    navLinks.forEach(link => {
        link.style.visibility = 'visible';
        link.style.opacity = '1';
    });
});

// Fix for Safari specifically (known back/forward cache issues)
if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    window.addEventListener('beforeunload', function() {
        // Force styles to be reapplied when returning to page
        const header = document.querySelector('.header');
        if (header) {
            header.style.visibility = 'visible';
        }
    });
}

// Listen for pageshow event (triggers on back/forward navigation)
window.addEventListener('pageshow', function(event) {
    // This fires when page is loaded from back/forward cache
    if (event.persisted) {
        console.log('Back/Forward navigation detected - fixing all styles');
        
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-link');
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        // CRITICAL: Force complete style reset and repaint
        if (header) {
            header.style.cssText = `
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: fixed !important;
                top: 0 !important;
                width: 100% !important;
                z-index: 1000 !important;
            `;
        }
        
        // Force nav links to be visible with proper hover states
        navLinks.forEach(link => {
            link.style.cssText = `
                color: var(--primary-nav-color) !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: block !important;
                text-decoration: none !important;
            `;
            
            // Re-apply hover event listeners
            link.onmouseenter = function() {
                this.style.color = 'var(--active-nav-color) !important';
            };
            link.onmouseleave = function() {
                this.style.color = 'var(--primary-nav-color) !important';
            };
        });
        
        // CRITICAL: Ensure mobile menu is properly closed and styled
        if (navMenu) {
            navMenu.classList.remove('active');
            navMenu.style.background = 'transparent !important';
            navMenu.style.backdropFilter = 'none !important';
        }
        
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
        }
        
        // Add a class to body for CSS targeting
        document.body.classList.add('pageshow');
        
        // Remove the class after styles are reapplied
        setTimeout(() => {
            document.body.classList.remove('pageshow');
        }, 500); // Increased timeout for better styling application
    }

});

// CSS styles moved to main.css and header.html to prevent flickering and overrides.

// ========== ADDITIONAL PERFORMANCE FIXES ==========

// Optimize hero animation performance
// window.addEventListener('load', function() {
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         window.addEventListener('scroll', function() {
//             const scrolled = window.pageYOffset;
//             const rate = scrolled * -0.5;
//             hero.style.transform = `translateY(${rate}px)`;
//         });
//     }
// });

// search

const modal = document.getElementById("searchModal");
const btn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const go = document.getElementById("searchGo");

btn.onclick = () => {
  modal.classList.remove("hidden");
  input.focus();
};

go.onclick = doSearch;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
});

function doSearch() {
    const q = input.value.trim();
    if (!q) return;
    
    const base = window.siteBaseUrl || "";
    const cleanPath = window.location.pathname.replace(/\/$/, "");
    const productsPath = `${base}/products`.replace(/\/$/, "");
    const isProductsPage = cleanPath === productsPath;
    if (isProductsPage && typeof window.filterProductsByQuery === 'function') {
        window.filterProductsByQuery(q);
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(q);
        window.history.pushState({path: newUrl}, '', newUrl);
        
        // Close modal
        const searchModal = document.getElementById('searchModal');
        if (searchModal) {
            searchModal.classList.remove('active');
        }
    } else {
        window.location.href = `${base}/products/?q=${encodeURIComponent(q)}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn'); // Your Navbar magnifying glass
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    // Open Modal
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchModal.classList.add('active');
        
        // Wait slightly for animation, then focus input
        setTimeout(() => searchInput.focus(), 100);
    });

    // Close Modal
    function closeSearchModal() {
        searchModal.classList.remove('active');
    }

    closeSearch.addEventListener('click', closeSearchModal);

    // Close if clicking outside the wrapper (optional, but good UX)
    window.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearchModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearchModal();
        }
    });
});