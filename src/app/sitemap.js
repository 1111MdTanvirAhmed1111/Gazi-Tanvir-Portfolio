export default function sitemap() {
    return [
      {
        url: 'https://tanvir.pothoczuto.xyz',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://tanvir.pothoczuto.xyz/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://tanvir.pothoczuto.xyz/blogs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }