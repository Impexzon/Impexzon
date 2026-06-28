---
layout: page
title: Premium Confectionery Products
permalink: /products/
---

<style>

/* ------------------------------------------------------------------- */
/* GLOBAL VARIABLES */
/* ------------------------------------------------------------------- */

    :root {
        --text-light: #FAF4F0;
        --accent-color: #EADFD7; 
        --brand-color: #0c0806;
        --text-color: #0c0806;
        --text-color2: #0c0806;
        --dark-grey: #2c2523;
        --light-grey: #666;
        --page-background: #ffffff;
    }

/* ------------------------------------------------------------------- */
/* BASE PAGE & HEADER */
/* ------------------------------------------------------------------- */

    .products-page-container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 6rem 2vw 8rem; 
        background: var(--page-background);
    }

    .collection-header { 
        text-align: center; 
        margin-bottom: 5rem;
        position: relative;
    }

    .collection-header h1 { 
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem; 
        margin-bottom: 1rem;
        color: var(--brand-color); 
        font-weight: 300;
        letter-spacing: 2px;
    }
    
    .collection-header p {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.3rem;
        color: var(--light-grey);
        font-style: italic;
        font-weight: 300;
    }

    /* ------------------------------------------------------------------- */
    /* SHOP CONTROLS */
    /* ------------------------------------------------------------------- */
    .shop-controls {
        margin-bottom: 4rem;
        padding: 1.5rem 0;
        border-top: 1px solid rgba(0,0,0,0.08);
        border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    




    .sort-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .sort-container label {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--dark-grey);
        font-weight: 500;
    }
    
    #sort-select {
        padding: 10px 40px 10px 20px;
        border: 1.5px solid rgba(0,0,0,0.15);
        border-radius: 50px;
        font-size: 0.75rem;
        font-family: 'Montserrat', sans-serif;
        color: var(--dark-grey);
        background: #fff;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230c0806' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 15px center;
    }

    #sort-select:hover {
        border-color: var(--text-color);
        box-shadow: 0 2px 10px rgba(12, 8, 6, 0.1);
    }

/* ------------------------------------------------------------------- */
/* PREMIUM PRODUCT GRID - PERFECT FIT */
/* ------------------------------------------------------------------- */

.products-grid-full {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem 1.5rem;
    padding: 0;
    background: #ffffff;
}

.product-card {
    background: #ffffff;
    border: 1px solid #FAF4F0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 12px;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    border-color: #EADFD7;
    box-shadow: 0 10px 25px rgba(12, 8, 6, 0.06);
}

.product-details-link {
    display: block;
    color: inherit;
    text-decoration: none;
    flex-grow: 1;
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 8px;
    background-color: #FAF4F0;
}

.product-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image-wrapper img {
    transform: scale(1.05);
}



/* Info Section */
.product-info {
    padding: 15px 4px 12px;
    text-align: left;
}

.product-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0c0806;
    margin: 0 0 8px 0;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s ease;
}

.product-card:hover .product-title {
    color: #0c0806;
}

.product-description-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.82rem;
    color: #666;
    line-height: 1.45;
    margin: 0 0 12px 0;
    height: 2.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.product-price-section {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 5px;
}

.product-price {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    color: #0c0806;
    letter-spacing: 0.5px;
}

.product-offer {
    background: #EADFD7;
    color: #0c0806;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

/* Actions Section */
.product-card-actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding: 4px 4px 0;
}

.btn-card-inquiry {
    flex-grow: 1;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #0c0806;
    color: #0c0806;
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.78rem;
    letter-spacing: 1px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.25s ease;
}

.btn-card-inquiry:hover {
    background: #0c0806;
    color: #ffffff;
}

.btn-card-cart {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0c0806;
    color: #ffffff;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.25s ease;
    flex-shrink: 0;
}

.btn-card-cart:hover {
    background: #2b1f1a;
}

.btn-card-cart svg {
    width: 16px;
    height: 16px;
}

/* Mobile adjustments */
@media (max-width: 600px) {
    .products-grid-full {
        gap: 1.5rem;
    }

    .product-title {
        font-size: 1.1rem;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height: 2.6em;
    }

    .btn-card-inquiry {
        border-radius: 30px;
        height: 38px;
        font-size: 0.75rem;
    }

    .btn-card-cart {
        border-radius: 50%;
        width: 38px;
        height: 38px;
    }
}


/* ------------------------------------------------------------------- */
/* WHATSAPP FLOAT BUTTON */
/* ------------------------------------------------------------------- */

.whatsapp-float {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 60px;
    height: 60px;
    
    /* Clean Green Styling (matches common WhatsApp branding) */
    background: #25d366; 
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* Clean, professional shadow - no aggressive glow */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
    
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    
    /* Smooth scaling on interaction */
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; 
    
    /* Ensure no residual animation is running */
    animation: none !important;
}

/* Remove the aggressive wave/glow elements */
.whatsapp-float::before {
    content: none;
}

/* Interaction States */
.whatsapp-float:hover {
    transform: scale(1.05); /* Gentle lift */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3); 
}

.whatsapp-float:active {
    transform: scale(0.95);
}

/* Icon Styling */
.whatsapp-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.whatsapp-icon svg {
    fill: white; /* White icon on green background */
    width: 32px;
    height: 32px;
}

/* Text is generally not included in this simple floating design, 
   but if you had text, ensure it's hidden unless expanded (not applicable here). */
.whatsapp-text {
    display: none; 
}


    /* ------------------------------------------------------------------- */
    /* MOBILE RESPONSIVE */
    /* ------------------------------------------------------------------- */
    @media (max-width: 1200px) {
        .products-grid-full {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }

    @media (max-width: 768px) {
        .products-page-container { 
            padding: 4rem 3vw 6rem; 
        }
        
        .collection-header {
            margin-bottom: 3.5rem;
        }

        .collection-header h1 { 
            font-size: 2.2rem;
            letter-spacing: 1px;
        }

        .collection-header p {
            font-size: 1rem;
        }

        .shop-controls {
            margin-bottom: 3rem;
            padding: 1rem 0;
        }

        .filter-categories {
            margin-bottom: 1.2rem;
            gap: 10px;
        }

        .filter-btn {
            padding: 8px 18px;
            font-size: 0.7rem;
        }

        .sort-container {
            flex-direction: row;
            justify-content: center;
        }

        .sort-container label {
            font-size: 0.7rem;
        }

        #sort-select {
            padding: 8px 30px 8px 15px;
            font-size: 0.7rem;
        }

        .products-grid-full {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .product-card {
            display: flex;
            flex-direction: column;
            max-width: 450px;
            margin: 0 auto;
            width: 100%;
        }

        .product-info {
            padding: 0.7rem 0.7rem 0.9rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .product-title {
            font-size: 1.15rem;
            line-height: 1.3;
            height: auto;
            overflow: hidden;
        }

        .product-price-section {
            margin-top: auto; /* ✅ KEY FIX */
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-right: 5px;
            margin-left: 5px;
        }

        .product-price {
            font-size: 1rem;
        }

        .product-offer {
            font-size: 0.65rem;
            padding: 4px 10px;
            white-space: nowrap;
        }

        whatsapp-float {
        width: 55px;
        height: 55px;
        bottom: 20px;
        right: 20px;
    }
    .whatsapp-icon {
        width: 28px;
        height: 28px;
    }
    }

    @media (max-width: 480px) {
        .products-page-container {
            padding: 3.5rem 3vw 5rem;
        }

        .collection-header h1 {
            font-size: 1.8rem;
        }

        .collection-header p {
            font-size: 0.95rem;
        }

        .products-grid-full {
            gap: 1.5rem;
        }

        .product-price {
            font-size: 1rem;
        }

        .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 15px;
            right: 15px;
        }

        .whatsapp-icon svg {
            width: 26px;
            height: 26px;
        }
    }

    /* Fade in animation */
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

    .product-card {
        animation: fadeInUp 0.5s ease-out forwards;
        opacity: 0;
    }

    .product-card:nth-child(1) { animation-delay: 0.05s; }
    .product-card:nth-child(2) { animation-delay: 0.1s; }
    .product-card:nth-child(3) { animation-delay: 0.15s; }
    .product-card:nth-child(4) { animation-delay: 0.2s; }
    .product-card:nth-child(5) { animation-delay: 0.25s; }
    .product-card:nth-child(6) { animation-delay: 0.3s; }
    .product-card:nth-child(7) { animation-delay: 0.35s; }
    .product-card:nth-child(8) { animation-delay: 0.4s; }

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ==========================================
   ⭐ Responsive Search Results Banner Styling
   ========================================== */
#search-results-banner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px auto 10px;
    padding: 10px 24px;
    background-color: #FAF4F0;
    border-radius: 50px;
    border: 1px solid #EADFD7;
    font-family: "Montserrat", sans-serif;
    font-size: 0.92rem;
    color: #0c0806;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    max-width: 100%;
    box-sizing: border-box;
}

#clear-search-btn {
    color: #E83C91;
    font-weight: 600;
    text-decoration: underline;
    margin-left: 5px;
    transition: color 0.2s ease;
}

#clear-search-btn:hover {
    color: #c52775;
}

#no-products-msg {
    grid-column: 1 / -1;
    text-align: center;
    color: #888;
    font-size: 1.1rem;
    padding: 40px 0;
    display: none;
    font-family: "Montserrat", sans-serif;
}

@media (max-width: 600px) {
    #search-results-banner {
        display: flex; /* flex instead of inline-flex on mobile for proper wrapping */
        font-size: 0.8rem;
        padding: 8px 16px;
        margin: 15px auto;
        border-radius: 12px; /* slightly less round on mobile if text wraps */
        gap: 6px;
        flex-wrap: wrap;
        width: calc(100% - 16px); /* Keep some padding from screen borders */
        box-sizing: border-box;
    }
    #no-products-msg {
        font-size: 0.95rem;
        padding: 30px 10px;
    }
}
</style>

<div class="products-page-container">
    
    <div class="collection-header">
        <h2>Our Premium Confectionery Collection</h2>
        <p>High-quality wholesale biscuits, cookies, and bakery products for delivery</p>
    </div>
    <div class="shop-controls">
        <div class="sort-container">
            <label for="sort-select">Sort By</label>
            <select id="sort-select">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    </div>
    
    <div class="products-grid-full" id="product-grid">
        {% if site.products and site.products.size > 0 %}
            {% for product in site.products %}
            <div class="product-card" 
                 data-price="{{ product.price }}" 
                 data-date="{{ product.date | date: '%s' }}">
                
                <a href="{{ product.url | relative_url }}" class="product-details-link">
                    <div class="product-image-wrapper">
                        {% if product.image %}
                        <img src="{{ product.image | relative_url }}" alt="{{ product.name }} – premium bakery and biscuit product" loading="lazy" decoding="async">
                        {% endif %}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">
                            {{ product.name }}
                        </h3>
                        <p class="product-description-text">{{ product.description | default: "Premium quality confectionery product." }}</p>
                        <div class="product-price-section">
                            <span class="product-price">₹{{ product.price }}</span>
                            {% if product.offer %}
                            <span class="product-offer">{{ product.offer }}</span>
                            {% endif %}
                        </div>
                    </div>
                </a>
                
                <div class="product-card-actions">
                    <a href="#" onclick="openInquiryModal('{{ product.name | escape }}', '{{ product.price }}'); return false;" class="btn-card-inquiry">Inquiry</a>
                    <a href="#" onclick="addToCart('{{ product.slug }}', '{{ product.name | escape }}', '{{ product.price }}', '{{ product.image }}'); return false;" class="btn-card-cart" aria-label="Add to cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </a>
                </div>
            </div>
            {% endfor %}
        {% else %}
        <p>No products found.</p>
        {% endif %}
    </div>

<!-- WhatsApp Floating Button -->

        <a href="" 
                target="_blank" 
                class="whatsapp-float"
                aria-label="Contact us on WhatsApp">
                 <div class="whatsapp-content">
                     <div class="whatsapp-icon">
                         <svg viewBox="0 0 24 24">
                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.171-3.495-8.428"/> 
                         </svg>
                     </div>
                 </div>
        <!-- WhatsApp Floating Button end -->

{% include inquiry-modal.html %}

<script>
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    const products = Array.from(document.querySelectorAll('.product-card'));
    const sortSelect = document.getElementById('sort-select');

    function sortProducts(sortValue) {
        let sortedProducts = [...products];

        sortedProducts.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            const dateA = parseInt(a.getAttribute('data-date'));
            const dateB = parseInt(b.getAttribute('data-date'));

            if(sortValue === 'price-low') return priceA - priceB;
            if(sortValue === 'price-high') return priceB - priceA;
            return dateB - dateA;
        });

        sortedProducts.forEach(product => productGrid.appendChild(product));
    }

    // Set default to newest first
    sortProducts('newest');

    sortSelect.addEventListener('change', () => {
        sortProducts(sortSelect.value);
    });

    // ==========================================
    // ⭐ Real-time Client-Side Search Filtering
    // ==========================================
    function filterProductsByQuery(query) {
        const q = String(query || '').trim().toLowerCase();
        const cards = document.querySelectorAll('.product-card');
        let matchCount = 0;

        // 1. Get or create search info banner below title
        let banner = document.getElementById('search-results-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'search-results-banner';
            
            const collectionHeader = document.querySelector('.collection-header');
            if (collectionHeader) {
                collectionHeader.appendChild(banner);
            }
        }

        // 2. Get or create no-products placeholder inside grid
        let noResults = document.getElementById('no-products-msg');
        if (!noResults) {
            noResults = document.createElement('p');
            noResults.id = 'no-products-msg';
            noResults.textContent = 'No products found matching your search.';
            if (productGrid) {
                productGrid.appendChild(noResults);
            }
        }

        // If query is empty, reset filters and hide banner
        if (q === '') {
            cards.forEach(card => card.style.display = 'flex');
            banner.style.display = 'none';
            noResults.style.display = 'none';
            return;
        }

        // Filter cards by title & description matching
        cards.forEach(card => {
            const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.product-description-text')?.textContent.toLowerCase() || '';

            if (title.includes(q) || desc.includes(q)) {
                card.style.display = 'flex';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update banner text & controls (setting display to empty string lets CSS rules take over)
        banner.style.display = '';
        banner.innerHTML = `Showing results for <strong>"${escapeHtml(query)}"</strong> (${matchCount} product${matchCount === 1 ? '' : 's'} found) ` + 
            ` | <a href="#" id="clear-search-btn">Clear Search</a>`;

        // Bind clear search click event handler
        document.getElementById('clear-search-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            // Reset input values across modal and drawer search boxes
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            const drawerSearchInput = document.getElementById('drawerSearchInput');
            if (drawerSearchInput) drawerSearchInput.value = '';

            filterProductsByQuery('');
            
            // Clean URL query parameters
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({path: newUrl}, '', newUrl);
        });

        // Toggle no-results matching placeholder
        noResults.style.display = matchCount === 0 ? 'block' : 'none';
        noResults.innerHTML = `No products found matching <strong>"${escapeHtml(query)}"</strong>.`;
    }

    // Helper function to escape HTML output safely
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Expose filter handler globally for assets/js/main.js
    window.filterProductsByQuery = filterProductsByQuery;

    // Check URL parameters for q on initial page load
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');
    if (initialQuery) {
        filterProductsByQuery(initialQuery);
        // Also pre-fill search input fields if present
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = initialQuery;
        const drawerSearchInput = document.getElementById('drawerSearchInput');
        if (drawerSearchInput) drawerSearchInput.value = initialQuery;
    }
});
</script>