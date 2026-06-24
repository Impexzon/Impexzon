---
layout: page
title: About Impexzon
permalink: /about/
description: Learn about Impexzon, a premier global sourcing and export consulting company connecting international buyers with top-tier Indian manufacturers.
---

<style>
/* ------------------------------------------------------------------- */
/* DESIGN VARIABLES & BASE STYLING */
/* ------------------------------------------------------------------- */
.about-corporate {
    font-family: 'Montserrat', sans-serif;
    color: #1a1a1a;
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
/* 2. STORY SECTION */
/* ------------------------------------------------------------------- */
.corporate-story {
    padding: 40px 0;
    margin-bottom: 60px;
}

.story-grid {
    display: grid;
    grid-template-columns: 1.1fr 1.3fr;
    gap: 60px;
    align-items: center;
}

.story-image-col {
    width: 100%;
}

.story-img {
    width: 100%;
    height: auto;
    max-height: 450px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.story-img:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
}

.story-text-col h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 20px;
    line-height: 1.2;
}

.story-text-col .lead {
    font-size: 1.15rem;
    color: #0c0806;
    font-weight: 500;
    margin-bottom: 18px;
    line-height: 1.7;
}

.story-text-col p {
    font-size: 1.02rem;
    color: #555;
    margin-bottom: 16px;
    line-height: 1.75;
}

/* ------------------------------------------------------------------- */
/* 3. CAPABILITIES / SERVICES SECTION */
/* ------------------------------------------------------------------- */
.corporate-capabilities {
    padding: 60px 0;
    margin-bottom: 60px;
}

.corporate-capabilities .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
}

.corporate-capabilities .section-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 15px;
}

.corporate-capabilities .section-header .section-desc {
    font-size: 1.1rem;
    color: #666;
}

.capabilities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.capability-card {
    background: #ffffff;
    border: 1px solid #FAF4F0;
    border-radius: 6px;
    padding: 35px 24px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.capability-card:hover {
    transform: translateY(-5px);
    border-color: #EADFD7;
    box-shadow: 0 8px 25px rgba(12,8,6,0.06);
}

.capability-icon {
    width: 48px;
    height: 48px;
    color: #0c0806;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAF4F0;
    border-radius: 4px;
    padding: 10px;
    transition: background-color 0.3s;
}

.capability-card:hover .capability-icon {
    background-color: #EADFD7;
}

.capability-icon svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
}

.capability-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 12px;
}

.capability-card p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
}

/* ------------------------------------------------------------------- */
/* 4. MISSION & VISION SECTION */
/* ------------------------------------------------------------------- */
.corporate-mv {
    background-color: #FAF4F0;
    padding: 60px 40px;
    border-radius: 4px;
    margin-bottom: 60px;
}

.mv-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.mv-card-corp {
    background: #ffffff;
    border-radius: 6px;
    padding: 40px 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
}

.mv-card-corp:hover {
    transform: translateY(-3px);
}

.mv-icon-bg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FAF4F0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c0806;
    margin-bottom: 20px;
    padding: 12px;
    transition: background-color 0.3s;
}

.mv-card-corp:hover .mv-icon-bg {
    background-color: #EADFD7;
}

.mv-icon-bg svg {
    width: 100%;
    height: 100%;
}

.mv-card-corp h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 15px;
}

.mv-card-corp p {
    font-size: 1rem;
    color: #555;
    line-height: 1.7;
    margin: 0;
}

/* ------------------------------------------------------------------- */
/* 5. FOUNDER SECTION */
/* ------------------------------------------------------------------- */
.corporate-founder {
    padding: 40px 0;
    margin-bottom: 60px;
}

.founder-grid-corp {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 60px;
    align-items: center;
}

.founder-img-col-corp {
    display: flex;
    justify-content: center;
}

.founder-img-wrapper-corp {
    width: 100%;
    max-width: 320px;
    position: relative;
}

.founder-img-corp {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    display: block;
}

.founder-img-corp:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
}

.founder-text-col-corp h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 5px;
}

.founder-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.15rem;
    color: #0c0806;
    display: block;
    margin-bottom: 24px;
}

.founder-title .founder-sub {
    font-weight: 400;
    color: #888;
    font-size: 0.95rem;
    margin-left: 8px;
}

.founder-text-col-corp p {
    font-size: 1.02rem;
    color: #555;
    margin-bottom: 16px;
    line-height: 1.75;
}

/* ------------------------------------------------------------------- */
/* 6. CTA SECTION */
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
    .story-grid, .founder-grid-corp {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .story-image-col, .founder-img-col-corp {
        order: -1;
    }
    
    .story-img, .founder-img-corp {
        max-width: 400px;
        margin: 0 auto;
    }
    
    .capabilities-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .mv-grid {
        grid-template-columns: 1fr;
        gap: 30px;
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
    
    .story-text-col h2, .founder-text-col-corp h2, .corporate-capabilities .section-header h2, .cta-box-corp h2 {
        font-size: 1.9rem;
    }
    
    .capabilities-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .mv-card-corp {
        padding: 30px 20px;
    }
    
    .founder-img-corp {
        height: 350px;
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

<div class="about-corporate">
  <!-- 1. HERO SECTION -->
  <section class="corporate-hero">
    <span class="hero-label">Who We Are</span>
    <h1 class="hero-title">Premium Biscuit Sales & Quality Sourcing</h1>
    <p class="hero-subtitle">Impexzon is a premier distributor and supplier of high-quality biscuits and cookies, delivering delicious treats directly to wholesale and retail networks.</p>
  </section>

  <h2 class="visually-hidden">About Impexzon</h2>

  <!-- 2. OUR STORY SECTION -->
  <section class="corporate-story">
    <div class="story-grid">
      <div class="story-image-col">
        <img src="/assets/images/about_company.png" 
             alt="Impexzon retail and wholesale biscuit distribution office" 
             class="story-img"
             loading="lazy"
             decoding="async">
      </div>
      <div class="story-text-col">
        <span class="section-badge">Our Journey</span>
        <h2>Delivering Premium Confectionery</h2>
        <p class="lead">Impexzon was founded on the principles of quality taste, trusted supply chains, and reliable client-focused delivery.</p>
        <p>We specialize in supplying a wide range of premium biscuits and cookies, distributing delicious treats to retail shops, supermarkets, and wholesale hubs. Our team coordinates the entire process—selecting top confectionery bakers, checking batch expiration dates, ensuring protective packaging, and managing safe transport.</p>
        <p>Whether you need bulk shipments for large retail distribution or wholesale supply for local grocery markets, we guarantee fresh quality, prompt deliveries, and tailored customer service.</p>
      </div>
    </div>
  </section>

  <!-- 3. SERVICES & CAPABILITIES SECTION -->
  <section class="corporate-capabilities">
    <div class="section-header">
      <span class="section-badge">Why Choose Us</span>
      <h2>Our Sourcing Advantages</h2>
      <p class="section-desc">We make bulk biscuit procurement simple, consistent, and secure.</p>
    </div>
    <div class="capabilities-grid">
      <!-- Card 1: Freshness -->
      <div class="capability-card">
        <div class="capability-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Guaranteed Freshness</h3>
        <p>We track production batches and inspect packaging seals to verify that all biscuits and cookies arrive with optimal shelf-life and crisp texture.</p>
      </div>
      <!-- Card 2: Selection -->
      <div class="capability-card">
        <div class="capability-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Curated Varieties</h3>
        <p>Our catalog features a diverse range of biscuit varieties (butter cookies, cream fillings, healthy grain options) crafted by audited bakers.</p>
      </div>
      <!-- Card 3: Logistics -->
      <div class="capability-card">
        <div class="capability-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zM13 16h6l3-3V9a1 1 0 00-1-1h-8v8z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Damage-Free Logistics</h3>
        <p>Confectionery items are fragile. We supervise packaging reinforcement and shipping to prevent crushing, humidity damage, or product cracking during transport.</p>
      </div>
      <!-- Card 4: Wholesale Ready -->
      <div class="capability-card">
        <div class="capability-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM17 19v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM22 9V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2V9z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Wholesale Infrastructure</h3>
        <p>From flexible batch sizing to customized grocery inventory syncs, we simplify procurement operations for wholesale merchants and supermarkets.</p>
      </div>
    </div>
  </section>

  <!-- 6. CTA SECTION -->
  <section class="corporate-cta">
    <div class="cta-box-corp">
      <h2>Scale Your Confectionery Sales</h2>
      <p>Let's partner to supply premium biscuits and cookies to your retail shelves or distribution hubs. Speak directly with our sales team.</p>
      <div class="cta-actions-corp">
        <a href="/#contact" class="btn-corp-primary">Contact Sales</a>
        <a href="mailto:support@impexzon.com" class="btn-corp-secondary">Request Catalog</a>
      </div>
    </div>
  </section>
</div>

<!-- search -->
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