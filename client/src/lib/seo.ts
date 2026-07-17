import type { Thing, Graph } from "schema-dts";

const SITE_URL = "https://wbrisenold.github.io/KBVisual";
const BUSINESS_ID = `${SITE_URL}/#business`;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export function getBusinessSchema(): Thing {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: "KB Visualz",
    alternateName: "Ken Brisenold Photography",
    description:
      "Orlando portrait photography for graduation, prom, family, branding, fashion, studio, couples, engagement, and creative sessions.",
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    email: "wilkensbrisenold@gmail.com",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/about/#ken-brisenold`,
      name: "Ken Brisenold",
      jobTitle: "Portrait Photographer",
      description: "Military veteran and UCF graduate creating portrait photography in Orlando and Central Florida.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Orlando" },
      { "@type": "AdministrativeArea", name: "Central Florida" },
      { "@type": "City", name: "Winter Park" },
      { "@type": "City", name: "Kissimmee" },
      { "@type": "City", name: "Sanford" },
      { "@type": "City", name: "Lake Mary" },
      { "@type": "City", name: "Altamonte Springs" },
    ],
    hasMap: "https://maps.app.goo.gl/BEkRxpxfFDjurBfG7",
    priceRange: "$250-$400+",
    paymentAccepted: "Cash, credit card, bank transfer",
    openingHours: "Mo-Su 09:00-20:00",
    sameAs: ["https://www.instagram.com/kbvisualz_/"],
    knowsAbout: [
      "Portrait photography",
      "Graduation portraits",
      "Prom portraits",
      "Family portraits",
      "Branding portraits",
      "Fashion portraits",
      "Studio portraits",
      "Creative portraits",
      "Engagement portraits",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Signature Portrait Session",
        price: "250",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "One-hour Orlando portrait photography session",
          serviceType: "Portrait photography",
        },
      },
      {
        "@type": "Offer",
        name: "Legacy Portrait Session",
        price: "400",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Two-hour Orlando portrait photography session",
          serviceType: "Portrait photography",
        },
      },
    ],
  };
}

export function getWebsiteSchema(): Thing {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "KB Visualz",
    url: SITE_URL,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function getWebPageSchema(
  canonicalUrl: string,
  title: string,
  description: string,
  image: string,
  imageAlt: string
): Thing {
  return {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: image,
      caption: imageAlt,
    },
    inLanguage: "en-US",
  };
}

export function getOfferCatalogSchema(offers: Thing[]): Thing {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/pricing/#portrait-packages`,
    name: "KB Visualz Orlando Portrait Photography Packages",
    url: `${SITE_URL}/pricing/`,
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: offer,
    })),
  };
}

export function getCollectionPageSchema(
  canonicalUrl: string,
  title: string,
  description: string,
  images: { name: string; caption: string }[]
): Thing {
  return {
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#portfolio`,
    name: title,
    url: canonicalUrl,
    description,
    about: { "@id": BUSINESS_ID },
    hasPart: images.map((img) => ({
      "@type": "ImageObject",
      name: img.name,
      caption: img.caption,
    })),
    inLanguage: "en-US",
  };
}

export function getPersonSchema(): Thing {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about/#ken-brisenold`,
    name: "Ken Brisenold",
    jobTitle: "Orlando Portrait Photographer",
    worksFor: { "@id": BUSINESS_ID },
    url: `${SITE_URL}/about/`,
    description: "Military veteran and UCF graduate creating portrait photography in Orlando and Central Florida.",
  };
}