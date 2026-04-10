import React from 'react';

const StructuredData = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Organization structured data for the website
export const OrganizationStructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mera Halwai",
    "url": "https://www.merahalwai.com",
    "logo": "https://www.merahalwai.com/logo.svg",
    "description": "Discover & book trusted halwais, sweets & catering for every occasion. Customizable menus, smart filters, flexible payments & live order tracking.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://www.merahalwai.com/contact"
    },
    "sameAs": [
      // Add your social media URLs here when available
      // "https://facebook.com/merahalwai",
      // "https://instagram.com/merahalwai",
      // "https://twitter.com/merahalwai"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "$$"
  };

  return <StructuredData data={organizationData} />;
};

// Website structured data
export const WebsiteStructuredData = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mera Halwai",
    "url": "https://www.merahalwai.com",
    "description": "Discover & book trusted halwais, sweets & catering for every occasion.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.merahalwai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <StructuredData data={websiteData} />;
};

// Local Business structured data (if applicable)
export const LocalBusinessStructuredData = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mera Halwai",
    "description": "Platform connecting customers with trusted halwais and catering services",
    "url": "https://www.merahalwai.com",
    "logo": "https://www.merahalwai.com/logo.svg",
    "serviceArea": {
      "@type": "Country", 
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catering and Sweet Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sweet Catering",
            "description": "Traditional Indian sweets and mithai catering services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Event Catering",
            "description": "Full-service catering for weddings, parties, and events"
          }
        }
      ]
    }
  };

  return <StructuredData data={localBusinessData} />;
};

export default StructuredData;
