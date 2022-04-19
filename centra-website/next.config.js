const path = require("path");
// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)', // all paths should be checked and redirected
        has: [
          {
            type: "header", // we want user-agent and user-agent is part of the header
            key: "user-agent",
            value: ".*(MSIE|Trident).*", // regex which checks if either MSIE or Trident is somewhere in user-agent string - we are excluding IE browser
          },
        ],
        permanent: true, // we want redirect to be permanent
        destination: "/not-supported.html", // this file is from public folder; it can be some other file on some other server
      },
      {
        source: "/geeks",
        destination: "/windows/performance/ ",
        permanent: true,
      },
      {
        source: "/resources-support/maintenance-videos/slider-window-screens",
        destination: "/academy/how-to-remove-screens-in-sliding-windows/ ",
        permanent: true,
      },
      {
        source: "/featured-projects",
        destination: "/professionals/ ",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/images",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/academy",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/academy",
        permanent: true,
      },
      {
        source: "/video/how-adjust-door-hinge",
        destination: "/academy/how-to-adjust-a-door-hinge",
        permanent: true,
      },
      {
        source: "/video/how-adjust-loose-door-handle",
        destination: "/academy/how-to-adjust-a-loose-door-handle",
        permanent: true,
      },
      {
        source: "/video/how-adjust-your-patio-door",
        destination: "/academy/how-to-adjust-a-patio-door",
        permanent: true,
      },
      {
        source: "/video/how-adjust-security-foot-lock-patio-door",
        destination:
          "/academy/how-to-adjust-the-security-foot-lock-on-a-patio-door",
        permanent: true,
      },
      {
        source: "/video/how-clean-and-lubricate-hardware",
        destination: "/academy/how-to-clean-and-lubricate-window-hardware",
        permanent: true,
      },
      {
        source: "/video/how-clean-doors",
        destination: "/academy/how-to-clean-doors",
        permanent: true,
      },

      {
        source: "/video/how-clean-glass-and-vinyl-surfaces",
        destination: "/academy/how-to-clean-glass-and-vinyl-windows",
        permanent: true,
      },
      {
        source: "/video/how-clean-tracks-and-frames",
        destination: "/academy/how-to-clean-window-tracks-and-frames",
        permanent: true,
      },
      {
        source: "/video/how-drill-secondary-hole-night-locks-slider-windows",
        destination:
          "/academy/how-to-drill-a-secondary-hole-for-night-locks-on-sliding-windows",
        permanent: true,
      },
      {
        source: "/video/how-inspect-weather-stripping-and-caulking",
        destination: "/academy/how-to-inspect-weatherstripping-and-caulking",
        permanent: true,
      },
      {
        source: "/video/how-install-or-replace-window-screen-tab",
        destination: "/academy/how-to-install-or-replace-a-window-screen-tab",
        permanent: true,
      },
      {
        source: "/video/condensation-windows",
        destination:
          "/academy/how-to-know-whether-it-is-a-leak-or-condensation",
        permanent: true,
      },
      {
        source: "/video/how-remove-and-clean-tracks-slider-windows",
        destination:
          "/academy/how-to-remove-and-clean-tracks-on-slider-windows",
        permanent: true,
      },
      {
        source: "/video/how-remove-and-clean-screens",
        destination:
          "/academy/how-to-remove-and-clean-window-and-door-screens",
        permanent: true,
      },
      {
        source: "/video/how-remove-or-install-patio-door-screen",
        destination: "/academy/how-to-remove-or-install-a-patio-door-screen",
        permanent: true,
      },

      {
        source: "/video/how-remove-screen-awning-or-push-out-style-window",
        destination:
          "/academy/how-to-remove-screens-in-awning-or-push-out-style-windows",
        permanent: true,
      },

      {
        source: "/video/how-remove-screen-casement-style-window",
        destination: "/academy/how-to-remove-screens-in-casement-windows",
        permanent: true,
      },

      {
        source:
          "/video/how-remove-or-install-your-window-screen-slider-window",
        destination: "/academy/how-to-remove-screens-in-sliding-windows",
        permanent: true,
      },
      {
        source: "/video/how-install-or-adjust-roto-or-crank-handle",
        destination:
          "/academy/installing-and-adjusting-window-roto-or-crank-handles",
        permanent: true,
      },
      {
        source: "/video/how-prepare-remeasure",
        destination: "/academy/prepare-for-a-remeasure-and-what-to-expect",
        permanent: true,
      },
      {
        source: "/brochures-20",
        destination: "/brochures",
        permanent: true,
      },

      {
        source: "/about-us/careers",
        destination: "/careers",
        permanent: true,
      },

      {
        source: "/community",
        destination: "/centra-cares",
        permanent: true,
      },
      {
        source: "/entry-doors",
        destination: "/doors/entry",
        permanent: true,
      },
      {
        source: "/cenergy-2700-swing-door",
        destination: "/doors/french/cenergy",
        permanent: true,
      },
      {
        source: "/entry-french-door",
        destination: "/doors/french/traditional",
        permanent: true,
      },
      {
        source: "/classic-slider-5200-5258-patio-door",
        destination: "/doors/sliding-patio/classic",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/family",
        permanent: true,
      },
      {
        source: "/why-centra",
        destination: "/family",
        permanent: true,
      },
      {
        source: "/centra-home-renovation-window-financing",
        destination: "/financing",
        permanent: true,
      },
      {
        source: "/get-a-quote",
        destination: "/get-quote",
        permanent: true,
      },
      {
        source: "/where-to-buy/request-a-showroom-tour",
        destination: "/get-quote",
        permanent: true,
      },
      {
        source: "/how-measure",
        destination: "/how-to-remeasure",
        permanent: true,
      },
      {
        source: "/Pitt%20Meadows%20Windows%20and%20Doors",
        destination: "/pitt-meadows",
        permanent: true,
      },
      {
        source: "/resources-support/pay-bills-online",
        destination: "/pay-bills-online",
        permanent: true,
      },
      {
        source: "/featuredprojects",
        destination: "/professionals",
        permanent: true,
      },
      {
        source: "/professionals/lunch-learn",
        destination: "/professionals/project-quote",
        permanent: true,
      },
      {
        source: "/restorations",
        destination: "/services/strata-installations",
        permanent: true,
      },
      {
        source: "/architects-and-engineers",
        destination: "/professionals/architects-engineers",
        permanent: true,
      },
      {
        source: "/builders-contractors",
        destination: "/professionals/builders-developers",
        permanent: true,
      },
      {
        source: "/builder-quote",
        destination: "/professionals/project-quote",
        permanent: true,
      },
      {
        source: "/strata-quote",
        destination: "/professionals/project-quote",
        permanent: true,
      },
      {
        source: "/home-owner-program/current-promotion",
        destination: "/promotions",
        permanent: true,
      },
      {
        source: "/covid-19-policy",
        destination: "/safety",
        permanent: true,
      },
      {
        source: "/resources-support/service-request",
        destination: "/service-request",
        permanent: true,
      },
      {
        source: "/strata",
        destination: "/services/strata-installations",
        permanent: true,
      },
      {
        source: "/traditional-2900-2958-casement-awning-windows",
        destination: "/windows/awning",
        permanent: true,
      },

      {
        source: "/bay-bow-windows",
        destination: "/windows/bay-bow",
        permanent: true,
      },
      {
        source: "/premium-2600-casement-awning-windows",
        destination: "/windows/casement",
        permanent: true,
      },
      {
        source: "/colourshield",
        destination: "/windows/colour",
        permanent: true,
      },
      {
        source: "/custom-options",
        destination: "/windows/glass",
        permanent: true,
      },
      {
        source: "/picture",
        destination: "/windows/picture",
        permanent: true,
      },
      {
        source: "/classic-6800-6858-sliding-windows",
        destination: "/windows/sliding",
        permanent: true,
      },
      {
        source: "/inspect",
        destination: "/academy/how-to-inspect-weatherstripping-and-caulking",
        permanent: true,
      },

      {
        source: "/hardware",
        destination: "/academy/how-to-clean-and-lubricate-window-hardware",
        permanent: true,
      },
      {
        source: "/screens",
        destination:
          "/academy/how-to-remove-and-clean-window-and-door-screens",
        permanent: true,
      },
      {
        source: "/tracksandframes",
        destination: "/academy/how-to-clean-window-tracks-and-frames",
        permanent: true,
      },
      {
        source: "/cleandoors",
        destination: "/academy/how-to-clean-doors",
        permanent: true,
      },
      {
        source: "/condensation",
        destination:
          "/academy/how-to-know-whether-it-is-a-leak-or-condensation",
        permanent: true,
      },
      {
        source: "/glassandvinyl",
        destination: "/academy/how-to-clean-glass-and-vinyl-windows",
        permanent: true,
      },
      {
        source: "/ServiceRequest",
        destination: "/service-request",
        permanent: true,
      },
      {
        source: "/associations",
        destination: "/professionals",
        permanent: true,
      },
    ];
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: { webpack5: true },
};
