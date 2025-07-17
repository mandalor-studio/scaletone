import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scaletone.com';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/generator`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add more pages as needed
    // Example: If you have theme-specific pages
    // {
    //   url: `${baseUrl}/themes/blue`,
    //   lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];
}