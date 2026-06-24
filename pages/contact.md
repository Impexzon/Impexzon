---
layout: page
title: Contact Impexzon
permalink: /contact/
description: Get in touch with Impexzon for wholesale biscuit orders, bulk distribution requests, and reliable doorstep delivery services.
---

<style>
/* ------------------------------------------------------------------- */
/* DESIGN VARIABLES & BASE STYLING */
/* ------------------------------------------------------------------- */
.contact-corporate {
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
    font-size: 1.1rem;
    color: #2c2523;
    max-width: 750px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ------------------------------------------------------------------- */
/* 2. CHANNELS ROW */
/* ------------------------------------------------------------------- */
.contact-channels {
    padding: 20px 0;
    margin-bottom: 60px;
}

.channels-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.channel-card {
    background: #ffffff;
    border: 1px solid #FAF4F0;
    border-radius: 6px;
    padding: 35px 24px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.channel-card:hover {
    transform: translateY(-5px);
    border-color: #EADFD7;
    box-shadow: 0 8px 25px rgba(12,8,6,0.06);
}

.channel-icon {
    width: 50px;
    height: 50px;
    background-color: #FAF4F0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c0806;
    margin-bottom: 20px;
    padding: 12px;
    transition: background-color 0.3s;
}

.channel-card:hover .channel-icon {
    background-color: #EADFD7;
}

.channel-icon svg {
    width: 100%;
    height: 100%;
}

.channel-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 10px;
}

.channel-card p {
    font-size: 0.95rem;
    color: #2c2523;
    line-height: 1.5;
    margin-bottom: 25px;
    flex-grow: 1;
}

.btn-channel-action {
    display: inline-block;
    width: 100%;
    max-width: 200px;
    background-color: #0c0806;
    color: #ffffff !important;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 12px 20px;
    border-radius: 2px;
    transition: background-color 0.25s, transform 0.2s;
}

.btn-channel-action:hover {
    background-color: #2b1f1a;
    transform: translateY(-1px);
}

/* ------------------------------------------------------------------- */
/* 3. DETAILS & MAP SECTION */
/* ------------------------------------------------------------------- */
.location-map-details {
    padding: 40px 0;
}

.details-grid {
    display: grid;
    grid-template-columns: 1.1fr 1.3fr;
    gap: 60px;
    align-items: start;
}

.details-card-corp {
    background: #FAF4F0;
    border-radius: 6px;
    padding: 40px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.details-card-corp h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0c0806;
    margin-bottom: 30px;
}

.info-block-corp {
    margin-bottom: 25px;
}

.info-block-corp:last-child {
    margin-bottom: 0;
}

.block-title-corp {
    font-weight: 700;
    font-size: 0.9rem;
    color: #0c0806;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.block-desc-corp {
    font-size: 1rem;
    font-weight: 400;
    color: #2c2523;
    margin: 0;
    line-height: 1.65;
}

.directions-btn {
    display: inline-block;
    margin-top: 10px;
    font-weight: 700;
    font-size: 0.85rem;
    color: #0c0806;
    text-decoration: none;
    border-bottom: 1.5px solid #0c0806;
    padding-bottom: 2px;
    transition: color 0.25s, border-color 0.25s;
}

.directions-btn:hover {
    color: #555;
    border-color: #555;
}

/* Map Container */
.map-col-integrated {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    border: 1px solid #FAF4F0;
}

.map-col-integrated iframe {
    width: 100%;
    height: 450px;
    border: none;
    display: block;
}

/* ------------------------------------------------------------------- */
/* RESPONSIVE MEDIA QUERIES */
/* ------------------------------------------------------------------- */
@media (max-width: 1024px) {
    .channels-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    /* Push third card to full row if uneven */
    .channels-grid .channel-card:nth-child(3) {
        grid-column: 1 / -1;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .details-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .map-col-integrated iframe {
        height: 350px;
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
    
    /* CRITICAL FIX: Reset text-transform and letter-spacing for mobile subtitle */
    .corporate-hero .hero-subtitle {
        font-size: 1.05rem;
        text-transform: none !important;
        letter-spacing: normal !important;
        line-height: 1.6 !important;
    }
    
    .channels-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .channels-grid .channel-card:nth-child(3) {
        grid-column: auto;
        max-width: 100%;
    }
    
    .details-card-corp {
        padding: 30px 20px;
    }
    
    .details-card-corp h2 {
        font-size: 1.6rem;
        margin-bottom: 20px;
    }
}
</style>

<div class="contact-corporate">
  <!-- 1. HERO SECTION -->
  <section class="corporate-hero">
    <span class="hero-label">Get in Touch</span>
    <h1 class="hero-title">Contact Our Sales Team</h1>
    <p class="hero-subtitle">Have questions about wholesale biscuits, batch options, or scheduling a delivery? Our sales and support team is ready to assist you.</p>
  </section>

  <h2 class="visually-hidden">Contact Impexzon</h2>

  <!-- 2. CONTACT CHANNELS -->
  <section class="contact-channels">
    <div class="channels-grid">
      
      <!-- WhatsApp -->
      <div class="channel-card">
        <div class="channel-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.171-3.495-8.428"/>
          </svg>
        </div>
        <h3>WhatsApp</h3>
        <p>Chat directly with our sales advisors for immediate bulk booking and product questions.</p>
        <a href="https://wa.me/{{ site.whatsapp_number }}" target="_blank" class="btn-channel-action">Chat Now</a>
      </div>

      <!-- Telegram -->
      <div class="channel-card">
        <div class="channel-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587c-6.3 0-11.4 5.1-11.4 11.4s5.1 11.4 11.4 11.4 11.4-5.1 11.4-11.4-5.1-11.4-11.4-11.4zm5.55 7.848c-.17 1.838-1.41 9.14-2.04 12.522-.27 1.432-1.04 1.432-1.57.973-.83-.722-2.18-1.89-3.21-2.77-.4-.34-.73-.66-.34-1.2.1-.14 1.76-2.427 3.51-4.832.19-.26.24-.46.1-.59-.14-.13-.39-.08-.55-.02-1.57 1.05-3.3 2.21-5.18 3.47-.4.27-.81.42-1.12.41-.35-.01-1.03-.2-1.53-.36-.62-.2-1.11-.31-1.07-.66.02-.18.27-.37.75-.56 2.94-1.28 7.37-3.21 9.77-4.25 1.13-.49 1.96-.58 2.37-.58.11 0 .36.02.53.15.17.13.21.36.19.64z"/>
          </svg>
        </div>
        <h3>Telegram</h3>
        <p>Connect with our B2B commercial advisors and local wholesale coordinators.</p>
        <a href="https://t.me/{{ site.telegram_username }}" target="_blank" class="btn-channel-action">Connect Now</a>
      </div>

      <!-- Email -->
      <div class="channel-card">
        <div class="channel-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <h3>Email</h3>
        <p>Send your specific confectionery supply requests or vendor applications to our inbox.</p>
        <a href="mailto:{{ site.email }}" class="btn-channel-action">Email Us</a>
      </div>

    </div>
  </section>

  <!-- 3. DETAILS & MAP -->
  <section class="location-map-details">
    <div class="details-grid">
      
      <!-- Contact details -->
      <div class="details-card-corp">
        <h2>Office Details</h2>
        
        <div class="info-block-corp">
          <div class="block-title-corp">HQ Address</div>
          <p class="block-desc-corp">Borey Nirothchey No 03 Tangov Kandal Village Niroth quarter Chbar ompov District Phnom Penh, Cambodia</p>
          <a href="https://maps.google.com/?q=Chbar+Ampov+Phnom+Penh+Cambodia" target="_blank" class="directions-btn">Get Directions →</a>
        </div>
        
        <div class="info-block-corp">
          <div class="block-title-corp">Email Contact</div>
          <p class="block-desc-corp">support@impexzon.com</p>
        </div>
        
        <div class="info-block-corp">
          <div class="block-title-corp">Operating Hours</div>
          <p class="block-desc-corp">Monday - Friday: 09:00 AM - 05:00 PM</p>
          <p class="block-desc-corp">Saturday - Sunday: Closed</p>
        </div>
      </div>

      <!-- Map -->
      <div class="map-col-integrated">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0286817290947!2d104.945!3d11.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513cd7787fb9%3A0xe54d89a42adbb4b!2sChbar%20Ampov%2C%20Phnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1718500000000!5m2!1sen!2sus" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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