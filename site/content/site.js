// YOU LI CHINA WORLD BANGLADESH — site constants, navigation, contact
// Evidence discipline per strategy brief: claims carry status labels.
module.exports = {
  meta: {
    name: 'YOU LI CHINA WORLD BANGLADESH',
    short: 'YOU LI',
    chineseName: '尤利中制品有限公司',
    tagline: 'Supplying Quality — Building Trust — Delivering Value',
    domain: 'youlichina.com',
    url: 'https://www.youlichina.com',
    updated: '10 September 2026',
    description:
      'China-connected fabric sourcing for Bangladesh apparel. Woven, knit, denim and performance materials matched to your specification, checked at source and before shipment, coordinated to your factory.',
  },

  // Contact values are launch-draft placeholders pending final verification (see strategy brief, §10).
  contact: {
    email: 'sales@youlichina.com',
    emailAlt: 'info@youlichina.com',
    phoneBd: '+880 1711-000-000',
    phoneCn: '+86 21 0000-0000',
    offices: [
      {
        name: 'Bangladesh — Dhaka (Uttara)',
        role: 'Import, local distribution, factory coordination, quality verification',
        line1: 'Uttara, Dhaka 1230, Bangladesh',
        hours: 'Sunday–Thursday, 9:30–18:00 (GMT+6)',
        status: 'Company statement',
      },
      {
        name: 'China — Shanghai',
        role: 'Mill liaison, sampling, source inspection, export coordination',
        line1: 'Shanghai, People’s Republic of China',
        hours: 'Monday–Saturday, 9:00–18:00 (GMT+8)',
        status: 'Company statement',
      },
    ],
    note:
      'Street addresses, direct phone lines and named contacts are launch-draft values pending final verification and publication consent, per the company evidence register.',
  },

  // Evidence status vocabulary (strategy brief §10)
  evidence: {
    'Verified document': 'document',
    'Company statement': 'statement',
    'Reference range': 'reference',
    'Verification in progress': 'progress',
    'Buyer permission required': 'permission',
    'Not publicly verified': 'unverified',
  },

  nav: [
    {
      label: 'Products',
      href: '/products/',
      mega: true,
      groups: [
        {
          heading: 'Woven Fabrics',
          href: '/products/woven-fabrics/',
          items: [
            ['Poplin', '/products/woven-fabrics/poplin/'],
            ['Twill', '/products/woven-fabrics/twill/'],
            ['Canvas', '/products/woven-fabrics/canvas/'],
            ['Corduroy', '/products/woven-fabrics/corduroy/'],
            ['Satin', '/products/woven-fabrics/satin/'],
            ['Ripstop', '/products/woven-fabrics/ripstop/'],
            ['Dobby', '/products/woven-fabrics/dobby/'],
            ['Yarn-Dyed', '/products/woven-fabrics/yarn-dyed/'],
            ['Cotton · TC · CVC · Polyester', '/products/woven-fabrics/cotton-tc-cvc-polyester/'],
          ],
        },
        {
          heading: 'Knit Fabrics',
          href: '/products/knit-fabrics/',
          items: [
            ['Single Jersey', '/products/knit-fabrics/single-jersey/'],
            ['Rib', '/products/knit-fabrics/rib/'],
            ['Interlock', '/products/knit-fabrics/interlock/'],
            ['Velour', '/products/knit-fabrics/velour/'],
            ['Fleece', '/products/knit-fabrics/fleece/'],
            ['Sherpa', '/products/knit-fabrics/sherpa/'],
            ['Jacquard Knit', '/products/knit-fabrics/jacquard-knit/'],
          ],
        },
        {
          heading: 'Denim Fabrics',
          href: '/products/denim-fabrics/',
          items: [
            ['Regular Denim', '/products/denim-fabrics/regular/'],
            ['Slub Denim', '/products/denim-fabrics/slub/'],
            ['Cross-Hatch Denim', '/products/denim-fabrics/cross-hatch/'],
            ['Ring-Spun Denim', '/products/denim-fabrics/ring-spun/'],
            ['Coated Denim', '/products/denim-fabrics/coated/'],
          ],
        },
        {
          heading: 'Sportswear & Activewear',
          href: '/products/sportswear-activewear/',
          items: [
            ['Yoga Fabric', '/products/sportswear-activewear/yoga/'],
            ['Swimwear Fabric', '/products/sportswear-activewear/swimwear/'],
            ['Activewear Fabric', '/products/sportswear-activewear/activewear/'],
            ['Functional Stretch', '/products/sportswear-activewear/functional-stretch/'],
          ],
        },
        {
          heading: 'Functional & Technical',
          href: '/products/functional-technical/',
          items: [
            ['Antibacterial', '/products/functional-technical/antibacterial/'],
            ['Waterproof', '/products/functional-technical/waterproof/'],
            ['Fireproof / FR', '/products/functional-technical/fireproof/'],
            ['High-Strength', '/products/functional-technical/high-strength/'],
            ['Recycled', '/products/functional-technical/recycled/'],
          ],
        },
        {
          heading: 'Performance Yarns',
          href: '/products/performance-yarns/',
          items: [
            ['Coolmax® Type', '/products/performance-yarns/coolmax/'],
            ['Antibacterial Yarn', '/products/performance-yarns/antibacterial/'],
            ['Waterproof Yarn', '/products/performance-yarns/waterproof/'],
            ['Fireproof Yarn', '/products/performance-yarns/fireproof/'],
            ['High-Strength Yarn', '/products/performance-yarns/high-strength/'],
            ['Super-Soft Yarn', '/products/performance-yarns/super-soft/'],
          ],
        },
      ],
    },
    {
      label: 'Services',
      items: [
        ['Fabric Sourcing', '/services/fabric-sourcing/'],
        ['Yarn Sourcing', '/services/yarn-sourcing/'],
        ['Product Development', '/services/product-development/'],
        ['Import & Distribution', '/services/import-distribution/'],
        ['Sourcing Process', '/services/sourcing-process/'],
        ['Technical Support', '/services/technical-support/'],
      ],
    },
    {
      label: 'Company',
      items: [
        ['Company Overview', '/about/company-overview/'],
        ['Our Story', '/about/our-story/'],
        ['Why YOU LI', '/about/why-youli/'],
        ['Team', '/about/team/'],
        ['Bangladesh Office', '/about/offices/bangladesh/'],
        ['China Office', '/about/offices/china/'],
      ],
    },
    {
      label: 'Sourcing Network',
      items: [
        ['China', '/sourcing-network/china/'],
        ['Asia', '/sourcing-network/asia/'],
        ['Europe', '/sourcing-network/europe/'],
        ['Planned Regions', '/sourcing-network/planned-regions/'],
      ],
    },
    {
      label: 'Quality & Compliance',
      items: [
        ['Quality Assurance', '/quality-compliance/quality-assurance/'],
        ['Inline Inspection', '/quality-compliance/inline-inspection/'],
        ['Pre-Shipment Verification', '/quality-compliance/pre-shipment-verification/'],
        ['Certifications & Compliance', '/quality-compliance/certifications-compliance/'],
        ['Sustainability', '/quality-compliance/sustainability/'],
      ],
    },
    {
      label: 'Industries',
      items: [
        ['Apparel Brands', '/industries/apparel-brands/'],
        ['Garment Exporters', '/industries/garment-exporters/'],
        ['Buying Houses', '/industries/buying-houses/'],
        ['Product Development Teams', '/industries/product-development-teams/'],
      ],
    },
    {
      label: 'Resources',
      items: [
        ['Fabric Guides', '/resources/fabric-guides/'],
        ['Textile Insights', '/resources/textile-insights/'],
        ['Quality & Compliance Guides', '/resources/quality-compliance-guides/'],
        ['FAQ', '/resources/faq/'],
        ['Case Studies', '/resources/case-studies/'],
        ['Buyer Success Stories', '/resources/buyer-success-stories/'],
      ],
    },
    { label: 'Contact', href: '/contact/' },
  ],
};
