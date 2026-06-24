---
layout: page
title: Our Services
permalink: /services/
description: Discover Impexzon's premium biscuit sourcing, bulk order distribution, and reliable customer delivery services.
---

<style>
/* ------------------------------------------------------------------- */
/* DESIGN VARIABLES & BASE STYLING */
/* ------------------------------------------------------------------- */
.services-corporate {
    font-family: 'Montserrat', sans-serif;
    color: #0c0806;
    background: #ffffff;
    line-height: 1.6;
    padding: 20px 0 60px;
}

.section-badge {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 12px;
    display: block;
}

/* ------------------------------------------------------------------- */
/* 1. HERO SECTION */
/* ------------------------------------------------------------------- */
.corporate-hero {
    background-color: #FAF4F0;
    padding: 60px 40px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 60px;
}

.corporate-hero .hero-label {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 15px;
    display: block;
}

.corporate-hero .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2;
    color: #0c0806;
    margin: 0 auto 20px;
    max-width: 850px;
}

.corporate-hero .hero-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    color: #555;
    max-width: 750px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ------------------------------------------------------------------- */
/* 2. CORE SERVICES SECTION (CARDS GRID) */
/* ------------------------------------------------------------------- */
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
}

.service-card {
    background: #FAF4F0;
    border-radius: 6px;
    padding: 40px 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(12, 8, 6, 0.08);
}

.service-icon-bg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c0806;
    margin-bottom: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}

.service-icon-bg svg {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
}

.service-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 15px;
}

.service-card p {
    font-size: 0.98rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
}

/* ------------------------------------------------------------------- */
/* 3. PROCESS TIMELINE */
/* ------------------------------------------------------------------- */
.process-section {
    background-color: #FAF4F0;
    padding: 60px 40px;
    border-radius: 4px;
    margin-bottom: 60px;
    text-align: center;
}

.process-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 15px;
}

.process-section .section-desc {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 50px;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.process-step {
    background: #ffffff;
    border-radius: 6px;
    padding: 30px 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    position: relative;
    transition: transform 0.3s;
}

.process-step:hover {
    transform: translateY(-3px);
}

.step-number {
    width: 40px;
    height: 40px;
    background-color: #0c0806;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0 auto 20px;
}

.process-step h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 10px;
}

.process-step p {
    font-size: 0.92rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
}

/* ------------------------------------------------------------------- */
/* 4. CTA SECTION */
/* ------------------------------------------------------------------- */
.corporate-cta {
    padding: 20px 0;
}

.cta-box-corp {
    background-color: #0c0806;
    border-radius: 4px;
    padding: 60px 40px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.cta-box-corp h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #ffffff;
}

.cta-box-corp p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto 30px;
    line-height: 1.6;
}

.cta-actions-corp {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-corp-primary, .btn-corp-secondary {
    padding: 14px 28px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    transition: all 0.25s;
    cursor: pointer;
}

.btn-corp-primary {
    background-color: #ffffff;
    color: #0c0806 !important;
    border: 1px solid #ffffff;
}

.btn-corp-primary:hover {
    background-color: #FAF4F0;
    transform: translateY(-2px);
}

.btn-corp-secondary {
    background-color: transparent;
    color: #ffffff !important;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
}

.btn-corp-secondary:hover {
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
}

/* ------------------------------------------------------------------- */
/* RESPONSIVE MEDIA QUERIES */
/* ------------------------------------------------------------------- */
@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .process-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .corporate-hero {
        padding: 40px 20px;
        margin-bottom: 40px;
    }
    
    .corporate-hero .hero-title {
        font-size: 2.2rem;
    }
    
    .corporate-hero .hero-subtitle {
        font-size: 1.05rem;
        text-transform: none !important;
        letter-spacing: normal !important;
        line-height: 1.6 !important;
    }
    
    .service-card h3, .process-section h2, .cta-box-corp h2 {
        font-size: 1.9rem;
    }
    
    .process-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .cta-box-corp {
        padding: 40px 20px;
    }
    
    .cta-actions-corp {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    
    .btn-corp-primary, .btn-corp-secondary {
        width: 100%;
        max-width: 300px;
        box-sizing: border-box;
        display: block;
    }
}
</style>

<div class="services-corporate">
  <!-- 1. HERO SECTION -->
  <section class="corporate-hero">
    <span class="hero-label">What We Offer</span>
    <h1 class="hero-title">Direct Sourcing & Order Fulfillment</h1>
    <p class="hero-subtitle">Impexzon offers specialized bulk procurement and direct logistics services, delivering fresh premium biscuits and bakery products to your locations with total precision.</p>
  </section>

  <!-- 2. CORE SERVICES SECTION -->
  <section class="services-grid">
    <!-- Card 1: Custom Sourcing & Order Placement -->
    <div class="service-card">
      <div class="service-icon-bg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 14l2 2 4-4"></path>
        </svg>
      </div>
      <h3>Custom Order Placement</h3>
      <p>Place purchase orders tailored directly to your volume, product mix, and scheduling requirements. We arrange flexible wholesale batches and sync with your retail or warehouse inventory needs.</p>
    </div>

    <!-- Card 2: Accurate Doorstep Delivery -->
    <div class="service-card">
      <div class="service-icon-bg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      </div>
      <h3>Direct Location Delivery</h3>
      <p>We deliver fresh orders directly to your retail shops, supermarkets, warehouses, or local markets. Confectionery is handled in secure, moisture-free conditions to ensure biscuits arrive crisp and damage-free.</p>
    </div>

    <!-- Card 3: Zero-Error Supply Chain Check -->
    <div class="service-card">
      <div class="service-icon-bg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 11l2 2 4-4"></path>
        </svg>
      </div>
      <h3>Zero-Error Execution</h3>
      <p>Our operations team guarantees mistake-free fulfillment. We double-check expiration dates, packaging integrity, and shipping manifests so you receive the exact batch counts and pristine products you ordered.</p>
    </div>
  </section>

  <!-- 3. PROCESS TIMELINE -->
  <section class="process-section">
    <h2>Our Fulfillment Journey</h2>
    <p class="section-desc">A simple, transparent process ensuring fresh delivery to your location.</p>
    
    <div class="process-grid">
      <!-- Step 1 -->
      <div class="process-step">
        <div class="step-number">1</div>
        <h3>Place Custom Order</h3>
        <p>Submit your product preferences, quantities, and delivery schedules directly through our sourcing platforms.</p>
      </div>
      <!-- Step 2 -->
      <div class="process-step">
        <div class="step-number">2</div>
        <h3>Verify & Pack</h3>
        <p>We inspect production batches for freshness, secure fragile boxes, and verify final batch counts before loadout.</p>
      </div>
      <!-- Step 3 -->
      <div class="process-step">
        <div class="step-number">3</div>
        <h3>Secure Delivery</h3>
        <p>Our logistics team transports shipments directly to your store or warehouse location under optimal transit conditions.</p>
      </div>
    </div>
  </section>

  <!-- 4. CTA SECTION -->
  <section class="corporate-cta">
    <div class="cta-box-corp">
      <h2>Place Your Sourcing Order Today</h2>
      <p>Work directly with our team to customize biscuit orders, schedule recurrent deliveries, or request our full catalog.</p>
      <div class="cta-actions-corp">
        <a href="/#contact" class="btn-corp-primary">Contact Sales</a>
        <a href="mailto:support@impexzon.com" class="btn-corp-secondary">Request Catalog</a>
      </div>
    </div>
  </section>
</div>

<!-- search modal wrapper (required for global navigation search) -->
<div id="searchModal" class="search-modal"> 
  <div class="search-wrapper">
    <input id="searchInput" type="text" placeholder="Search for products..." autocomplete="off" />
    <button id="searchGo" class="search-confirm-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
    <button id="closeSearch" class="close-btn" aria-label="Close Search">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
</div>
