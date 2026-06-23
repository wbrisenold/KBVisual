import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "KB Visualz - Portrait Photography | Orlando, FL",
  description = "KB Visualz offers individual portrait sessions in Orlando, Florida, including graduation, prom, fashion, family, branding, and creative portraits by Ken Brisenold.",
  keywords = "portrait photographer Orlando, Orlando portrait photography, graduation portraits Orlando, prom portraits, family portraits Orlando, branding portraits, Ken Brisenold, KB Visualz",
  image = "/og-image.jpg",
  url = "https://kbvisualz.com",
  type = "website"
}: SEOHeadProps) => {
  const fullTitle = title.includes("KB Visualz") ? title : `${title} | KB Visualz`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ken Brisenold" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="KB Visualz" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#ca8a04" />
      
      {/* Structured Data for Photography Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://kbvisualz.com",
          "name": "KB Visualz",
          "alternateName": "Ken Brisenold Photography",
          "description": description,
          "url": "https://kbvisualz.com",
          "telephone": "+1-XXX-XXX-XXXX",
          "email": "wilkensbrisenold@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orlando",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.5383",
            "longitude": "-81.3792"
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "Florida"
            },
            {
              "@type": "City", 
              "name": "Orlando"
            }
          ],
          "serviceType": [
            "Portrait Photography", 
            "Graduation Portraits",
            "Family Portraits",
            "Personal Branding Portraits",
            "Creative Portraits"
          ],
          "founder": {
            "@type": "Person",
            "name": "Ken Brisenold",
            "jobTitle": "Professional Photographer",
            "description": "Military veteran and UCF graduate specializing in portrait photography"
          },
          "sameAs": [
            "https://instagram.com/@KbVisualz_",
            "https://youtube.com/playlist?list=PLkRi4nlxZj3w0_rFLxIdUr8ysi5pprjfW"
          ],
          "priceRange": "$$$$",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "openingHours": "Mo-Su 09:00-20:00"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
