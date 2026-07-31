// src/data/projects.js

export const projects = [
    {
      id: "invoice-review",
      name: "Invoice Review",
      repoUrl: "https://github.com/HaidraSuleiman/invoice-review",
      demoUrl:
        "https://ca-invoice-review.redforest-407253c0.westeurope.azurecontainerapps.io/",
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Azure AI",
        "OpenAI",
        "SQLAlchemy",
        "SQLite",
        "Docker",
      ],
      role: "Full-Stack AI Engineer",
      summary:
        "An end-to-end, multilingual invoice and receipt review platform built for a fictional EU facilities company. It combines Azure Document Intelligence with structured Azure OpenAI extraction, then deterministically merges results and applies offline VAT, totals, and finance-policy checks before suggesting a GL account. The React review workflow supports human approval, rejection, correction-email drafting, and persisted history, while the FastAPI backend, SQLite storage, Docker image, and Azure Container Apps deployment demonstrate a complete production-oriented AI system.",
    },
    {
      id: "document-copilot",
      name: "Document Copilot",
      repoUrl: "https://github.com/HaidraSuleiman/document-copilot-main",
      demoUrl: "https://frontend-production-035a2.up.railway.app/",
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "OpenAI",
        "Supabase",
        "PostgreSQL",
        "pgvector",
        "SQLAlchemy",
        "Railway",
      ],
      role: "Full-Stack AI Engineer",
      summary:
        "A full-stack, source-grounded AI research assistant for analysts working with large collections of financial documents such as 10-K and 10-Q filings. It uses OpenAI models and embeddings with hybrid retrieval across Supabase pgvector and PostgreSQL full-text search to produce citable answers, while Supabase Auth and persistent document, chat, and chunk storage support a complete multi-user workflow. The system pairs a FastAPI and SQLAlchemy backend with an Alembic-managed database, a React and TypeScript interface, and Railway hosting.",
    },
    {
      id: "corrective-self-adaptive-rag",
      name: "Corrective-Self-Adaptive-RAG",
      repoUrl: "https://github.com/HaidraSuleiman/Corrective-Self-Adaptive-RAG",
      tech: ["Python", "RAG", "LLMs"],
      role: "AI Engineer",
      summary:
        "Experimentation playground for retrieval-augmented generation with corrective, self-adaptive strategies.",
    },
    {
      id: "reflexion-agent",
      name: "reflexion-agent",
      repoUrl: "https://github.com/HaidraSuleiman/reflexion-agent",
      tech: ["Python", "Agents"],
      role: "AI Engineer",
      summary:
        "An AI agent that iterates and reflects over its own outputs.",
    },
    {
      id: "hotel-information-agent",
      name: "Hotel-Information-Agent",
      repoUrl: "https://github.com/HaidraSuleiman/Hotel-Information-Agent",
      tech: ["Python", "Agents"],
      role: "AI Engineer",
      summary:
        "An AI-powered agent that answers guest questions for a hotel.",
    },
    {
      id: "simple-react-agent-langgraph",
      name: "Simple_reAct_Agent-With-LangGraph",
      repoUrl:
        "https://github.com/HaidraSuleiman/Simple_reAct_Agent-With-LangGraph",
      tech: ["Python", "LangGraph", "Agents"],
      role: "AI Engineer",
      summary:
        "Prototype of a ReAct-style agent built on LangGraph.",
    },
    {
      id: "documentations-helper",
      name: "documentations-helper",
      repoUrl: "https://github.com/HaidraSuleiman/documentations-helper",
      tech: ["Python", "LLMs"],
      role: "AI Engineer",
      summary:
        "Tooling to help navigate and query documentation using large language models.",
    },
    {
      id: "mcp-adapters-implementation",
      name: "mcp-adapters-implementation",
      repoUrl: "https://github.com/HaidraSuleiman/mcp-adapters-implementation",
      tech: ["Python"],
      role: "AI Engineer",
      summary:
        "Exploration of MCP adapters and integration patterns.",
    },
  ];