module.exports = {
  siteUrl: "https://dreamedconsultancy.com", // Replace with your site URL
  generateRobotsTxt: true, // Enable generating robots.txt
  exclude: ["/404", "admin", "dashboard"], // Exclude any pages you don't want in the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://dreamedconsultancy.com/sitemap.xml", // Add your sitemap URL here
    ],
  },
};
