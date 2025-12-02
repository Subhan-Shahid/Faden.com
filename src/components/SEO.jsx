import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website', structuredData }) => {
    const siteTitle = 'Faden - Premium Streetwear & Fashion';
    const defaultDescription = 'Faden is a premium streetwear and fashion brand in Pakistan. Shop hoodies, sweatshirts, oversized fits, and everyday essentials with nationwide delivery.';
    const defaultKeywords = 'faden, faden clothing, faden streetwear, faden pakistan, streetwear pakistan, hoodies online pakistan, sweatshirts, oversized hoodies, fashion essentials';
    const siteUrl = 'https://faden-com.vercel.app'; // Replace with actual domain
    const defaultImage = '/FADEN.jpg'; // Ensure this path is correct

    const metaTitle = title ? `${title} | Faden` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
