import { ProductCategory } from './types';

export const companyData = {
  name: 'Engendro Eletrônicos',
  legalName: 'Engendro Eletrônicos Ltda.',
  foundedYear: 2022,
  whatsapp: '+55 46 2604-1620',
  whatsappRaw: '554626041620',
  email: 'comercial@engendro.com.br',
  sloganPt: 'Conectando inteligência logística, engenharia e inovação.',
  sloganEn: 'Connecting logistics intelligence, engineering and innovation.',
  baseUrl: 'https://thinkddg.com/engendro/',
};

export const translations = {
  pt: {
    nav: {
      about: 'Quem Somos',
      pillars: 'Pilares',
      products: 'Produtos',
      contact: 'Contato',
      catalog: 'Catálogo em PDF',
      whatsapp: 'WhatsApp',
    },
    hero: {
      title: 'Soluções em Componentes de Clock e Frequência para a Indústria Nacional',
      subtitle: 'Especialistas na importação e revenda de componentes eletrônicos de alta performance. Ponte confiável entre o mercado global e o setor produtivo.',
      catalogBtn: 'Baixar Catálogo PDF',
      whatsappBtn: 'Fale no WhatsApp',
      exploreBtn: 'Conhecer Produtos',
    },
    about: {
      title: 'Especialistas na importação de componentes de alta performance',
      p1: 'A Engendro Eletrônicos atua como uma ponte estratégica entre os principais polos globais de tecnologia e a indústria nacional. Conectamos inovação internacional ao dia a dia do setor produtivo brasileiro.',
      p2: 'Especializados na importação e fornecimento sob demanda de componentes eletrônicos de alta performance, eliminamos gargalos de suprimento para que empresas de todos os portes tenham acesso imediato a materiais rigorosamente selecionados e com total competitividade.',
      p1Title: 'Excelência Técnica',
      p1Desc: 'Rigorosa seleção de componentes para assegurar o alto desempenho dos seus produtos e projetos.',
      p2Title: 'Competitividade',
      p2Desc: 'Busca constante pelas melhores oportunidades de importação para oferecer condições comerciais vantajosas.',
      p3Title: 'Agilidade & Confiabilidade',
      p3Desc: 'Mitigação de gargalos logísticos para que sua linha de produção nunca pare.',
    },
    products: {
      title: 'Matriz Técnica de Produtos',
      subtitle: 'Consulta Rápida e Especificações de Engenharia',
      intro: 'Compare especificações, faixas de frequência e encapsulamentos verificados. Solicite cotações diretas por componente para a sua linha de produção.',
      searchPlaceholder: 'Buscar por componente, frequência ou encapsulamento...',
      tableHeaders: {
        family: 'Componente / Família',
        package: 'Encapsulamento Típico',
        frequency: 'Faixa de Frequência',
        stability: 'Estabilidade / Tolerância',
        action: 'Ação'
      },
      requestQuote: 'Solicitar Cotação',
    },
    contact: {
      title: 'Fale Conosco',
      subtitle: 'Entre em contato com nossa equipe para cotações, suprimentos e suporte técnico especializado.',
      whatsappLabel: 'WhatsApp Direto',
      emailLabel: 'E-mail Comercial',
      addressLabel: 'Localização',
      addressValue: 'Paraná, Brasil',
      formTitle: 'Envie sua Mensagem',
      namePlaceholder: 'Seu Nome / Empresa',
      emailPlaceholder: 'Seu E-mail',
      messagePlaceholder: 'Descreva sua necessidade de componentes...',
      sendBtn: 'Enviar Mensagem',
      successMsg: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      tagline: 'Conectando inteligência logística, engenharia e inovação.',
    }
  },
  en: {
    nav: {
      about: 'About Us',
      pillars: 'Pillars',
      products: 'Products',
      contact: 'Contact',
      catalog: 'PDF Catalog',
      whatsapp: 'WhatsApp',
    },
    hero: {
      title: 'Clock and Frequency Component Solutions for National Industry',
      subtitle: 'Specialists in the import and resale of high-performance electronic components. A trusted bridge between the global market and the productive sector.',
      catalogBtn: 'Download PDF Catalog',
      whatsappBtn: 'Chat on WhatsApp',
      exploreBtn: 'Explore Products',
    },
    about: {
      title: 'Specialists in the import of high-performance components',
      p1: 'Engendro Eletrônicos acts as a strategic bridge between major global technology hubs and the national industry. We connect international innovation to the daily operations of Brazil\'s productive sector.',
      p2: 'Specializing in the import and on-demand supply of high-performance electronic components, we eliminate supply bottlenecks so companies of all sizes have immediate access to rigorously selected materials with full competitiveness.',
      p1Title: 'Technical Excellence',
      p1Desc: 'Rigorous component selection to ensure the high performance of your products and projects.',
      p2Title: 'Competitiveness',
      p2Desc: 'Constant search for the best import opportunities to offer advantageous commercial conditions.',
      p3Title: 'Agility & Reliability',
      p3Desc: 'Mitigation of logistical bottlenecks so your production line never stops.',
    },
    products: {
      title: 'Technical Product Matrix',
      subtitle: 'Quick Search & Engineering Specifications',
      intro: 'Compare verified specifications, frequency ranges, and packages. Request direct quotations per component for your production line.',
      searchPlaceholder: 'Search by component, frequency, or package...',
      tableHeaders: {
        family: 'Component / Family',
        package: 'Typical Package',
        frequency: 'Frequency Range',
        stability: 'Stability / Tolerance',
        action: 'Action'
      },
      requestQuote: 'Request Quote',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Contact our team for quotations, supplies, and specialized technical support.',
      whatsappLabel: 'Direct WhatsApp',
      emailLabel: 'Commercial Email',
      addressLabel: 'Location',
      addressValue: 'Paraná, Brazil',
      formTitle: 'Send a Message',
      namePlaceholder: 'Your Name / Company',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Describe your component requirements...',
      sendBtn: 'Send Message',
      successMsg: 'Message sent successfully! We will get in touch shortly.',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Connecting logistics intelligence, engineering and innovation.',
    }
  }
};

export const productCategories: ProductCategory[] = [
  {
    id: 'ressonadores',
    titlePt: '1. Ressonadores',
    titleEn: '1. Resonators',
    descriptionPt: 'Componentes passivos de controle de frequência para estabilização de circuitos osciladores.',
    descriptionEn: 'Passive frequency control components for stabilizing oscillator circuits.',
    items: [
      {
        id: 'ressonador-ceramico',
        namePt: 'Cerâmico',
        nameEn: 'Ceramic',
        category: 'Ressonadores',
        descriptionPt: 'Ressonadores piezoelétricos baseados em cerâmica para sistemas embarcados e microcontroladores de baixo custo.',
        descriptionEn: 'Piezoelectric ceramic-based resonators for embedded systems and low-cost microcontrollers.',
        frequencyRange: '190 kHz – 60.0 MHz',
        packageType: 'Through-Hole (2/3 pinos) / SMD',
        stability: '±0.3% a ±0.5%',
        image: '',
        video: ''
      },
      {
        id: 'ressonador-cristal',
        namePt: 'Cristal',
        nameEn: 'Crystal',
        category: 'Ressonadores',
        descriptionPt: 'Cristais de quartzo cut-AT projetados para alta precisão de frequência em relógios e sistemas de comunicação.',
        descriptionEn: 'AT-cut quartz crystals designed for high frequency precision in clocks and communication systems.',
        frequencyRange: '3.2 MHz – 100.0 MHz',
        packageType: 'HC-49U, HC-49S, SMD (3225, 5032)',
        stability: '±10 ppm a ±50 ppm',
        image: '',
        video: ''
      },
      {
        id: 'ressonador-saw',
        namePt: 'SAW',
        nameEn: 'SAW',
        category: 'Ressonadores',
        descriptionPt: 'Ressonadores de ondas acústicas de superfície (SAW) para estabilização de frequência em transmissores RF.',
        descriptionEn: 'Surface acoustic wave (SAW) resonators for frequency stabilization in RF transmitters.',
        frequencyRange: '30.0 MHz – 2.4 GHz',
        packageType: 'SMD Cerâmico (3.0x3.0 mm)',
        stability: 'Alta Q-factor / Baixo Ruído de Fase',
        image: '',
        video: ''
      }
    ]
  },
  {
    id: 'osciladores',
    titlePt: '2. Osciladores',
    titleEn: '2. Oscillators',
    descriptionPt: 'Geradores de clock ativos completos para sincronização e temporização industrial.',
    descriptionEn: 'Complete active clock generators for industrial synchronization and timing.',
    items: [
      {
        id: 'osc-spxo',
        namePt: 'SPXO',
        nameEn: 'SPXO',
        category: 'Osciladores',
        descriptionPt: 'Osciladores de cristal empacotados padrão (Simple Packaged Crystal Oscillator) com saída CMOS/TTL.',
        descriptionEn: 'Standard packaged crystal oscillators (SPXO) with CMOS/TTL logic output.',
        frequencyRange: '1.0 MHz – 125.0 MHz',
        packageType: 'SMD (7050, 5032, 3225 - 4 pinos)',
        stability: '±25 ppm a ±100 ppm',
        image: '',
        video: ''
      },
      {
        id: 'osc-mems',
        namePt: 'MEMS',
        nameEn: 'MEMS',
        category: 'Osciladores',
        descriptionPt: 'Osciladores baseados em ressonadores de silício MEMS, oferecendo imunidade superior a vibrações severas.',
        descriptionEn: 'Oscillators based on MEMS silicon resonators, offering superior immunity to severe vibrations.',
        frequencyRange: '1.0 MHz – 220.0 MHz',
        packageType: 'SMD Miniatura de Silício',
        stability: '±20 ppm a ±50 ppm',
        image: '',
        video: ''
      },
      {
        id: 'osc-ocxo',
        namePt: 'OCXO',
        nameEn: 'OCXO',
        category: 'Osciladores',
        descriptionPt: 'Osciladores controlados em forno térmico (Oven Controlled Crystal Oscillator) para precisão extrema.',
        descriptionEn: 'Oven controlled crystal oscillators (OCXO) for extreme timing precision.',
        frequencyRange: '5.0 MHz – 100.0 MHz',
        packageType: 'DIP Metálico (Câmara Térmica)',
        stability: '±0.1 ppb a ±5.0 ppb',
        image: '',
        video: ''
      },
      {
        id: 'osc-tcxo',
        namePt: 'TCXO',
        nameEn: 'TCXO',
        category: 'Osciladores',
        descriptionPt: 'Osciladores compensados por temperatura (Temperature Compensated) para mitigação de desvio térmico.',
        descriptionEn: 'Temperature compensated crystal oscillators (TCXO) for thermal drift mitigation.',
        frequencyRange: '9.6 MHz – 52.0 MHz',
        packageType: 'SMD (5032, 3225, 2520)',
        stability: '±0.5 ppm a ±2.5 ppm',
        image: '',
        video: ''
      },
      {
        id: 'osc-vcxo',
        namePt: 'VCXO',
        nameEn: 'VCXO',
        category: 'Osciladores',
        descriptionPt: 'Osciladores controlados por tensão (Voltage Controlled) para loops de travamento de fase e sintonia fina.',
        descriptionEn: 'Voltage controlled crystal oscillators (VCXO) for phase-locked loops and fine tuning.',
        frequencyRange: '1.0 MHz – 200.0 MHz',
        packageType: 'SMD (7050, 5032 - 6 pinos)',
        stability: 'Pulling Range ±50 ppm a ±150 ppm',
        image: '',
        video: ''
      },
      {
        id: 'osc-vctcxo',
        namePt: 'VC-TCXO',
        nameEn: 'VC-TCXO',
        category: 'Osciladores',
        descriptionPt: 'Osciladores híbridos com compensação térmica de alta precisão e controle externo de tensão (Pullable).',
        descriptionEn: 'Hybrid oscillators with high-precision thermal compensation and external voltage control.',
        frequencyRange: '10.0 MHz – 52.0 MHz',
        packageType: 'SMD Cerâmico Especial',
        stability: '±0.5 ppm + Pulling Range',
        image: '',
        video: ''
      }
    ]
  },
  {
    id: 'filtros',
    titlePt: '3. Filtros',
    titleEn: '3. Filters',
    descriptionPt: 'Filtros eletrônicos passivos para seleção seletiva de banda e atenuação de ruído em RF/IF.',
    descriptionEn: 'Passive electronic filters for selective band selection and noise attenuation in RF/IF.',
    items: [
      {
        id: 'filtro-ceramico',
        namePt: 'Cerâmico',
        nameEn: 'Ceramic',
        category: 'Filtros',
        descriptionPt: 'Filtros cerâmicos para frequência intermediária (FI) em receptores de rádio, TV e comunicação industrial.',
        descriptionEn: 'Ceramic filters for intermediate frequency (IF) in radio, TV, and industrial communication receivers.',
        frequencyRange: '450 kHz / 455 kHz / 10.7 MHz',
        packageType: 'Through-Hole / SMD Compacto',
        stability: 'Seletividade de FI Otimizada',
        image: '',
        video: ''
      },
      {
        id: 'filtro-cristal',
        namePt: 'Cristal',
        nameEn: 'Cristal',
        category: 'Filtros',
        descriptionPt: 'Filtros monolíticos de quartzo de alta seletividade para transceptores profissionais e militares.',
        descriptionEn: 'High-selectivity monolithic quartz filters for professional and military transceivers.',
        frequencyRange: '10.0 MHz – 90.0 MHz',
        packageType: 'HC-49/U, HC-49/S Dual Can',
        stability: 'Fator de Mérito (Q) Elevado',
        image: '',
        video: ''
      },
      {
        id: 'filtro-saw',
        namePt: 'SAW',
        nameEn: 'SAW',
        category: 'Filtros',
        descriptionPt: 'Filtros de ondas acústicas de superfície (SAW) para filtragem de RF em receptores GPS, Wi-Fi e celulares.',
        descriptionEn: 'Surface acoustic wave (SAW) filters for RF filtering in GPS, Wi-Fi, and cellular receivers.',
        frequencyRange: '70.0 MHz – 2.5 GHz',
        packageType: 'SMD Cerâmico Blindado',
        stability: 'Alta Rejeição Fora de Banda',
        image: '',
        video: ''
      }
    ]
  }
];
