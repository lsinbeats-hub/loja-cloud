import { Product, HeroSlide, CategoryCardData, SneakerCategoryData } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'NOVO DROP',
    title: 'VIVA\nDIFERENTE.',
    description: 'Descubra a nova coleção CLOUD. Sneakers, streetwear e peças essenciais para quem cria o próprio caminho.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'COMPRAR AGORA',
    ctaSecondary: 'VER COLEÇÃO'
  },
  {
    id: 2,
    tag: 'EDIÇÃO LIMITADA',
    title: 'ESTILO É\nAQUI !',
    description: 'Design escultural, cortes assimétricos e amortecimento CloudAir de última geração.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'EXPLORAR DROP',
    ctaSecondary: 'VER CATÁLOGO'
  },
  {
    id: 3,
    tag: 'ESTÚDIO CLOUD',
    title: 'FORMA &\nFUNÇÃO.',
    description: 'A convergência definitiva entre alta performance atlética e estética minimalista contemporânea.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: 'GARANTIR O SEU',
    ctaSecondary: 'CONHECER A LINHA'
  }
];

export const CATEGORIES_DATA: CategoryCardData[] = [
  {
    id: 'mulher',
    title: 'MULHER',
    subtitle: 'Silhuetas contemporâneas e alfaiataria urbana',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    filterCategory: 'Mulher'
  },
  {
    id: 'homem',
    title: 'HOMEM',
    subtitle: 'Cortes estruturados, tecidos pesados e utilitarismo',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
    filterCategory: 'Homem'
  },
  {
    id: 'sneakers',
    title: 'SNEAKERS',
    subtitle: 'Engenharia de amortecimento e design icônico',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85',
    filterCategory: 'Sneakers'
  },
  {
    id: 'streetwear',
    title: 'STREETWEAR',
    subtitle: 'Hoodies oversized, cargo pants e outerwear exclusivo',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85',
    filterCategory: 'Streetwear'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'cloud-runner-01',
    name: 'CLOUD RUNNER 01',
    category: 'Sneakers',
    subcategory: 'Running & Performance',
    price: 499.90,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    badge: 'NOVO DROP',
    badgeType: 'green',
    description: 'O CLOUD RUNNER 01 redefine o amortecimento com sua entressola de densidade dupla e malha respirável termo-selada. Ideal para corridas de rua e presença de destaque.',
    specs: ['Entressola com tecnologia CloudAir', 'Drop de 8mm para transição natural', 'Cabedal em mesh respirável', 'Sola de borracha de alta abrasão']
  },
  {
    id: 'cloud-street-02',
    name: 'CLOUD STREET 02',
    category: 'Sneakers',
    subcategory: 'Streetwear & Lifestyle',
    price: 429.90,
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    badge: 'MAIS VENDIDO',
    badgeType: 'black',
    description: 'Estética clássica reinterpretada pela óptica brutalista da CLOUD. Detalhes em camurça premium e entressola vulcanizada reforçada.',
    specs: ['Camurça ecológica e lona premium', 'Palmilha ergonômica anatômica', 'Solado de aderência multidirecional']
  },
  {
    id: 'cloud-court-01',
    name: 'CLOUD COURT 01',
    category: 'Sneakers',
    subcategory: 'Heritage Court',
    price: 389.90,
    originalPrice: 459.90,
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    badge: '-15% OFF',
    badgeType: 'green',
    description: 'Inspirado nas quadras dos anos 80, o COURT 01 traz couro macio texturizado, microperfurações e acabamento monocromático impecável.',
    specs: ['Cabedal em couro premium granulado', 'Forro acolchoado no colarinho', 'Costura lateral 360° reforçada']
  },
  {
    id: 'cloud-urban-high',
    name: 'CLOUD URBAN HIGH',
    category: 'Sneakers',
    subcategory: 'High Top Statement',
    price: 549.90,
    images: [
      'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1514989940743-460b4742e252?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    badge: 'EDIÇÃO LIMITADA',
    badgeType: 'black',
    description: 'Cano alto com silhueta futurista e detalhes em tiras de neoprene elástico. A assinatura suprema da cultura urbana da CLOUD.',
    specs: ['Cano alto com suporte reforçado de tornozelo', 'Fechamento híbrido com lace locks', 'Refletivo 3M nos painéis laterais']
  },
  {
    id: 'cloud-heavy-hoodie',
    name: 'CLOUD HEAVY HOODIE 450GSM',
    category: 'Streetwear',
    subcategory: 'Outerwear',
    price: 369.90,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'ESSENCIAIS',
    badgeType: 'light',
    description: 'Moletom 100% algodão pesado pré-encolhido com corte boxy fit desestruturado, capuz duplo e punhos canelados largos.',
    specs: ['Gramatura 450 g/m²', '100% Algodão sustentável', 'Bordado tonal sutil no peito']
  },
  {
    id: 'cloud-cargo-pant',
    name: 'CLOUD TACTICAL CARGO',
    category: 'Streetwear',
    subcategory: 'Calças',
    price: 339.90,
    originalPrice: 399.90,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38', '40', '42', '44', '46'],
    badge: '-15% OFF',
    badgeType: 'green',
    description: 'Calça cargo com bolsos de foles 3D, tecido ripstop resistente a intempéries e cordões de ajuste na barra.',
    specs: ['Tecido Ripstop hidrorrepelente', '6 bolsos utilitários funcionais', 'Ajuste elástico nos tornozelos']
  },
  {
    id: 'cloud-tee-box',
    name: 'CLOUD LOGO TEE HEAVY',
    category: 'Streetwear',
    subcategory: 'Camisetas',
    price: 189.90,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    badge: 'DROP EXCLUSIVO',
    badgeType: 'black',
    description: 'Camiseta de modelagem oversized com gola canelada de 3cm e costuras reforçadas ombro a ombro.',
    specs: ['Algodão penteado 240g', 'Gola grossa de alta durabilidade', 'Estampa silk relevo discreta']
  },
  {
    id: 'cloud-retro-runner',
    name: 'CLOUD PACE PRO X',
    category: 'Sneakers',
    subcategory: 'Running',
    price: 529.90,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    badge: 'PERFORMANCE',
    badgeType: 'green',
    description: 'Projetado com placa de propulsão flexível e retorno de energia contínuo para quem não para.',
    specs: ['Placa de retorno elástico TPU', 'Palmilha antibacteriana respirável', 'Peso de apenas 245g']
  }
];

export const SNEAKER_CATEGORIES: SneakerCategoryData[] = [
  {
    id: 'running',
    name: 'RUNNING',
    description: 'Retorno de energia ininterrupto e propulsão aerodinâmica para atletas de alta quilometragem.',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=900&q=85',
    count: '18 Modelos'
  },
  {
    id: 'lifestyle',
    name: 'LIFESTYLE',
    description: 'Elegância minimalista e conforto para uso diário sem concessões na postura visual.',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=85',
    count: '24 Modelos'
  },
  {
    id: 'street',
    name: 'STREET',
    description: 'Silhuetas marcantes, solados robustos e atitude crua para desbravar o asfalto.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85',
    count: '16 Modelos'
  }
];

export const STORE_LOCATIONS = [
  {
    name: 'CLOUD Flagship Store — Jardins',
    address: 'Rua Oscar Freire, 920 — São Paulo, SP',
    hours: 'Seg - Sáb: 10h às 20h | Dom: 12h às 18h',
    phone: '(11) 3088-4400'
  },
  {
    name: 'CLOUD Lab — Leblon',
    address: 'Av. Ataulfo de Paiva, 410 — Rio de Janeiro, RJ',
    hours: 'Seg - Sáb: 10h às 21h | Dom: 14h às 20h',
    phone: '(21) 2512-8820'
  },
  {
    name: 'CLOUD Concept — Savassi',
    address: 'Rua Pernambuco, 1140 — Belo Horizonte, MG',
    hours: 'Seg - Sáb: 10h às 20h',
    phone: '(31) 3281-9000'
  }
];
