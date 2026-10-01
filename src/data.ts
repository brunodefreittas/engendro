import { ProductCategory, BlogPost } from './types';

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
      blog: 'Blog',
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
    blog: {
      title: 'Blog & Artigos Técnicos',
      subtitle: 'Insights de engenharia, seleção de clocks, cristais e inteligência logística para a indústria eletrônica.',
      readMore: 'Ler Artigo Completo',
      back: '← Voltar para a Lista de Artigos',
      publishedBy: 'Por',
      minRead: 'de leitura',
    },
    contact: {
      title: 'Fale Conosco',
      subtitle: 'Entre em contato com nossa equipe para cotações, suprimentos e suporte técnico especializado.',
      whatsappLabel: 'WhatsApp Direto',
      emailLabel: 'E-mail Comercial',
      addressLabel: 'Localização',
      addressValue: 'Pato Branco, Paraná',
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
      blog: 'Blog',
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
    blog: {
      title: 'Blog & Technical Articles',
      subtitle: 'Engineering insights, clock selection, crystals, and supply chain logistics intelligence for the electronics industry.',
      readMore: 'Read Full Article',
      back: '← Back to Articles',
      publishedBy: 'By',
      minRead: 'read',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Contact our team for quotations, supplies, and specialized technical support.',
      whatsappLabel: 'Direct WhatsApp',
      emailLabel: 'Commercial Email',
      addressLabel: 'Location',
      addressValue: 'Pato Branco, Paraná',
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

export const blogPosts: BlogPost[] = [
  {
    id: 'importancia-dos-cristais-de-quartzo',
    titlePt: 'A Importância Crítica dos Cristais de Quartzo em Sistemas Embarcados',
    titleEn: 'The Critical Importance of Quartz Crystals in Embedded Systems',
    excerptPt: 'Entenda como o efeito piezoelétrico do quartzo garante a precisão de clock exigida por microcontroladores modernos e redes IoT.',
    excerptEn: 'Understand how the piezoelectric effect of quartz ensures the clock precision demanded by modern microcontrollers and IoT networks.',
    contentPt: `
      <p>Em qualquer sistema eletrônico digital moderno, a temporização (timing) é o equivalente ao sistema circulatório humano. Sem um sinal de clock perfeitamente estável e sincronizado, microcontroladores, processadores de sinal digital (DSP) e transceptores de radiofrequência falham em manter a integridade dos dados.</p>
      
      <h3>O Papel do Efeito Piezoelétrico</h3>
      <p>Os cristais de quartzo aproveitam o efeito piezoelétrico direto e inverso. Quando uma tensão elétrica é aplicada ao corte AT do cristal de quartzo, ele oscila mecanicamente em uma frequência fundamental extremamente precisa e estável frente a variações térmicas e de envelhecimento.</p>

      <h3>Critérios de Seleção para Engenheiros de Projeto</h3>
      <ul>
        <li><strong>Frequência Fundamental vs. Overtone:</strong> Escolher o corte correto evita problemas de espúrios e oscilações indesejadas.</li>
        <li><strong>Capacitância de Carga (CL):</strong> Combinar o cristal com os capacitores externos corretos garante que a frequência nominal seja atingida sem desvios em ppm.</li>
        <li><strong>ESR (Resistência Série Equivalente):</strong> Cristais com menor ESR facilitam o arranque do oscilador interno do MCU, economizando energia em aplicações alimentadas por bateria.</li>
      </ul>

      <p>A Engendro Eletrônicos mantém um portfólio completo de cristais de quartzo e ressonadores certificados, garantindo suprimento contínuo e rigor técnico para a indústria nacional.</p>
    `,
    contentEn: `
      <p>In any modern digital electronic system, timing is the equivalent of the human circulatory system. Without a perfectly stable and synchronized clock signal, microcontrollers, digital signal processors (DSP), and radio frequency transceivers fail to maintain data integrity.</p>
      
      <h3>The Role of the Piezoelectric Effect</h3>
      <p>Quartz crystals take advantage of direct and inverse piezoelectric effects. When an electrical voltage is applied to the AT-cut quartz crystal, it oscillates mechanically at an extremely precise fundamental frequency stable against thermal variations and aging.</p>

      <h3>Selection Criteria for Design Engineers</h3>
      <ul>
        <li><strong>Fundamental Frequency vs. Overtone:</strong> Choosing the correct cut avoids spurious issues and unwanted oscillations.</li>
        <li><strong>Load Capacitance (CL):</strong> Matching the crystal with correct external capacitors ensures the nominal frequency is reached without ppm drift.</li>
        <li><strong>ESR (Equivalent Series Resistance):</strong> Crystals with lower ESR facilitate MCU internal oscillator startup, saving energy in battery-powered applications.</li>
      </ul>

      <p>Engendro Eletrônicos maintains a complete portfolio of certified quartz crystals and resonators, ensuring continuous supply and technical rigor for the national industry.</p>
    `,
    date: '15 de Março, 2026',
    readTime: '4 min',
    category: 'Engenharia de Clocks',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    author: 'Engenharia Engendro'
  },
  {
    id: 'mitigando-gargalos-de-importacao',
    titlePt: 'Como Mitigar Gargalos na Importação de Semicondutores no Brasil',
    titleEn: 'How to Mitigate Bottlenecks in Semiconductor Importation in Brazil',
    excerptPt: 'Estratégias logísticas e homologações para assegurar que sua linha de produção nunca paralise por falta de componentes críticos.',
    excerptEn: 'Logistics strategies and approvals to ensure your production line never halts due to lack of critical components.',
    contentPt: `
      <p>O mercado global de semicondutores e componentes passivos é altamente dinâmico e sujeito a flutuações de lead time. Para indústrias brasileiras, a dependência de cadeias de suprimento externas exige planejamento estratégico rigoroso e parcerias locais sólidas.</p>

      <h3>1. Previsão de Demanda e Estoque de Segurança</h3>
      <p>Trabalhar com fornecedores que mantêm estoque dedicado ou programações de entrega (forecast trimming) reduz drasticamente o risco de parada de planta.</p>

      <h3>2. Rastreabilidade e Conformidade Normativa</h3>
      <p>Componentes falsificados ou fora de especificação representam um risco catastrófico para equipamentos industriais e médicos. A importação direta por canais autorizados assegura certificados de lote (CoC) e conformidade RoHS completa.</p>

      <h3>3. A Ponte Estratégica Regional</h3>
      <p>Com sede no Paraná e atuação em todo o território nacional, a Engendro Eletrônicos atua eliminando a burocracia aduaneira e garantindo entrega ágil direto no almoxarifado do cliente.</p>
    `,
    contentEn: `
      <p>The global semiconductor and passive components market is highly dynamic and subject to lead time fluctuations. For Brazilian industries, dependence on external supply chains requires rigorous strategic planning and solid local partnerships.</p>

      <h3>1. Demand Forecasting and Safety Stock</h3>
      <p>Working with suppliers who maintain dedicated stock or delivery schedules drastically reduces plant shutdown risk.</p>

      <h3>2. Traceability and Regulatory Compliance</h3>
      <p>Counterfeit or out-of-spec components pose a catastrophic risk to industrial and medical equipment. Direct importation through authorized channels ensures lot certificates (CoC) and full RoHS compliance.</p>

      <h3>3. The Regional Strategic Bridge</h3>
      <p>Headquartered in Paraná and operating nationwide, Engendro Eletrônicos eliminates customs bureaucracy and ensures agile delivery straight to the client's warehouse.</p>
    `,
    date: '28 de Fevereiro, 2026',
    readTime: '5 min',
    category: 'Logística & Suprimentos',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    author: 'Logística & Supply'
  },
  {
    id: 'osciladores-mems-vs-cristal',
    titlePt: 'Osciladores MEMS vs. Cristais Tradicionais: Qual Escolher?',
    titleEn: 'MEMS Oscillators vs. Traditional Crystals: Which One to Choose?',
    excerptPt: 'Comparativo técnico aprofundado sobre imunidade a vibrações, consumo energético e estabilidad térmica.',
    excerptEn: 'In-depth technical comparison on vibration immunity, power consumption, and thermal stability.',
    contentPt: `
      <p>A escolha entre um oscilador de cristal tradicional (XO/SPXO) e um oscilador baseado em tecnologia MEMS (Micro-Electro-Mechanical Systems) depende criticamente do ambiente operacional do produto final.</p>

      <h3>Resistência a Choques e Vibrações</h3>
      <p>Enquanto cristais de quartzo mecânicos podem sofrer microfissuras ou desvios sob forte vibração mecânica (como em motores, automotivo ou aeroespacial), os osciladores MEMS de silício demonstram imunidade excepcional a choques de até 50.000g.</p>

      <h3>Estabilidade e Temperatura</h3>
      <p>Para aplicações onde o menor consumo de corrente e a flexibilidade de frequência programável são cruciais, os dispositivos MEMS oferecem vantagens notáveis. No entanto, para jitter ultra-baixo em telecomunicações de alta frequência, os cristais OCXO e TCXO tradicionais continuam sendo o padrão ouro.</p>
    `,
    contentEn: `
      <p>The choice between a traditional crystal oscillator (XO/SPXO) and a MEMS-based oscillator (Micro-Electro-Mechanical Systems) depends critically on the operating environment of the final product.</p>

      <h3>Shock and Vibration Resistance</h3>
      <p>While mechanical quartz crystals can suffer micro-cracks or frequency shifts under severe mechanical vibration (such as in motors, automotive, or aerospace), silicon MEMS oscillators demonstrate exceptional immunity to shocks up to 50,000g.</p>

      <h3>Stability and Temperature</h3>
      <p>For applications where lower current consumption and programmable frequency flexibility are crucial, MEMS devices offer remarkable advantages. However, for ultra-low jitter in high-frequency telecommunications, traditional OCXO and TCXO crystals remain the gold standard.</p>
    `,
    date: '10 de Fevereiro, 2026',
    readTime: '6 min',
    category: 'Tecnologia & Inovação',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    author: 'P&D Engenharia'
  }
];
