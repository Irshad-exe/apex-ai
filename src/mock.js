// Mock data for AI Automation Company Website

export const companyName = "Apex AI Systems";

export const navigation = [
  { name: "Home", path: "/" },
  { name: "AI Support", path: "/ai-support" },
  { name: "AI Sales", path: "/ai-sales" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const homeContent = {
  hero: {
    headline: "AI Automation Infrastructure for Modern SaaS",
    subheadline: "Reduce operational overhead by 40% with production-grade AI systems. Built for engineering teams who ship.",
    cta: "Book Strategy Call",
    secondaryCta: "View Case Studies"
  },
  problem: {
    title: "The Operational Bottleneck",
    description: "Growth-stage SaaS companies hit a wall: support requests scale linearly with users, sales outreach can't personalize at scale, and technical debt compounds.",
    stats: [
      { value: "60%", label: "Support time on repeat questions" },
      { value: "3%", label: "Average cold email response rate" },
      { value: "$200K", label: "Annual cost per support engineer" }
    ]
  },
  solution: {
    title: "Production-Ready AI Automation",
    description: "We deploy custom AI systems that integrate directly into your existing infrastructure. No consultant bloat. Just working code.",
    features: [
      {
        title: "RAG-Based Knowledge Systems",
        description: "Vector search across internal docs, previous tickets, and product documentation. Deployed to your infrastructure in 14 days.",
        tech: "Pinecone • OpenAI Embeddings • FastAPI"
      },
      {
        title: "AI Sales Intelligence",
        description: "Automated lead enrichment, personalization at scale, and intelligent sequence optimization. Integrates with your existing CRM.",
        tech: "GPT-4 • Custom Fine-tuning • API Integration"
      },
      {
        title: "LLM Infrastructure",
        description: "Custom model deployment, prompt optimization, and monitoring. Built for production load with 99.9% uptime SLA.",
        tech: "AWS/GCP • Kubernetes • Observability Stack"
      }
    ]
  },
  roi: {
    title: "Real Numbers, Not Marketing Fluff",
    examples: [
      {
        metric: "Support Cost Reduction",
        before: "$800K/year (4 engineers)",
        after: "$500K/year (2.5 engineers + system)",
        savings: "$300K annually",
        timeframe: "6 months to full impact"
      },
      {
        metric: "Sales Response Rate",
        before: "2.8% reply rate",
        after: "11.3% reply rate",
        impact: "4x pipeline velocity",
        timeframe: "30 days to deployment"
      }
    ]
  },
  timeline: {
    title: "30-Day Implementation Standard",
    phases: [
      { week: "Week 1", task: "System architecture & integration planning", deliverable: "Technical spec document" },
      { week: "Week 2", task: "Data pipeline setup & embedding generation", deliverable: "Working prototype" },
      { week: "Week 3", task: "Model fine-tuning & API integration", deliverable: "Staging deployment" },
      { week: "Week 4", task: "Production deployment & monitoring setup", deliverable: "Live system + runbook" }
    ]
  }
};

export const aiSupportContent = {
  hero: {
    title: "AI Support Automation",
    subtitle: "RAG-based knowledge systems that actually work in production"
  },
  problem: {
    title: "The Support Team Scaling Problem",
    description: "Every SaaS company faces the same issue: support requests grow linearly with users, but hiring support engineers is expensive and slow. Your team spends 60% of their time answering questions already documented somewhere.",
    painPoints: [
      "Support engineers spend hours searching internal docs",
      "Knowledge is siloed across Slack, Notion, and ticket history",
      "New hires take 3+ months to reach full productivity",
      "Repeat questions compound as you scale"
    ]
  },
  solution: {
    title: "Retrieval-Augmented Generation (RAG) System",
    description: "We deploy a custom knowledge assistant that searches your entire documentation, previous tickets, and internal knowledge base in real-time.",
    architecture: [
      {
        component: "Data Ingestion Pipeline",
        description: "Automated sync from Notion, Confluence, GitHub wikis, and ticket systems",
        tech: "Python • Airflow • Custom Connectors"
      },
      {
        component: "Vector Database",
        description: "Semantic search across 100K+ document chunks with <100ms query time",
        tech: "Pinecone • OpenAI ada-002 embeddings"
      },
      {
        component: "LLM Response Generation",
        description: "Context-aware answers with source citations and confidence scoring",
        tech: "GPT-4 • Custom prompt engineering"
      },
      {
        component: "Integration Layer",
        description: "Deploys as Slack bot, Zendesk widget, or API endpoint",
        tech: "FastAPI • WebSocket • OAuth2"
      }
    ]
  },
  integration: {
    title: "Integrates With Your Existing Stack",
    platforms: [
      { name: "Slack", description: "Answer questions directly in support channels" },
      { name: "Zendesk/Intercom", description: "AI suggestions in ticket interface" },
      { name: "Internal Docs", description: "Notion, Confluence, Google Docs" },
      { name: "GitHub", description: "Pull from wikis, READMEs, and issues" }
    ]
  },
  impact: {
    title: "Expected Outcomes",
    metrics: [
      { metric: "30-50% reduction in support ticket volume", detail: "Common questions automated" },
      { metric: "70% faster response time", detail: "Instant answers for documented questions" },
      { metric: "3-week onboarding reduction", detail: "New hires have AI knowledge assistant" },
      { metric: "99.9% uptime SLA", detail: "Production-grade infrastructure" }
    ]
  }
};

export const aiSalesContent = {
  hero: {
    title: "AI Sales Automation",
    subtitle: "Personalization at scale without the agency bloat"
  },
  problem: {
    title: "Cold Outbound Doesn't Scale",
    description: "Your SDR team sends 1,000 emails per week. 97% get ignored because they're generic. Manual personalization takes 15 minutes per prospect, which makes it economically impossible at scale.",
    stats: [
      { value: "2-3%", label: "Average cold email reply rate" },
      { value: "15 min", label: "Manual research per prospect" },
      { value: "$80K", label: "Cost per SDR annually" }
    ]
  },
  solution: {
    title: "AI Personalization Engine",
    description: "We build a custom AI system that researches prospects, scores leads, and generates personalized outreach at scale. Integrated directly into your CRM.",
    workflow: [
      {
        step: "Lead Enrichment",
        description: "Automated research from LinkedIn, company websites, funding data, tech stack, and recent news",
        output: "Structured lead profile with fit score"
      },
      {
        step: "Signal Detection",
        description: "Identify buying signals: hiring trends, product launches, funding rounds, tech migrations",
        output: "Prioritized lead list with trigger events"
      },
      {
        step: "Personalized Message Generation",
        description: "AI-generated first lines referencing specific company context. Not templates.",
        output: "Custom outreach for each prospect"
      },
      {
        step: "Sequence Optimization",
        description: "A/B testing, send time optimization, and automated follow-up based on engagement",
        output: "Self-improving campaign performance"
      }
    ]
  },
  technical: {
    title: "Technical Architecture",
    components: [
      {
        name: "Data Enrichment Pipeline",
        description: "Scrapes and structures data from 15+ public sources",
        tech: "Python • Selenium • Custom APIs"
      },
      {
        name: "Lead Scoring Model",
        description: "ML model trained on your historical conversion data",
        tech: "XGBoost • Feature engineering"
      },
      {
        name: "LLM Personalization",
        description: "GPT-4 fine-tuned on your best-performing emails",
        tech: "OpenAI API • Custom prompts"
      },
      {
        name: "CRM Integration",
        description: "Two-way sync with Salesforce, HubSpot, or custom CRM",
        tech: "REST APIs • Webhooks"
      }
    ]
  },
  impact: {
    title: "Performance Improvement",
    metrics: [
      { before: "2.8%", after: "11.3%", metric: "Email reply rate", timeframe: "30 days" },
      { before: "5 hours", after: "30 min", metric: "Daily list building", timeframe: "Immediate" },
      { before: "Manual", after: "Automated", metric: "Follow-up sequences", timeframe: "Week 2" }
    ]
  }
};

export const aboutContent = {
  hero: {
    title: "Built by Engineers, for Engineers",
    subtitle: "We're not an AI consulting agency. We're a technical automation company that ships production code."
  },
  philosophy: {
    title: "Engineering-First Approach",
    principles: [
      {
        title: "No Consultant Bloat",
        description: "We write code, not PowerPoint decks. Every engagement delivers working software, not recommendations."
      },
      {
        title: "Infrastructure Focus",
        description: "We build systems that scale. Proper monitoring, error handling, and observability from day one."
      },
      {
        title: "Measurable Outcomes",
        description: "We define success metrics upfront and track them religiously. If it doesn't move numbers, we don't build it."
      },
      {
        title: "Your Infrastructure",
        description: "Systems deploy to your AWS/GCP account. You own the code. No vendor lock-in."
      }
    ]
  },
  expertise: {
    title: "Technical Capabilities",
    areas: [
      {
        category: "LLM Systems",
        skills: ["GPT-4 fine-tuning", "Prompt optimization", "RAG architecture", "Vector databases"]
      },
      {
        category: "Infrastructure",
        skills: ["Kubernetes deployment", "AWS/GCP", "CI/CD pipelines", "Monitoring & observability"]
      },
      {
        category: "Integrations",
        skills: ["CRM APIs", "Slack bots", "Webhook systems", "OAuth2 implementation"]
      },
      {
        category: "Data Engineering",
        skills: ["ETL pipelines", "Real-time processing", "Data modeling", "API design"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        phase: "Discovery Call",
        duration: "1 hour",
        description: "Deep-dive technical discussion. We audit your current setup, identify bottlenecks, and scope the system architecture."
      },
      {
        phase: "Technical Proposal",
        duration: "3 days",
        description: "Detailed system design, integration plan, timeline, and cost breakdown. No vague estimates."
      },
      {
        phase: "Sprint Implementation",
        duration: "2-4 weeks",
        description: "Weekly demos of working software. You see progress every Friday."
      },
      {
        phase: "Production Handoff",
        duration: "1 week",
        description: "Full documentation, runbooks, and monitoring dashboard. We train your team on system maintenance."
      }
    ]
  },
  ideal: {
    title: "Who We Work With",
    description: "We're optimized for growth-stage SaaS companies (10-200 employees) with technical founders who:",
    criteria: [
      "Have clear operational bottlenecks that AI can solve",
      "Understand that good AI systems require custom engineering",
      "Want to own the infrastructure, not rent it",
      "Value speed and pragmatism over perfect architecture"
    ]
  }
};

export const contactContent = {
  hero: {
    title: "Let's Talk Systems",
    subtitle: "Book a 30-minute technical discovery call. We'll audit your current setup and map out what's possible."
  },
  calendar: {
    title: "Book Strategy Call",
    description: "We'll discuss your operational bottlenecks, technical requirements, and build a custom implementation plan.",
    placeholder: "Calendar integration would go here"
  },
  alternative: {
    title: "Or Send Us Details",
    description: "Tell us about your technical stack and what you're trying to automate. We'll respond within 24 hours with initial thoughts."
  },
  info: {
    email: "engineering@apexai.systems",
    response: "< 24 hour response time",
    availability: "US time zones (EST/PST)"
  }
};

export const ctaContent = {
  main: {
    title: "Ready to Deploy AI Automation?",
    description: "Let's discuss your technical requirements and build a custom system architecture.",
    buttonText: "Book Technical Call",
    subtext: "30-minute discovery • No sales pitch • Just engineering talk"
  }
};
