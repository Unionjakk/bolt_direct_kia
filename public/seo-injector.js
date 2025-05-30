// Simple SEO meta tag injector - runs before React loads
(function() {
  const path = window.location.pathname;
  
  // Default SEO values
  let title = 'DirectKia - New & Used Kia Cars';
  let description = 'Browse our selection of new and used Kia vehicles with competitive pricing and nationwide delivery across the UK.';
  
  // Route-based SEO configuration
  if (path === '/') {
    title = 'DirectKia - New & Used Kia Cars | Best Deals UK';
    description = 'Find the best deals on new and used Kia cars at DirectKia. Electric vehicles, competitive pricing, and nationwide delivery across the UK.';
  } else if (path === '/new-cars') {
    title = 'New Kia Cars | Latest Electric Models | DirectKia';
    description = 'Browse our selection of brand new Kia electric vehicles. Featuring the latest EV models with competitive pricing and nationwide delivery across the UK.';
  } else if (path === '/new-cars/ev3') {
    title = 'New Kia EV3 Offers | Electric SUV | DirectKia';
    description = 'Discover the all-new Kia EV3 electric SUV with up to 372 miles range. View current offers, specifications, and book your test drive today.';
  } else if (path.startsWith('/new-cars/ev3/offer/')) {
    const vehicleId = path.split('/').pop();
    title = `Kia EV3 Offer ${vehicleId} | New Car Deals | DirectKia`;
    description = `Discover our exclusive Kia EV3 offer ${vehicleId}. Electric SUV with competitive pricing and finance options. View this special deal on the new Kia EV3.`;
    
    // For dynamic routes, try to fetch real data
    fetchOfferSEO(vehicleId);
  } else if (path === '/used-cars') {
    title = 'Used Kia Cars | Quality Pre-Owned Vehicles | DirectKia';
    description = 'Browse our selection of quality used Kia cars. All vehicles checked and prepared with competitive pricing across the UK.';
  } else if (path === '/contact') {
    title = 'Contact DirectKia | Get in Touch | Kia Dealership';
    description = 'Contact DirectKia for enquiries about new and used Kia vehicles. Expert advice, competitive pricing, and nationwide delivery.';
  } else if (path === '/finance') {
    title = 'Car Finance | Kia Finance Options | DirectKia';
    description = 'Explore flexible car finance options for new and used Kia vehicles. Competitive rates and terms to suit your budget.';
  }
  
  // Update the page title and meta tags immediately
  updateSEO(title, description);
  
  async function fetchOfferSEO(vehicleId) {
    try {
      const response = await fetch(`https://himiywrlajmgruscisks.supabase.co/rest/v1/direct_kia_new_vehicles_offers?vehicle_id=eq.${vehicleId}&model=ilike.EV3&select=make,model,variant,trim_level,final_price,range_miles`, {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbWl5d3JsYWptZ3J1c2Npc2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2MzIsImV4cCI6MjA1ODk5MTYzMn0.2T9wuwbTBr9OghyJjGGVbvG8VKe-8bSJgSmzGdgMfQ0',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbWl5d3JsYWptZ3J1c2Npc2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTU2MzIsImV4cCI6MjA1ODk5MTYzMn0.2T9wuwbTBr9OghyJjGGVbvG8VKe-8bSJgSmzGdgMfQ0'
        }
      });
      
      const data = await response.json();
      if (data && data.length > 0) {
        const offer = data[0];
        const offerTitle = `${offer.make} ${offer.model} ${offer.variant}${offer.trim_level ? ` ${offer.trim_level}` : ''} | New Car Deals | DirectKia`;
        const offerDescription = `Discover our exclusive offer on the ${offer.make} ${offer.model} ${offer.variant}. Electric SUV with ${offer.range_miles} miles range. Special pricing from £${offer.final_price?.toLocaleString()}.`;
        
        updateSEO(offerTitle, offerDescription);
      }
    } catch (error) {
      console.log('Could not fetch offer SEO data:', error);
      // Keep the fallback values already set
    }
  }
  
  function updateSEO(title, description) {
    // Update title
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update or create Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;
    
    // Update or create Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }
})();
