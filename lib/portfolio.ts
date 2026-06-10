export const profile = {
  name: "Ahmed Chtourou",
  shortName: "Ahmed",
  title: "AI Engineer",
  roles: ["AI Engineer", "Data Engineer", "Researcher"],
  email: "ahmedchtourou.ai@gmail.com",
  phone: "+21622263340",
  location: "Tunisia / Remote",
  github: "https://github.com/ahmedchtourouai/portfolio",
  linkedin: "https://www.linkedin.com/in/ahmed-chtourou-933b43222/",
  resume: "AhmedCHRS.pdf",
  siteUrl: "https://ahmedchtourouai.github.io/portfolio/",
  summary:
    "AI Engineer, Data Engineer, and Researcher building production-grade LLM applications, agentic workflows, multimodal AI systems, forecasting platforms, and cloud data architectures across Google Cloud and Azure.",
}

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export const highlights = [
  "10+ GenAI and agentic AI POCs delivered",
  "10K+ posts/week multimodal pipeline scale",
  "35% retrieval-efficiency improvement",
  "20% forecasting accuracy improvement",
]

export const education = [
  "PhD Candidate in Artificial Intelligence, National School of Engineering of Sfax (ENIS), 2026 - Present",
  "Engineering Diploma in Computer Science, National School of Electronics and Telecommunications of Sfax, 2021 - 2024",
]

export const skillGroups = [
  {
    title: "AI Agents & LLM Orchestration",
    items: ["LLMs", "LangChain", "LangGraph", "CrewAI", "MCP", "n8n", "Prompt Engineering", "Evaluation"],
  },
  {
    title: "GenAI & Retrieval",
    items: ["RAG", "Embeddings", "Vector Search", "Transformers", "Hugging Face", "Diffusers", "Fine-tuning"],
  },
  {
    title: "Data Systems",
    items: ["BigQuery", "SQL", "Spark", "ETL / ELT", "Data Modeling", "Knowledge Graphs", "Power BI"],
  },
  {
    title: "Cloud & MLOps",
    items: ["Google Cloud", "Azure", "AWS", "Docker", "Kubernetes", "GitHub Actions", "FastAPI", "Monitoring"],
  },
]

export const experience = [
  {
    client: "Satisfy Running",
    url: "https://satisfyrunning.com/",
    role: "Data Engineer",
    dates: "Feb 2026 - Present",
    tools: ["Python", "n8n", "BigQuery", "GCS", "SQL", "Power BI", "GCP"],
    bullets: [
      "Designed automated n8n workflows for ERP data extraction and orchestration into Google Cloud Storage.",
      "Built BigQuery data layers for analytics, reporting, and operational decision support.",
      "Delivered Power BI dashboards for business performance monitoring.",
    ],
  },
  {
    client: "OliveSoft",
    url: "https://www.olivesoft.fr/en",
    role: "Generative AI Engineer",
    dates: "Nov 2025 - Present",
    tools: ["LangChain", "LangGraph", "OpenAI", "Gemini", "n8n", "Docker", "Vertex AI"],
    bullets: [
      "Led design and delivery of 10+ Generative AI and agentic AI solutions.",
      "Built LLM-powered automation systems for enterprise workflows.",
      "Defined prompt engineering standards, evaluation practices, and production-readiness guidelines.",
    ],
  },
  {
    client: "Jacquemus",
    url: "https://www.jacquemus.com/en_fr",
    role: "Generative AI Engineer",
    dates: "Sep 2025 - Dec 2025",
    tools: ["LangChain", "LangGraph", "OpenAI API", "Langfuse", "FastAPI", "Docker", "Jira API", "Confluence API"],
    bullets: [
      "Developed an enterprise semantic search system using RAG over internal knowledge sources.",
      "Integrated Confluence into a unified AI assistant experience.",
      "Implemented evaluation and observability pipelines with Langfuse.",
    ],
  },
  {
    client: "MPBS",
    url: "https://mpbs.com.tn/en/",
    role: "Data Scientist",
    dates: "Mar 2025 - Dec 2025",
    tools: ["Vertex AI", "BigQuery", "Cloud Build", "Docker", "Optuna", "Prophet", "SARIMAX"],
    bullets: [
      "Built demand and revenue forecasting models on Vertex AI.",
      "Automated retraining and CI/CD pipelines using Cloud Build.",
      "Improved forecasting accuracy by about 20% while reducing operational bottlenecks.",
    ],
  },
  {
    client: "Kwore",
    url: "https://www.kwore.com/en",
    role: "AI Engineer",
    dates: "Feb 2024 - Mar 2025",
    tools: ["Azure ML", "MLflow", "PyTorch", "Hugging Face", "LangChain", "GitHub Actions", "Docker"],
    bullets: [
      "Led multimodal AI R&D for marketing intelligence.",
      "Built pipelines processing more than 10K posts per week.",
      "Developed clustering and analytics systems for insight discovery.",
    ],
  },
]

export const projects = [
  {
    title: "Agentic Enterprise Search",
    context: "Jacquemus",
    description:
      "RAG-based internal assistant connecting Confluence, Jira, and vector search with evaluation and observability built in.",
    tags: ["LangGraph", "OpenAI", "Langfuse", "Elasticsearch", "FastAPI"],
    impact: "Improved retrieval efficiency by about 35%.",
  },
  {
    title: "Multimodal Marketing Intelligence",
    context: "Kwore",
    description:
      "Social intelligence pipeline for multimodal post analysis, clustering, enrichment, and insight generation.",
    tags: ["PyTorch", "Azure ML", "BigQuery", "LLMs", "MLflow"],
    impact: "Scaled to more than 10K posts per week.",
  },
  {
    title: "Forecasting & Retraining Platform",
    context: "MPBS",
    description:
      "Cloud-native forecasting workflow with automated retraining, experiment tracking, and CI/CD delivery.",
    tags: ["Vertex AI", "BigQuery", "Cloud Build", "Optuna", "Docker"],
    impact: "Improved forecasting accuracy by about 20%.",
  },
  {
    title: "ERP Data Platform",
    context: "OliveSoft / Satisfy Running",
    description:
      "Automated data ingestion and transformation platform moving ERP data into analytics-ready BigQuery layers.",
    tags: ["n8n", "GCS", "BigQuery", "SQL", "Power BI"],
    impact: "Reduced manual reporting work and improved operational visibility.",
  },
]

export const certifications = [
  {
    title: "Google Cloud Certified: Associate Data Practitioner",
    date: "April 2026",
    issuer: "Google Cloud",
    link: "https://www.credly.com/badges/b2c5263d-01f6-4dc8-a525-c3011f5a828b",
    logo: "logos/google_cloud_logo.png",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    date: "November 2025",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/fr-fr/users/ahmedchtourou-7956/credentials/acd25857a74419c3",
    logo: "logos/Microsoft_Azure_logo.png",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    date: "November 2023",
    issuer: "Microsoft",
    link: "https://www.credly.com/badges/00366c17-e9df-4923-b934-f60205e7cdbe",
    logo: "logos/Microsoft_Azure_logo.png",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    date: "November 2023",
    issuer: "Microsoft",
    link: "https://www.credly.com/badges/64e7894c-b368-46d4-a751-d4cab1fdbe11",
    logo: "logos/Microsoft_Azure_logo.png",
  },
]
