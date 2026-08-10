export type TProject = {
  id: string;
  title: string;
  summary: string;
  role: string;
  challenge: string;
  contribution: string;
  value: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  technologies: string[];
  featured: boolean;
};

const productStack = [
  'Next.js',
  'TypeScript',
  'Apollo GraphQL',
  'GraphQL',
  'Styled Components',
  'Bit.dev',
  'Jest',
];

export const projects: TProject[] = [
  {
    id: 'hotelplan',
    title: 'Hotelplan',
    summary:
      "A consumer travel platform for one of Switzerland's established tour operators, covering package holidays, flights, accommodation, transfers, and supporting services.",
    role: 'Frontend engineer',
    challenge:
      'Present comparison-heavy search and package-booking journeys without losing clarity across destinations, dates, transport, accommodation, and optional extras.',
    contribution:
      'Frontend implementation across product interfaces using Next.js, TypeScript, GraphQL, and shared UI tooling for a complex travel domain.',
    value:
      'A representative example of product UI work where responsive behavior, content hierarchy, and decision confidence all matter.',
    image: '/images/projects/hotelplan.webp',
    imageWidth: 1600,
    imageHeight: 862,
    href: 'https://www.hotelplan.ch',
    technologies: productStack,
    featured: true,
  },
  {
    id: 'migros-ferien',
    title: 'Migros-Ferien',
    summary:
      'A Swiss travel portal for discovering and booking package holidays, flights, hotels, and related travel services.',
    role: 'Frontend engineer',
    challenge:
      'Keep a broad holiday inventory approachable while supporting search, comparison, and booking-oriented product journeys.',
    contribution:
      'Built frontend product interfaces within the shared Next.js, TypeScript, GraphQL, and component-tooling ecosystem.',
    value:
      'Shows experience working on consumer journeys where trust and clear choices are central to the interface.',
    image: '/images/projects/migros-ferien.webp',
    imageWidth: 1600,
    imageHeight: 863,
    href: 'https://migros-ferien.ch/',
    technologies: productStack,
    featured: false,
  },
  {
    id: 'travelhouse',
    title: 'Travelhouse',
    summary:
      'An online travel platform spanning package holidays, flights, hotels, rental cars, and destinations worldwide.',
    role: 'Frontend engineer',
    challenge:
      'Organize a wide product range and destination content into discovery paths that remain readable and useful.',
    contribution:
      'Delivered frontend interfaces using the shared React stack and GraphQL-based product architecture.',
    value:
      'Demonstrates frontend work across content-rich discovery and transactional travel experiences.',
    image: '/images/projects/travelhouse.webp',
    imageWidth: 1600,
    imageHeight: 860,
    href: 'https://travelhouse.ch/',
    technologies: productStack,
    featured: false,
  },
  {
    id: 'bta-first',
    title: 'Bta first',
    summary:
      'A digital presence for a Swiss business-travel management specialist serving national and international companies.',
    role: 'Frontend engineer',
    challenge:
      'Communicate a service-led B2B offering clearly to organizations with different travel-management needs.',
    contribution:
      'Implemented responsive frontend experiences within the same typed, component-oriented delivery stack.',
    value:
      'Broadens the portfolio from leisure booking flows into business-facing travel communication.',
    image: '/images/projects/btafirst.webp',
    imageWidth: 1600,
    imageHeight: 862,
    href: 'https://btafirst.ch/',
    technologies: productStack,
    featured: false,
  },
  {
    id: 'hotelplan-group',
    title: 'Hotelplan Group',
    summary:
      'The corporate website for a Swiss travel group with leisure, business-travel, and vacation-rental brands.',
    role: 'Frontend engineer',
    challenge:
      'Present group-level information and a broad portfolio of travel businesses through a coherent corporate experience.',
    contribution:
      'Built frontend presentation and content interfaces with the shared Next.js and TypeScript foundation.',
    value:
      'Shows the same frontend system supporting brand and corporate communication as well as product journeys.',
    image: '/images/projects/corp.webp',
    imageWidth: 1600,
    imageHeight: 863,
    href: 'https://hotelplan.com/',
    technologies: productStack,
    featured: false,
  },
  {
    id: 'vtours-booking',
    title: 'Vtours booking portal',
    summary:
      'A portal for dynamically assembled travel packages that combine flights, hotels, and transfers around customer requests.',
    role: 'Frontend engineer',
    challenge:
      'Keep a multi-part, transaction-focused booking journey understandable while package details are assembled around user choices.',
    contribution:
      'Implemented booking-oriented frontend interfaces with Next.js, TypeScript, GraphQL, and shared component tooling.',
    value:
      'Represents hands-on work with dense transactional flows where state, clarity, and confidence are closely connected.',
    image: '/images/projects/vtours.webp',
    imageWidth: 1600,
    imageHeight: 818,
    href: 'https://buchung.vtours.com/',
    technologies: productStack,
    featured: false,
  },
];

export const featuredProject = projects[0];
