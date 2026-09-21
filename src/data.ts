import { ProductCategory } from './types';

export const companyData = {
  name: 'Engendro Eletrônicos',
  legalName: 'Engendro Eletrônicos Ltda.',
  foundedYear: 2022,
  whatsapp: '+55 46 2604-1620',
  whatsappRaw: '554626041620',
  email: 'sandra@engendro.com.br',
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
      title: 'Nosso Portfólio de Produtos',
      subtitle: 'Componentes de Clock e Frequência com Vídeos Técnicos',
      intro: 'Fornecemos soluções completas em componentes de clock para atender à indústria eletrônica nacional, contando com uma ampla variedade de frequências, tolerâncias e formatos de encapsulamento (SMD e PTH). Asseguramos o fornecimento contínuo, estabilidade operacional e estrita conformidade técnica com os padrões globais de fabricação.',
      requestQuote: 'Solicitar Orçamento',
      watchVideo: 'Vídeo do Componente',
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
      title: 'Our Product Portfolio',
      subtitle: 'Clock & Frequency Components with Technical Videos',
      intro: 'We provide complete solutions in clock components to serve the national electronic industry, featuring a wide variety of frequencies, tolerances, and packaging formats (SMD and PTH). We ensure continuous supply, operational stability, and strict technical compliance with global manufacturing standards.',
      requestQuote: 'Request Quote',
      watchVideo: 'Component Video',
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
    id: 'cristais',
    titlePt: '1. Cristais e Ressonadores',
    titleEn: '1. Crystals and Resonators',
    descriptionPt: 'Componentes essenciais de controle de frequência para alta estabilidade e precisão em circuitos eletrônicos.',
    descriptionEn: 'Essential frequency control components for high stability and precision in electronic circuits.',
    items: [
      {
        id: 'cristal-quartzo',
        namePt: 'Cristal de Quartzo',
        nameEn: 'Quartz Crystal',
        category: 'Cristais e Ressonadores',
        descriptionPt: 'Elementos essenciais de controle de frequência, projetados para garantir máxima estabilidade e precisão em circuitos eletrônicos variados.',
        descriptionEn: 'Essential frequency control components, designed to ensure maximum stability and precision in various electronic circuits.',
        image: 'foto-cristal1.png',
        video: 'cristal1.mp4'
      },
      {
        id: 'cristal-relogio',
        namePt: 'Cristal de Relógio (RTC - 32.768 kHz)',
        nameEn: 'Watch Crystal (RTC - 32.768 kHz)',
        category: 'Cristais e Ressonadores',
        descriptionPt: 'Soluções otimizadas de baixíssimo consumo de energia, ideais para contagem de tempo real, microcontroladores e dispositivos IoT.',
        descriptionEn: 'Optimized ultra-low power consumption solutions, ideal for real-time clocking, microcontrollers, and IoT devices.',
        image: 'foto-cristal2.png',
        video: 'cristal2.mp4'
      },
      {
        id: 'ressonador-saw',
        namePt: 'Ressonador e Filtro SAW / Cerâmico',
        nameEn: 'SAW / Ceramic Resonator and Filter',
        category: 'Cristais e Ressonadores',
        descriptionPt: 'Componentes de alto desempenho voltados à seleção, filtragem e geração de sinais de frequência em sistemas de RF e telecomunicações.',
        descriptionEn: 'High-performance components dedicated to frequency signal selection, filtering, and generation in RF and telecommunication systems.',
        image: 'foto-saw.png',
        video: 'saw.mp4'
      }
    ]
  },
  {
    id: 'osciladores-conv',
    titlePt: '2. Osciladores de Cristal (OSC)',
    titleEn: '2. Crystal Oscillators (OSC)',
    descriptionPt: 'Fontes de clock completas que integram o cristal de quartzo ao circuito oscilador.',
    descriptionEn: 'Complete clock sources integrating the quartz crystal with the oscillator circuit.',
    items: [
      {
        id: 'osciladores-convencionais',
        namePt: 'Osciladores Convencionais (OSC)',
        nameEn: 'Conventional Oscillators (OSC)',
        category: 'Osciladores de Cristal (OSC)',
        descriptionPt: 'Fontes de clock completas que integram o cristal de quartzo ao circuito oscilador, simplificando o design de placa e otimizando espaço.',
        descriptionEn: 'Complete clock sources that integrate the quartz crystal into the oscillator circuit, simplifying board design and optimizing space.',
        image: 'foto-cristal3.png',
        video: 'cristal3.mp4'
      }
    ]
  },
  {
    id: 'osciladores-precisao',
    titlePt: '3. Osciladores de Alta Precisão e Compensados',
    titleEn: '3. High-Precision & Compensated Oscillators',
    descriptionPt: 'Soluções avançadas para ambientes críticos e sincronismo de infraestrutura.',
    descriptionEn: 'Advanced solutions for critical environments and infrastructure synchronization.',
    items: [
      {
        id: 'tcxo',
        namePt: 'TCXO (Temperature Compensated Crystal Oscillator)',
        nameEn: 'TCXO (Temperature Compensated Crystal Oscillator)',
        category: 'Alta Precisão',
        descriptionPt: 'Osciladores compensados por temperatura, desenvolvidos para mitigar variações térmicas e assegurar estabilidade operacional em ambientes críticos.',
        descriptionEn: 'Temperature-compensated oscillators developed to mitigate thermal variations and ensure operational stability in critical environments.',
        image: 'foto-cristal6.png',
        video: 'cristal6.mp4'
      },
      {
        id: 'vcxo',
        namePt: 'VCXO (Voltage-Controlled Crystal Oscillator)',
        nameEn: 'VCXO (Voltage-Controlled Crystal Oscillator)',
        category: 'Alta Precisão',
        descriptionPt: 'Osciladores controlados por tensão, que permitem o ajuste fino da frequência de saída em sistemas de sincronismo de rede.',
        descriptionEn: 'Voltage-controlled oscillators that allow fine-tuning of the output frequency in network synchronization systems.',
        image: 'foto-cristal4.png',
        video: 'cristal4.mp4'
      },
      {
        id: 'vc-tcxo',
        namePt: 'VC-TCXO (Voltage-Controlled Temperature-Compensated Crystal Oscillator)',
        nameEn: 'VC-TCXO (Voltage-Controlled Temperature-Compensated Crystal Oscillator)',
        category: 'Alta Precisão',
        descriptionPt: 'Soluções híbridas de alto desempenho que combinam o ajuste por tensão à compensação de temperatura.',
        descriptionEn: 'High-performance hybrid solutions combining voltage tuning with temperature compensation.',
        image: 'foto-cristal6.png',
        video: 'cristal6.mp4'
      },
      {
        id: 'ocxo',
        namePt: 'OCXO (Oven-Controlled Crystal Oscillator)',
        nameEn: 'OCXO (Oven-Controlled Crystal Oscillator)',
        category: 'Alta Precisão',
        descriptionPt: 'Osciladores de precisão superior mantidos em câmara térmica controlada, destinados a aplicações industriais e de infraestrutura que exigem extrema estabilidade de frequência.',
        descriptionEn: 'Superior precision oscillators maintained in a controlled thermal oven, intended for industrial and infrastructure applications requiring extreme frequency stability.',
        image: 'foto-cristal1.png',
        video: 'cristal1.mp4'
      }
    ]
  }
];
