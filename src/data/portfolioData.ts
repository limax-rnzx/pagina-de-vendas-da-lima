import { ServiceItem, DifferentialItem, ProjectItem, TestimonialItem, FaqItem, SkillCategory } from '../types';

import pedroAvatar from '../assets/images/pedro_purple_portrait_1785092507931.jpg';
import saasDashboardImg from '../assets/images/saas_dashboard_1785085448927.jpg';
import automationImg from '../assets/images/automation_system_1785085462850.jpg';
import webSolutionImg from '../assets/images/web_solution_1785085477737.jpg';

export const PEDRO_INFO = {
  name: "Pedro Gabriel",
  title: "Empreendedor Digital, Desenvolvedor de Software e SaaS",
  tagline: "Transformando ideias em soluções digitais inteligentes",
  bioHeadline: "Desenvolvedor focado em criar produtos digitais escaláveis, sistemas eficientes e plataformas SaaS de alto impacto.",
  experienceYears: "1 Ano",
  status: "Estudante de Informática & Desenvolvedor Active",
  avatarUrl: pedroAvatar,
  email: "pedrogabriel.v44@gmail.com",
  whatsappNumber: "5511999999999", // Format for WhatsApp link
  whatsappDisplay: "+55 (11) 99999-9999",
  location: "Brasil",
  socialLinks: {
    github: "https://github.com/pedrogabriel",
    linkedin: "https://linkedin.com/in/pedrogabriel",
    instagram: "https://instagram.com/pedrogabriel.dev",
    whatsapp: "https://wa.me/5511999999999?text=Ol%C3%A1%20Pedro!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20meu%20projeto."
  },
  footerPhrase: "Pedro Gabriel | Empreendedor Digital, Desenvolvedor de Software e SaaS — Criando soluções inteligentes para transformar negócios."
};

export const ABOUT_TEXT = {
  trajectory: "Minha jornada no desenvolvimento de software começou com a paixão por resolver problemas reais através da tecnologia. Há 1 ano venho me dedicando intensamente à criação de aplicações modernas, arquitetura de sistemas e soluções SaaS (Software as a Service). Atualmente como estudante de Informática e Empreendedor Digital, combino rigor técnico com visão de negócios para entregar softwares eficientes, seguros e preparados para o crescimento.",
  mission: "Minha missão é impulsionar negócios e empreendedores simplificando processos complexos através de interfaces intuitivas, automações inteligentes e arquitetura de software escalável.",
  pillars: [
    { title: "Visão Empreendedora", desc: "Entendimento real das dores de negócios e métricas de retorno sobre investimento." },
    { title: "Foco em Código Limpo", desc: "Desenvolvimento com boas práticas, testes e facilidade de manutenção futura." },
    { title: "Aprendizado Contínuo", desc: "Estudante ativo de Informática constantemente atualizado com as melhores stacks de tecnologia." }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Desenvolvimento & Frameworks",
    skills: [
      { name: "TypeScript & JavaScript", level: 92, icon: "Code2" },
      { name: "React & Next.js", level: 90, icon: "Layout" },
      { name: "Node.js & Express", level: 88, icon: "Server" },
      { name: "Tailwind CSS & Glassmorphism UI", level: 95, icon: "Palette" }
    ]
  },
  {
    title: "SaaS & Arquitetura de Software",
    skills: [
      { name: "SaaS Multi-tenant & Autenticação", level: 85, icon: "Layers" },
      { name: "Modelagem de Banco de Dados", level: 84, icon: "Database" },
      { name: "APIs RESTful & Webhooks", level: 90, icon: "Webhook" },
      { name: "Deploy & Nuvem (Cloud Run, Vercel)", level: 86, icon: "Cloud" }
    ]
  },
  {
    title: "Automações & Soluções Digitais",
    skills: [
      { name: "Automação de Processos & Bot Workflow", level: 92, icon: "Zap" },
      { name: "Integração WhatsApp & Pagamentos", level: 88, icon: "MessageSquare" },
      { name: "Otimização de Performance & SEO", level: 89, icon: "Gauge" },
      { name: "UI/UX Design Responsivo", level: 91, icon: "Smartphone" }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "saas",
    title: "Desenvolvimento de SaaS Personalizados",
    shortDesc: "Criação de plataformas de software como serviço (SaaS) completas com assinaturas, dashboards e gestão de usuários.",
    fullDesc: "Transforme sua ideia de software recorrente em uma plataforma lucrativa. Desenvolvo aplicações SaaS escaláveis com autenticação segura, gestão de planos/assinaturas, área de membros, gráficos analíticos e integrações de pagamento.",
    iconName: "Rocket",
    badge: "Mais Solicitado",
    features: [
      "Arquitetura Multi-tenant escalável",
      "Integração com gateways de pagamento (Stripe, Mercado Pago)",
      "Painel administrativo com métricas em tempo real",
      "Gestão de usuários, permissões e perfis",
      "Design moderno em Dark/Light Mode"
    ],
    recommendedFor: "Empreendedores digitais e startups que desejam lançar um produto SaaS no mercado."
  },
  {
    id: "sistemas",
    title: "Criação de Sistemas para Empresas",
    shortDesc: "Sistemas internos sob medida para organizar, gerenciar e otimizar as operações do seu negócio.",
    fullDesc: "Elimine planilhas confusas e sistemas genéricos que não atendem às suas necessidades específicas. Desenvolvo sistemas corporativos web acessíveis de qualquer lugar com controle de fluxo de caixa, clientes e estoques.",
    iconName: "Building2",
    features: [
      "Sistemas CRM e ERP customizados",
      "Gestão de clientes, vendas e chamados",
      "Relatórios e gráficos exportáveis",
      "Controle de acesso por níveis de usuário",
      "Segurança de dados e backups programados"
    ],
    recommendedFor: "Empresas que necessitam de uma ferramenta própria para centralizar dados e operações."
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    shortDesc: "Otimização de rotinas repetitivas através da integração de APIs e fluxos de trabalho inteligentes.",
    fullDesc: "Economize dezenas de horas de trabalho manual por semana. Crio rotinas automatizadas que conectam seus sistemas, formulários, e-mails e atendimento via WhatsApp para funcionar 24 horas por dia.",
    iconName: "Cpu",
    badge: "Alta Eficiência",
    features: [
      "Integração entre sistemas via APIs e Webhooks",
      "Automação de envio de mensagens e notificações no WhatsApp",
      "Geração automática de relatórios e documentos",
      "Captura e distribuição automática de Leads",
      "Redução drástica de falhas humanas"
    ],
    recommendedFor: "Negócios que querem reduzir custos operacionais e escalar sem aumentar equipe."
  },
  {
    id: "web",
    title: "Desenvolvimento Web",
    shortDesc: "Landing pages de altíssima conversão, portfólios e portais corporativos modernos e ultra velozes.",
    fullDesc: "Crie uma presença digital forte e profissional. Desenvolvo sites rápidos, otimizados para motores de busca (SEO) e adaptados perfeitamente a telas de computadores, tablets e celulares.",
    iconName: "Globe",
    features: [
      "Design exclusivo e moderno com Glassmorphic UI",
      "Carregamento ultrarrápido com pontuação alta no PageSpeed",
      "Responsividade total (mobile-first)",
      "Otimização para SEO e conversão de clientes",
      "Animações suaves e navegação agradável"
    ],
    recommendedFor: "Empresas e profissionais que querem causar uma impressão marcante e captar mais clientes."
  },
  {
    id: "pequenos-negocios",
    title: "Soluções Digitais para Pequenos Negócios",
    shortDesc: "Ferramentas enxotas e acessíveis para digitalizar seu comércio local, prestação de serviços ou consultoria.",
    fullDesc: "Modernize seu pequeno negócio com soluções práticas e de alto retorno: catalogos digitais, sistemas de agendamento online, comanda eletrônica e páginas diretas de venda.",
    iconName: "Store",
    features: [
      "Agendamento automatizado online de horários",
      "Catálogo digital de produtos/serviços integrado ao WhatsApp",
      "Formulários inteligentes de orçamento instantâneo",
      "Facilidade de uso e treinamento simples da equipe",
      "Custo-benefício excelente para pequenos orçamentos"
    ],
    recommendedFor: "Comércio local, prestadores de serviços, clínicas, consultores e autônomos."
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "diff-1",
    title: "Atendimento Personalizado",
    description: "Comunicação direta comigo, sem intermediários. Você acompanha cada etapa do projeto com transparência total.",
    iconName: "UserCheck",
    highlight: "Comunicação direta & ágil"
  },
  {
    id: "diff-2",
    title: "Soluções Modernas e Escaláveis",
    description: "Tecnologias atualizadas do mercado que garantem que seu software suporte o crescimento do seu negócio sem travamentos.",
    iconName: "TrendingUp",
    highlight: "Preparado para escalar"
  },
  {
    id: "diff-3",
    title: "Segurança e Desempenho",
    description: "Aplicações otimizadas para velocidade máxima, proteção de dados e conformidade com as melhores práticas digitais.",
    iconName: "ShieldCheck",
    highlight: "Alta velocidade e proteção"
  },
  {
    id: "diff-4",
    title: "Interface Intuitiva e Profissional",
    description: "Foco absoluto na experiência do usuário (UI/UX). Telas bonitas, agradáveis e extremamente fáceis de usar.",
    iconName: "Sparkles",
    highlight: "UI/UX de classe mundial"
  },
  {
    id: "diff-5",
    title: "Compromisso com a Qualidade",
    description: "Entrega rigorosa no prazo combinada com suporte pós-entrega para garantir o sucesso contínuo da solução.",
    iconName: "Award",
    highlight: "Prazos honrados e suporte"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-saas-analytics",
    title: "MetricFlow SaaS Platform",
    category: "saas",
    categoryLabel: "Plataforma SaaS",
    shortDescription: "Plataforma SaaS multi-tenant para monitoramento e análise de métricas financeiras e vendas em tempo real.",
    fullDescription: "SaaS completo desenvolvido para empresas acompanharem MRR, Churn, CAC e LTV com gráficos interativos, exportação de relatórios e relatórios automáticos via e-mail.",
    imageUrl: saasDashboardImg,
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Recharts", "Stripe API"],
    features: [
      "Dashboard analítico com métricas em tempo real",
      "Painel financeiro automatizado",
      "Sistema de assinatura e planos via Stripe",
      "Exportação em PDF e Excel"
    ],
    clientType: "Startup de Finanças",
    completionYear: "2026"
  },
  {
    id: "proj-autoflow",
    title: "AutoFlow Enterprise System",
    category: "automacao",
    categoryLabel: "Automação & Processos",
    shortDescription: "Sistema de integração de APIs e automação de fluxos operacionais com disparo de notificações WhatsApp.",
    fullDescription: "Solução sob medida que conecta sistemas legados de vendas com gateways de pagamento e envia confirmações instantâneas de pedidos para clientes finais no WhatsApp.",
    imageUrl: automationImg,
    tags: ["Node.js", "Express", "Webhooks", "WhatsApp Business API", "Docker"],
    features: [
      "Fluxo 100% automatizado sem intervenção humana",
      "Redução de tempo de processamento de 45 min para 3 segundos",
      "Registro detalhado de logs e tratamento de falhas",
      "Painel de monitoramento de instâncias"
    ],
    clientType: "Empresa de Logística & Vendas",
    completionYear: "2026"
  },
  {
    id: "proj-connect-web",
    title: "Nexus Digital Web Platform",
    category: "web",
    categoryLabel: "Desenvolvimento Web",
    shortDescription: "Plataforma web responsiva de alta conversão para aceleração de captação de leads empresariais.",
    fullDescription: "Aplicação web desenvolvida com Glassmorphic UI e animações suaves, alcançando pontuação 98+ no Google PageSpeed e aumentando a taxa de conversão do cliente em 34%.",
    imageUrl: webSolutionImg,
    tags: ["React 19", "Tailwind CSS v4", "Motion", "Vite", "SEO Advanced"],
    features: [
      "Carregamento otimizado inferior a 1 segundo",
      "Calculadora interativa de simulação de orçamento",
      "Integração direta com CRM e WhatsApp",
      "100% Responsivo para mobile e desktop"
    ],
    clientType: "Agência de Soluções Digitais",
    completionYear: "2025"
  },
  {
    id: "proj-omnidesk-crm",
    title: "OmniDesk Gestão Empresarial",
    category: "sistemas",
    categoryLabel: "Sistema Corporativo",
    shortDescription: "Sistema corporativo para gestão de atendimento, chamados e cadastro de clientes para PMEs.",
    fullDescription: "Sistema interno desenvolvido para centralizar solicitações de clientes, acompanhar status de atendimento e gerar métricas de produtividade da equipe.",
    imageUrl: saasDashboardImg,
    tags: ["TypeScript", "Express.js", "React", "PostgreSQL", "Tailwind"],
    features: [
      "Gestão de chamados em quadro Kanban",
      "Notificações automáticas por e-mail",
      "Permissões customizáveis para funcionários",
      "Histórico completo de atendimentos"
    ],
    clientType: "Prestador de Serviços Médicos",
    completionYear: "2025"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Carlos Eduardo",
    clientRole: "Fundador",
    companyName: "Nexus Tech Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "O Pedro desenvolveu nosso sistema SaaS com uma velocidade e qualidade impressionantes. A atenção aos detalhes de design e a estabilidade do código superaram todas as nossas expectativas!",
    projectType: "Desenvolvimento SaaS"
  },
  {
    id: "test-2",
    clientName: "Mariana Alencar",
    clientRole: "Diretora de Operações",
    companyName: "LogiFlow Brasil",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "A automação que o Pedro criou para nossa empresa economiza mais de 20 horas semanais da nossa equipe. O atendimento foi impecável do início ao fim.",
    projectType: "Automação de Processos"
  },
  {
    id: "test-3",
    clientName: "Lucas Mendes",
    clientRole: "CEO",
    companyName: "Avança Digital",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Trabalhar com o Pedro foi super tranquilo. Ele entendeu perfeitamente a necessidade do nosso negócio e entregou um site rápido, bonito e focado em vendas.",
    projectType: "Desenvolvimento Web"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quanto tempo leva para desenvolver um software ou SaaS personalizado?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Landing pages e sites institucionais levam em média de 3 a 7 dias. Automações e sistemas médios costumam levar de 1 a 3 semanas. Projetos SaaS mais robustos levam de 3 a 6 semanas. Um cronograma detalhado é fornecido logo na proposta inicial.",
    category: "Prazos"
  },
  {
    id: "faq-2",
    question: "Como funciona o processo de orçamento e contratação?",
    answer: "É simples e transparente! 1º Você entra em contato descrevendo sua ideia. 2º Agendamos uma conversa rápida para alinhar requisitos. 3º Envio uma proposta comercial detalhada com valor e prazos. 4º Após aprovação e assinatura, iniciamos o desenvolvimento imediatamente.",
    category: "Contratação"
  },
  {
    id: "faq-3",
    question: "Você oferece suporte e manutenção após a entrega do projeto?",
    answer: "Sim! Todos os projetos contam com garantia pós-entrega inclusa para correção de possíveis dúvidas ou bugs. Além disso, ofereço planos opcionais de manutenção contínua, atualizações e evolução do software.",
    category: "Suporte"
  },
  {
    id: "faq-4",
    question: "O sistema ou site já vem otimizado para celular e tablet?",
    answer: "Com certeza! Todos os projetos utilizam a filosofia Mobile-First. Eles são testados e ajustados rigorosamente em diversos tamanhos de tela (smartphones, tablets, notebooks e monitores ultrawide) para garantir a melhor experiência.",
    category: "Design"
  },
  {
    id: "faq-5",
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Trabalho com condições flexíveis para facilitar o investimento do seu negócio: PIX (com desconto especial), Boleto Bancário ou Cartão de Crédito parcelado. Em geral, dividimos em entrada + parcela final na entrega.",
    category: "Pagamento"
  },
  {
    id: "faq-6",
    question: "Qual a diferença entre um site simples e um SaaS/Sistema web?",
    answer: "Um site institucional/landing page tem como foco apresentar informações e captar clientes. Já um SaaS ou Sistema web é uma aplicação interativa que realiza processamentos complexos, como login de usuários, pagamentos, geração de relatórios, banco de dados e automação de tarefas diárias.",
    category: "Geral"
  }
];
