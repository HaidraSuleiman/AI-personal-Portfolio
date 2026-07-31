import './app.css';
import { projects } from './data/projects';
import React from "react";

function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-content">
        <p className="hero-kicker">AI Engineer & Software Engineer</p>
        <h2 className="hero-title">
          Building reliable AI agents and developer-friendly systems.
        </h2>
        <p className="hero-subtitle">
          I design and implement AI agents, RAG pipelines, and modern web apps,
          focusing on robustness, observability, and great developer experience.
        </p>

        <div className="hero-actions">
          <a
            href="/Haidra-Suleiman-CV.pdf"
            download="Haidra-Suleiman-CV.pdf"
            className="btn btn-cta"
          >
            <svg
              className="btn-cta-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a
            href="https://github.com/HaidraSuleiman?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/haidra-suleiman-960677212"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit LinkedIn
          </a>
          <a href="#projects" className="btn btn-outline">
            Explore AI projects
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>About</h2>
        <p>
          I'm Haidra Suleiman, a software engineer specialising in AI
          engineering and agentic systems.
        </p>
      </div>
      <div className="section-body">
        <p>
          I build AI systems end to end — from LLM-powered backends and
          retrieval pipelines to the interfaces people use them through — and I
          ship them to production. Recent work includes a multilingual invoice
          review platform that combines document intelligence with structured
          LLM extraction and deterministic finance checks, deployed on Azure,
          and a source-grounded research assistant that uses hybrid vector and
          full-text retrieval to give analysts citable answers over large
          document collections.
        </p>
        <p>
          Beyond shipped products, I actively explore the agentic frontier:
          corrective and self-adaptive RAG strategies, reflection-based agents,
          LangGraph workflows, and MCP integrations. What ties it all together
          is an engineering mindset — clean APIs around LLMs, human-in-the-loop
          workflows where they matter, and systems that teams can deploy,
          observe, and iterate on with confidence.
        </p>
      </div>
    </section>
  );
}

const skillCards = [
  {
    title: 'AI & LLM Engineering',
    description:
      'Designing agentic systems and RAG pipelines end to end — from corrective and self-adaptive retrieval strategies to ReAct and Reflexion agents, hallucination detection, and human-in-the-loop review workflows.',
    stack:
      'LangChain · LangGraph · OpenAI & Azure OpenAI · Azure Document Intelligence · Prompt engineering · Structured outputs · Embeddings & hybrid retrieval · MCP · LLM evaluation',
  },
  {
    title: 'Backend & API Engineering',
    description:
      'Building clean, production-oriented Python backends around LLM and data services, with typed models, versioned schemas, and REST APIs designed for real product workflows.',
    stack:
      'Python · FastAPI · Pydantic · SQLAlchemy · Alembic · Async Python · REST API design',
  },
  {
    title: 'Frontend & React Applications',
    description:
      'Shipping the interfaces AI products are used through — responsive React single-page apps with typed components, from review dashboards to chat experiences.',
    stack:
      'React · TypeScript · JavaScript · Vite · Next.js · Tailwind CSS · Responsive design',
  },
  {
    title: 'Data, Cloud & Deployment',
    description:
      'Owning the path to production: vector and relational storage, ingestion pipelines, containerised deployments, and cloud hosting with persistent storage and auth.',
    stack:
      'PostgreSQL & pgvector · Supabase · SQLite · ChromaDB · Pinecone · Docker · Azure Container Apps · Railway · Git & GitHub',
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          The full stack I work with — from LLM orchestration and retrieval to
          backend services, databases, and cloud deployment.
        </p>
      </div>
      <div className="skills-grid">
        {skillCards.map((card) => (
          <div key={card.title} className="skills-card">
            <h3>{card.title}</h3>
            <p className="skills-card-description">{card.description}</p>
            <p className="skills-card-stack">{card.stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2>AI Projects</h2>
        <p>
          Selected AI and agentic systems projects, with source code available on
          GitHub.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p className="project-role">{project.role}</p>
            <p className="project-summary">{project.summary}</p>
            <div className="project-meta">
              <span className="project-tech">
                {project.tech.join(' · ')}
              </span>
            </div>
            <div className="project-links">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  View live demo
                </a>
              )}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <p>
          Roles and projects that show my trajectory towards AI engineering
          responsibilities.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h3>IT Engineer – Data Science & AI</h3>
          <h4>Welbond Armatures</h4>
          <p className="timeline-period">2021 – Present</p>
          <ul className="timeline-list">
            <li>
              Develop AI and data science applications using Python, machine
              learning, and data engineering principles.
            </li>
            <li>
              Build data pipelines, retrieval systems, and automated workflows
              for data processing and analysis.
            </li>
            <li>
              Apply statistical methods, data visualisation, and predictive
              modelling to solve business problems.
            </li>
            <li>
              Develop and support web-based solutions that improve workflows,
              automation, and system accessibility.
            </li>
            <li>
              Deliver end-to-end technical solutions integrating data
              processing, analytics, and AI technologies, while supporting
              scalable infrastructure across multiple domains.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>AI Engineering Projects (Personal & Open Source)</h3>
          <p className="timeline-period">Ongoing</p>
          <p>
            Designing, shipping, and maintaining production-grade AI systems:
            document intelligence platforms, source-grounded research
            assistants, corrective and adaptive RAG architectures, and
            LangGraph-based agent workflows — deployed on Azure and Railway.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Interested in AI engineering roles, agent systems, or LLM tooling.</p>
      </div>
      <div className="contact-grid">
        <div>
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              Email: <a href="mailto:h.souleman@icloud.com">h.souleman@icloud.com</a>
            </li>
            <li>
              Phone: +447591215613
            </li>
            <li>
              GitHub: <a
                href="https://github.com/HaidraSuleiman"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HaidraSuleiman
              </a>
            </li>
            
          </ul>
        </div>
        <div>
          <h3>What I'm looking for</h3>
          <p>
            AI Engineer or Software Engineer roles where I can design and ship
            agentic systems, integrate LLMs into products, and collaborate closely
            with product and research teams.
          </p>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <h1>Haidra Suleiman</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Haidra Suleiman. AI Engineering Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;
