import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.sociomaverick.com'
const SITE_NAME = 'SocioMaverick'

const DEFAULT_SEO = {
  title: 'SocioMaverick: Youth Marketing & Advertising Agency | SEO, Web, Social',
  description:
    'Youth marketing, SEO, website design, social media and events management. Socio Maverick helps brands connect with Gen Z and grow.'
}

const ROUTE_SEO = {
  '/': {
    title: 'SocioMaverick: Youth Marketing & Advertising Agency | SEO, Web, Social',
    description:
      'Youth marketing, SEO, website design, social media and events management. Socio Maverick helps brands connect with Gen Z and grow.'
  },
  '/about': {
    title: 'About SocioMaverick | Youth-Focused Digital Marketing Team',
    description:
      'Meet SocioMaverick, a youth-focused marketing agency helping brands grow through strategy, content, paid media, and performance marketing.'
  },
  '/why-us': {
    title: 'Why Choose SocioMaverick | Growth-Driven Marketing Agency',
    description:
      'Discover why brands choose SocioMaverick for measurable growth, creative strategy, and high-impact digital marketing execution.'
  },
  '/work': {
    title: 'Our Work | Campaigns and Creative Growth Projects',
    description:
      'Explore SocioMaverick case work across youth marketing, social media, performance campaigns, and brand growth execution.'
  },
  '/services': {
    title: 'Digital Marketing Services | SEO, Social, Paid Ads, Web',
    description:
      'Browse SocioMaverick services: SEO, social media marketing, paid advertising, web design, content, and event-led brand growth.'
  },
  '/services/seo': {
    title: 'SEO Services | Search Growth for Modern Brands',
    description:
      'Get technical SEO, content SEO, and on-page optimization services to improve ranking visibility and generate high-intent organic traffic.'
  },
  '/services/creative-content-ai-marketing': {
    title: 'Creative Content and AI Marketing Services',
    description:
      'Scale your brand storytelling with creative content strategy, AI-powered marketing support, and channel-ready campaign content.'
  },
  '/services/paid-advertising': {
    title: 'Paid Advertising Services | Performance Marketing',
    description:
      'Launch ROI-focused paid ad campaigns across major platforms with full-funnel strategy, optimization, and growth-focused reporting.'
  },
  '/services/social-media-marketing': {
    title: 'Social Media Marketing Services | Community and Growth',
    description:
      'Build brand awareness and audience engagement with strategic social media marketing, creator-style content, and campaign execution.'
  },
  '/services/website-design-development': {
    title: 'Website Design and Development Services',
    description:
      'Design and develop fast, conversion-ready websites that reflect your brand, improve user experience, and support business growth.'
  },
  '/services/event-management': {
    title: 'Event Management Marketing Services',
    description:
      'Plan and execute high-impact event marketing experiences that connect audiences with your brand and drive lasting engagement.'
  },
  '/services/production-photography': {
    title: 'Production and Photography Services for Brands',
    description:
      'Create premium visual assets through brand-led production and photography services designed for digital campaigns and social media.'
  },
  '/services/digital-pr-orm': {
    title: 'Digital PR and ORM Services | Online Brand Trust',
    description:
      'Strengthen reputation and credibility with digital PR, online reputation management, and strategic communication support.'
  },
  '/clients': {
    title: 'Our Clients | Brands We Work With',
    description:
      'See the brands and businesses that trust SocioMaverick for digital marketing, creative campaigns, and measurable business growth.'
  },
  '/testimonials': {
    title: 'Client Testimonials | SocioMaverick Reviews',
    description:
      'Read testimonials from clients who partnered with SocioMaverick for SEO, social media, paid ads, and growth marketing services.'
  },
  '/faq': {
    title: 'Marketing FAQ | Answers from SocioMaverick',
    description:
      'Find answers to common questions about digital marketing services, timelines, pricing, and campaign strategy from SocioMaverick.'
  },
  '/contact': {
    title: 'Contact SocioMaverick | Start Your Growth Journey',
    description:
      'Contact SocioMaverick to discuss your marketing goals, request a consultation, and build a growth strategy for your brand.'
  }
}

const BREADCRUMB_LABELS = {
  about: 'About',
  'why-us': 'Why Us',
  work: 'Work',
  services: 'Services',
  seo: 'SEO Service',
  'creative-content-ai-marketing': 'Creative Content and AI Marketing',
  'paid-advertising': 'Paid Advertising',
  'social-media-marketing': 'Social Media Marketing',
  'website-design-development': 'Website Design and Development',
  'event-management': 'Event Management',
  'production-photography': 'Production and Photography',
  'digital-pr-orm': 'Digital PR and ORM',
  clients: 'Clients',
  testimonials: 'Testimonials',
  faq: 'FAQ',
  contact: 'Contact'
}

const setMetaTag = (selector, attributes, content) => {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value)
    })
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

const setCanonical = (href) => {
  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', href)
}

const getBreadcrumbs = (path) => {
  const segments = path.split('/').filter(Boolean)

  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`
    }
  ]

  if (segments.length === 0) {
    return breadcrumbs
  }

  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    breadcrumbs.push({
      '@type': 'ListItem',
      position: index + 2,
      name: BREADCRUMB_LABELS[segment] || segment,
      item: `${SITE_URL}${currentPath}`
    })
  })

  return breadcrumbs
}

export default function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname || '/'
    const seo = ROUTE_SEO[pathname] || DEFAULT_SEO
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

    document.title = seo.title

    setCanonical(canonicalUrl)
    setMetaTag('meta[name="description"]', { name: 'description' }, seo.description)
    setMetaTag('meta[property="og:title"]', { property: 'og:title' }, seo.title)
    setMetaTag('meta[property="og:description"]', { property: 'og:description' }, seo.description)
    setMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl)
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title)
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description)

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: seo.title,
          description: seo.description,
          url: canonicalUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: `${SITE_URL}/`
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: getBreadcrumbs(pathname)
        }
      ]
    }

    let schemaTag = document.head.querySelector('script[data-schema="route-breadcrumb"]')
    if (!schemaTag) {
      schemaTag = document.createElement('script')
      schemaTag.setAttribute('type', 'application/ld+json')
      schemaTag.setAttribute('data-schema', 'route-breadcrumb')
      document.head.appendChild(schemaTag)
    }

    schemaTag.textContent = JSON.stringify(breadcrumbSchema)
  }, [location.pathname])

  return null
}