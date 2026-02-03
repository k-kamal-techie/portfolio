import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/config';

const SEO = ({
  title,
  description = siteConfig.description,
  keywords = '',
  author = siteConfig.name,
  image = '/og-image.jpg',
  url = window.location.href,
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.title}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
