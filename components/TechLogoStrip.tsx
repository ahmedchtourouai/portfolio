const techLogos = [
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/2dd4bf" },
  { name: "LangGraph", mark: "LG" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/2dd4bf" },
  { name: "Google Cloud", icon: "/logos/google_cloud_logo.png" },
  { name: "Azure", icon: "/logos/Microsoft_Azure_logo.png" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2dd4bf" },
  { name: "BigQuery", icon: "https://cdn.simpleicons.org/googlebigquery/2dd4bf" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/2dd4bf" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/2dd4bf" },
  { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/2dd4bf" },
]

export default function TechLogoStrip() {
  return (
    <div className="tech-logo-panel">
      <p className="tech-logo-label">Core stack</p>
      <div className="tech-logo-strip" aria-label="Core technologies">
        {techLogos.map((tech) => (
          <div key={tech.name} className="tech-logo-item">
            <span className="tech-logo-mark" aria-hidden="true">
              {tech.icon ? (
                <img src={tech.icon} alt="" className="h-5 w-5 object-contain" />
              ) : (
                tech.mark
              )}
            </span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
