import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export const SEO = ({
  title = "Muhammad Owais Shah - AI Engineer & Full-Stack Developer",
  description = "Portfolio of Muhammad Owais Shah - Expert in AI Agents, Workflow Automation, Next.js, and Full-Stack Development. Building intelligent systems with Python, OpenAI SDK, and modern web technologies.",
  keywords = "AI Engineer, Full-Stack Developer, Python, Next.js, React, TypeScript, AI Agents, OpenAI SDK, N8N Automation, Web Development, Panaversity, Muhammad Owais Shah",
  image = "https://yourportfolio.com/og-image.jpg",
  url = "https://yourportfolio.com",
  type = "website",
  author = "Muhammad Owais Shah"
}: SEOProps) => {
  const siteTitle = title.includes('Muhammad Owais Shah') ? title : `${title} | Muhammad Owais Shah`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Muhammad Owais Shah Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@muhammadowais" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#0F172A" />
      
      {/* Structured Data - Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Owais Shah",
          "url": url,
          "image": image,
          "jobTitle": "AI Engineer & Full-Stack Developer",
          "description": description,
          "knowsAbout": ["Artificial Intelligence", "Web Development", "Python", "React", "Next.js", "TypeScript", "AI Agents", "Automation"],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Panaversity"
          }
        })}
      </script>

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Muhammad Owais Shah Portfolio",
          "url": url,
          "description": description,
          "author": {
            "@type": "Person",
            "name": "Muhammad Owais Shah"
          }
        })}
      </script>
    </Helmet>
  );
};
