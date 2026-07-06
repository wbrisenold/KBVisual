import { Helmet } from "react-helmet-async";
import type { Graph, Thing } from "schema-dts";

const SITE_URL = "https://kbvisualz.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const BUSINESS_ID = `${SITE_URL}/#business`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  canonicalPath?: string;
  url?: string;
  type?: string;
  structuredData?: Thing | Thing[];
}

const SEOHead = ({ 
  title = "Orlando Portrait Photographer | KB Visualz",
  description = "KB Visualz is an Orlando portrait photographer serving Central Florida with graduation, prom, family, branding, fashion, studio, and creative portrait sessions.",
  keywords = "Orlando portrait photographer, portrait photography Orlando FL, Central Florida photographer, graduation portraits Orlando, prom portraits Orlando, family portraits Orlando, branding portraits Orlando, studio portraits Orlando, Ken Brisenold, KB Visualz",
  image = DEFAULT_IMAGE,
  imageAlt = "Portrait photography by KB Visualz in Orlando, Florida",
  canonicalPath = "/",
  url,
  type = "website",
  structuredData = []
}: SEOHeadProps) => {
  const fullTitle = title.includes("KB Visualz") ? title : `${title} | KB Visualz`;
  const canonicalUrl = url || `${SITE_URL}${canonicalPath}`;
  const jsonLdItems = Array.isArray(structuredData) ? structuredData : [structuredData];
  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": BUSINESS_ID,
        "name": "KB Visualz",
        "alternateName": "Ken Brisenold Photography",
        "description": "Orlando portrait photography for graduation, prom, family, branding, fashion, studio, couples, engagement, and creative sessions.",
        "url": SITE_URL,
        "image": DEFAULT_IMAGE,
        "email": "wilkensbrisenold@gmail.com",
        "founder": {
          "@type": "Person",
          "@id": `${SITE_URL}/about/#ken-brisenold`,
          "name": "Ken Brisenold",
          "jobTitle": "Portrait Photographer",
          "description": "Military veteran and UCF graduate creating portrait photography in Orlando and Central Florida."
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Orlando",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "City", "name": "Orlando" },
          { "@type": "AdministrativeArea", "name": "Central Florida" },
          { "@type": "City", "name": "Winter Park" },
          { "@type": "City", "name": "Kissimmee" },
          { "@type": "City", "name": "Sanford" },
          { "@type": "City", "name": "Lake Mary" },
          { "@type": "City", "name": "Altamonte Springs" }
        ],
        "hasMap": "https://maps.app.goo.gl/BEkRxpxfFDjurBfG7",
        "priceRange": "$250-$400+",
        "paymentAccepted": "Cash, credit card, bank transfer",
        "openingHours": "Mo-Su 09:00-20:00",
        "sameAs": [
          "https://www.instagram.com/kbvisualz_/"
        ],
        "knowsAbout": [
          "Portrait photography",
          "Graduation portraits",
          "Prom portraits",
          "Family portraits",
          "Branding portraits",
          "Fashion portraits",
          "Studio portraits",
          "Creative portraits",
          "Engagement portraits"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Signature Portrait Session",
            "price": "250",
            "priceCurrency": "USD",
            "itemOffered": {
              "@type": "Service",
              "name": "One-hour Orlando portrait photography session",
              "serviceType": "Portrait photography"
            }
          },
          {
            "@type": "Offer",
            "name": "Legacy Portrait Session",
            "price": "400",
            "priceCurrency": "USD",
            "itemOffered": {
              "@type": "Service",
              "name": "Two-hour Orlando portrait photography session",
              "serviceType": "Portrait photography"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": "KB Visualz",
        "url": SITE_URL,
        "publisher": {
          "@id": BUSINESS_ID
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": fullTitle,
        "description": description,
        "isPartOf": {
          "@id": `${SITE_URL}/#website`
        },
        "about": {
          "@id": BUSINESS_ID
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": image,
          "caption": imageAlt
        },
        "inLanguage": "en-US"
      },
      ...jsonLdItems
    ]
  };
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ken Brisenold" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Orlando" />
      <meta name="theme-color" content="#ca8a04" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KB Visualz" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={canonicalUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
