export default function robots() {
  return {
    rules: [
      {
        userAgent: '',
        allow: ['/'],
        disallow: [],
      },
    ],
    sitemap: 'https://www.symbionet.tech/sitemap.xml',
  }
}
