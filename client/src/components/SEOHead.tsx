import { Helmet } from "react-helmet-async";
import type { Graph, Thing } from "schema-dts";
import { getBusinessSchema, getWebsiteSchema, getWebPageSchema } from "@/lib/seo";

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

const DEFAULT_TITLE = "Orlando Portrait Photographer | KB Visualz";
const DEFAULT_DESCRIPTION =
  "KB Visualz is an Orlando portrait photographer serving Central Florida with graduation, prom, family, branding, fashion, studio, and creative portrait sessions.";
const DEFAULT_KEYWORDS =
  "Orlando portrait photographer, portrait photography Orlando FL, Central Florida photographer, graduation portraits Orlando, prom portraits Orlando, family portraits Orlando, branding portraits Orlando, studio portraits Orlando, Ken Brisenold, KB Visualz";
const DEFAULT_IMAGE = "https://wbrisenold.github.io/KBVisual/og-image.jpg";
const DEFAULT_IMAGE_ALT = "Portrait photography by KB Visualz in Orlando, Florida";

const SEOHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  canonicalPath = "/",
  url,
  type = "website",
  structuredData = [],
}: SEOHeadProps) => {
  const fullTitle = title.includes("KB Visualz") ? title : `${title} | KB Visualz`;
  const canonicalUrl = url || `https://wbrisenold.github.io/KBVisual${canonicalPath}`;
  const jsonLdItems = Array.isArray(structuredData) ? structuredData : [structuredData];

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessSchema(),
      getWebsiteSchema(),
      getWebPageSchema(canonicalUrl, fullTitle, description, image, imageAlt),
      ...jsonLdItems,
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ken Brisenold" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Orlando" />
      <meta name="theme-color" content="#a16207" />

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

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <link rel="canonical" href={canonicalUrl} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;