export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export type DomainOfExpertise = {
  code: string
  title: string
  problem: string
  systems: string
  scope: string
  stack: string[]
}

export type MissionExperience = {
  role: string
  dates: string
  mission: string
  context: string
  challenge: string
  solution: string
  impact: string
  stack: string[]
}

export type ClientMission = {
  name: string
  url: string
  businessContext: string
  systemBuilt: string
  contribution: string
  impact: string
  stack: string[]
}

export type ProjectCaseStudy = {
  title: string
  context: string
  problem: string
  architecture: string
  approach: string
  implementation: string
  deployment: string
  impact: string
  tags: string[]
}

export const profile = {
  name: "Ahmed Chtourou",
  shortName: "Ahmed",
  title: "AI Engineer",
  roles: ["Production AI Engineer", "Data Engineer", "MLOps Builder"],
  email: "ahmedchtourou.ai@gmail.com",
  phone: "+21622263340",
  location: "Tunisia / Remote",
  linkedin: "https://www.linkedin.com/in/ahmed-chtourou-933b43222/",
  resume: "AhmedCHRS.pdf",
  siteUrl: "/",
  summary:
    "I build and deploy production AI systems: LLM applications, RAG pipelines, agentic workflows, forecasting platforms, and cloud data architectures across GCP and Azure.",
  about:
    "I work where AI modeling meets production engineering. My focus is turning ambiguous business problems into reliable systems: grounded retrieval, measurable evaluation, automated data pipelines, monitored model workflows, and APIs that teams can operate after the demo. I care about architecture, data quality, deployment constraints, and measurable impact as much as model choice.",
}

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#domains", label: "Domains of Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#clients", label: "Clients" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export const highlights = [
  "10+ GenAI and agentic systems delivered",
  "10K+ multimodal posts processed weekly",
  "35% retrieval-efficiency improvement",
  "20% forecasting accuracy improvement",
]

export const education = [
  "PhD Candidate in Artificial Intelligence, National School of Engineering of Sfax (ENIS), 2026 - Present",
  "Engineering Diploma in Computer Science, National School of Electronics and Telecommunications of Sfax, 2021 - 2024",
]

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Systems",
    description: "Designing LLM, RAG, and agent workflows with evaluation, orchestration, and reliability constraints.",
    items: ["LLMs", "RAG", "Agents", "LangChain", "LangGraph", "Prompt Engineering", "Evaluation", "Vector Search"],
  },
  {
    title: "Data Platforms",
    description: "Building analytics-ready data flows for AI products, reporting, experimentation, and decision support.",
    items: ["SQL", "ETL / ELT", "BigQuery", "Spark", "Data Modeling", "Feature Engineering", "Power BI"],
  },
  {
    title: "Cloud & MLOps",
    description: "Shipping models and data workflows with repeatable deployment, monitoring, and cloud infrastructure.",
    items: ["GCP", "Azure", "Vertex AI", "Azure ML", "Docker", "Kubernetes", "MLflow", "CI/CD"],
  },
  {
    title: "Engineering",
    description: "Implementing AI systems as maintainable software with APIs, automation, and production interfaces.",
    items: ["Python", "FastAPI", "n8n", "GitHub Actions", "Elasticsearch", "APIs", "Observability"],
  },
]

export const domainsOfExpertise: DomainOfExpertise[] = [
  {
    code: "D-01",
    title: "Generative AI & Agentic Systems",
    problem: "Teams need assistants that answer from trusted sources, trigger workflows, and stay observable in production.",
    systems: "LLM assistants, RAG pipelines, agentic workflows, workflow automations, and enterprise search experiences.",
    scope: "Retrieval design, prompt strategy, tool orchestration, evaluation, guardrails, observability, and deployment.",
    stack: ["LangChain", "LangGraph", "OpenAI", "Gemini", "Elasticsearch", "Langfuse", "FastAPI"],
  },
  {
    code: "D-02",
    title: "Machine Learning & Deep Learning",
    problem: "Business and research teams need models that convert messy structured, text, image, and multimodal data into usable predictions.",
    systems: "Computer vision experiments, NLP pipelines, forecasting models, multimodal clustering, and predictive systems.",
    scope: "Dataset preparation, feature engineering, model training, experimentation, evaluation, and performance iteration.",
    stack: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "Optuna"],
  },
  {
    code: "D-03",
    title: "Data Engineering & MLOps",
    problem: "AI products depend on reliable ingestion, transformation, deployment, and monitoring before models can create value.",
    systems: "Cloud data pipelines, BigQuery analytics layers, retraining workflows, CI/CD pipelines, and dashboard-ready datasets.",
    scope: "Data ingestion, orchestration, model deployment, versioning, monitoring foundations, and production operations.",
    stack: ["BigQuery", "GCS", "GCP", "Azure ML", "Cloud Build", "Docker", "SQL"],
  },
  {
    code: "D-04",
    title: "AI Product Engineering",
    problem: "AI ideas need usable product surfaces, stable APIs, and automation paths to become adopted by real users.",
    systems: "AI APIs, internal assistants, automation tools, dashboards, and client-facing technical demos.",
    scope: "Requirements translation, architecture, API design, integration, stakeholder demos, and enterprise readiness.",
    stack: ["FastAPI", "Python", "n8n", "Docker", "Power BI", "Jira API", "Confluence API"],
  },
]

export const experience: MissionExperience[] = [
  {
    role: "AI Engineer Intern",
    dates: "February 2024 \u2013 August 2024",
    mission: "Build experimental AI systems and validate advanced ML/DL approaches against real data constraints.",
    context: "Early applied AI work focused on moving from academic models to working prototypes with measurable behavior.",
    challenge: "Raw datasets needed preparation, model choices had to be compared, and experiments needed repeatable evaluation instead of isolated notebooks.",
    solution:
      "Prepared datasets, trained and evaluated deep learning models, iterated on computer vision and NLP pipelines, and documented model behavior for handoff.",
    impact:
      "Strengthened the foundation for production AI work by connecting experimentation, data preparation, evaluation, and model-performance iteration.",
    stack: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    role: "Data Scientist",
    dates: "September 2024 \u2013 September 2025",
    mission: "Turn complex structured and unstructured data into predictive systems and actionable decision support.",
    context: "Data science missions spanning analysis, feature engineering, predictive modeling, NLP, and AI experimentation.",
    challenge: "Business questions required models that could handle noisy data, explain drivers, and produce outputs useful beyond the experiment phase.",
    solution:
      "Built feature pipelines, trained classical ML and deep learning models, compared modeling approaches, and translated outputs into operational insights.",
    impact:
      "Delivered predictive workflows that improved insight extraction and created reusable modeling patterns for future AI and analytics systems.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Deep Learning", "NLP", "Data Analysis", "Feature Engineering"],
  },
  {
    role: "Generative AI Engineer",
    dates: "September 2025 \u2013 Present",
    mission: "Build production-ready LLM applications, AI agents, RAG pipelines, and enterprise automation systems.",
    context: "Enterprise teams needed AI assistants and workflow automation that could connect to internal knowledge and business tools.",
    challenge: "The systems needed grounded responses, reliable orchestration, evaluation, observability, and deployment patterns suitable for stakeholder use.",
    solution:
      "Designed LLM applications with retrieval, tool use, agent orchestration, prompt standards, evaluation loops, and containerized delivery paths.",
    impact:
      "Contributed to 10+ GenAI and agentic systems, improving retrieval workflows, automation coverage, and enterprise AI readiness.",
    stack: ["LangChain", "LangGraph", "OpenAI", "Gemini", "n8n", "Docker", "Vertex AI", "Elasticsearch", "RAG"],
  },
  {
    role: "Data Engineer",
    dates: "March 2026 \u2013 Present",
    mission: "Build scalable data platforms that make AI systems and business analytics reliable in production.",
    context: "AI and reporting workflows required dependable ingestion, transformation, storage, and monitoring-ready data layers.",
    challenge: "Operational data had to move from source systems into cloud platforms with clear structure, repeatability, and analytics usability.",
    solution:
      "Developed ingestion workflows, transformation logic, BigQuery layers, and analytics-ready datasets powering dashboards and AI products.",
    impact:
      "Reduced manual reporting friction and improved the reliability of data foundations used by production AI and analytics workflows.",
    stack: ["Python", "SQL", "BigQuery", "GCP", "Data Pipelines", "Cloud Architecture", "ETL"],
  },
]

export const clients: ClientMission[] = [
  {
    name: "Satisfy Running",
    url: "https://satisfyrunning.com/",
    businessContext: "Retail operations required cleaner ERP data flows and analytics-ready cloud datasets.",
    systemBuilt: "Automated ERP ingestion and BigQuery data platform feeding operational analytics and reporting.",
    contribution:
      "Designed n8n orchestration, GCS landing flows, SQL transformations, BigQuery layers, and Power BI reporting outputs.",
    impact: "Improved operational visibility and reduced manual effort across recurring reporting workflows.",
    stack: ["Python", "n8n", "BigQuery", "GCS", "SQL", "Power BI", "GCP"],
  },
  {
    name: "OliveSoft",
    url: "https://www.olivesoft.fr/en",
    businessContext: "Internal and client teams needed practical GenAI systems that could move beyond demos.",
    systemBuilt: "LLM assistants, agentic workflows, automation systems, and technical solution architectures.",
    contribution:
      "Built orchestration flows, prompt and evaluation standards, demos, containerized services, and production-readiness guidance.",
    impact: "Helped deliver 10+ GenAI and agentic AI systems for enterprise and internal use cases.",
    stack: ["LangChain", "LangGraph", "OpenAI", "Gemini", "n8n", "Docker", "Vertex AI"],
  },
  {
    name: "Jacquemus",
    url: "https://www.jacquemus.com/en_fr",
    businessContext: "Enterprise knowledge was distributed across internal tools and difficult to retrieve consistently.",
    systemBuilt: "Agentic enterprise search assistant using RAG over Confluence, Jira, and vector-indexed knowledge.",
    contribution:
      "Implemented retrieval flows, API integrations, LangGraph orchestration, Langfuse observability, and FastAPI services.",
    impact: "Improved internal retrieval efficiency by about 35% while increasing traceability of AI answers.",
    stack: ["LangGraph", "OpenAI API", "Langfuse", "FastAPI", "Docker", "Jira API", "Confluence API"],
  },
  {
    name: "MPBS",
    url: "https://mpbs.com.tn/en/",
    businessContext: "Planning workflows needed more reliable demand and revenue forecasts.",
    systemBuilt: "Cloud forecasting and retraining workflow using Vertex AI, BigQuery, and CI/CD automation.",
    contribution:
      "Built model experiments, feature workflows, automated retraining, deployment flows, and forecasting comparisons.",
    impact: "Improved forecasting accuracy by about 20% and reduced operational bottlenecks in model updates.",
    stack: ["Vertex AI", "BigQuery", "Cloud Build", "Docker", "Optuna", "Prophet", "SARIMAX"],
  },
  {
    name: "Kwore",
    url: "https://www.kwore.com/en",
    businessContext: "Marketing intelligence required scalable analysis of high-volume multimodal social content.",
    systemBuilt: "Multimodal AI pipeline for post analysis, clustering, enrichment, and insight generation.",
    contribution:
      "Implemented model experiments, content processing flows, embeddings, clustering, MLflow tracking, and Azure ML workflows.",
    impact: "Scaled AI analysis pipelines to more than 10K posts per week.",
    stack: ["Azure ML", "MLflow", "PyTorch", "Hugging Face", "LangChain", "Docker"],
  },
]

export const projects: ProjectCaseStudy[] = [
  {
    title: "Agentic Enterprise Search",
    context: "Jacquemus",
    problem: "Internal knowledge was fragmented across Confluence, Jira, and documentation, slowing answers to operational questions.",
    architecture:
      "FastAPI service with LangGraph orchestration, source connectors, retrieval layer, LLM answer generation, and Langfuse traces.",
    approach:
      "Built a RAG flow with document ingestion, chunking, metadata-aware retrieval, prompt grounding, answer citation, and evaluation loops.",
    implementation:
      "Integrated Confluence and Jira APIs, indexed knowledge for semantic search, and wrapped the workflow as an assistant experience.",
    deployment: "Containerized service with observability hooks for tracing, qualitative review, and retrieval-quality iteration.",
    impact: "Improved retrieval efficiency by about 35%.",
    tags: ["LangGraph", "OpenAI", "Langfuse", "Elasticsearch", "FastAPI"],
  },
  {
    title: "Multimodal Marketing Intelligence",
    context: "Kwore",
    problem: "Marketing teams needed scalable insight extraction from text, images, and high-volume social content.",
    architecture:
      "Batch processing pipeline with multimodal feature extraction, embeddings, clustering, analytics layers, and experiment tracking.",
    approach:
      "Combined NLP, computer vision, embeddings, and clustering to group content patterns and surface reusable marketing signals.",
    implementation:
      "Built processing workflows with PyTorch and Hugging Face models, tracked experiments in MLflow, and prepared analytics outputs.",
    deployment: "Ran reproducible Azure ML workflows with Dockerized components for repeatable processing.",
    impact: "Scaled to more than 10K posts per week.",
    tags: ["PyTorch", "Azure ML", "BigQuery", "LLMs", "MLflow"],
  },
  {
    title: "Forecasting & Retraining Platform",
    context: "MPBS",
    problem: "Forecasting workflows were difficult to update consistently and needed better model accuracy.",
    architecture:
      "BigQuery data layer, Vertex AI model workflow, experiment comparison, automated retraining, and Cloud Build delivery.",
    approach:
      "Compared statistical and ML forecasting methods, optimized model parameters, and evaluated accuracy across planning horizons.",
    implementation:
      "Built feature pipelines, Optuna experiments, Prophet and SARIMAX baselines, Docker images, and retraining automation.",
    deployment: "Used Cloud Build and Vertex AI to support repeatable model updates and production deployment flow.",
    impact: "Improved forecasting accuracy by about 20%.",
    tags: ["Vertex AI", "BigQuery", "Cloud Build", "Optuna", "Docker"],
  },
  {
    title: "ERP Data Platform",
    context: "Satisfy Running",
    problem: "Operational reporting depended on manual movement of ERP data and inconsistent analytics layers.",
    architecture:
      "n8n orchestration moving source data into GCS, transformed into BigQuery datasets and consumed by Power BI.",
    approach:
      "Designed ingestion, transformation, and analytics layers with clear separation between raw, modeled, and reporting data.",
    implementation:
      "Built automated workflows, SQL transformations, quality-aware table structures, and dashboard-ready semantic outputs.",
    deployment: "Cloud-hosted data flow on GCP with repeatable orchestration and reporting consumption.",
    impact: "Reduced manual reporting work and improved operational visibility.",
    tags: ["n8n", "GCS", "BigQuery", "SQL", "Power BI"],
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
