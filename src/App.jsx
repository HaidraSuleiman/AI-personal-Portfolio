import './app.css';
import { projects } from './data/projects';
import React from "react";

function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-content">
        <p className="hero-kicker">AI Engineer & Software Engineer</p>
        <h1 className="hero-title">
          Building reliable AI agents and developer-friendly systems.
        </h1>
        <p className="hero-subtitle">
          I design and implement AI agents, RAG pipelines, and modern web apps,
          focusing on robustness, observability, and great developer experience.
        </p>

        <div className="hero-actions">
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
          I'm Haidra Suleiman, a software engineer based in Cardiff, Wales,
          specialising in AI engineering and agentic systems.
        </p>
      </div>
      <div className="section-body">
        <p>
          My work spans from building hotel information agents and documentation
          helpers, to experimenting with corrective RAG strategies and
          reflection-based agents. I care about translating cutting-edge research
          into practical systems that teams can deploy, monitor, and iterate on.
        </p>
        <p>
          I enjoy connecting strong engineering fundamentals with AI workflows:
          clean APIs around LLMs, reproducible pipelines, and tooling that lets
          teams ship AI features confidently.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          A blend of AI engineering, MLOps, and full-stack development skills
          tailored for modern AI-powered products.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>AI Engineering</h3>
          <ul>
            <li>LLM prompting & agent design</li>
            <li>Retrieval-augmented generation (RAG)</li>
            <li>LangGraph & agent frameworks</li>
            <li>Evaluation & debugging of LLM systems</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>MLOps & Data</h3>
          <ul>
            <li>Python data pipelines</li>
            <li>Vector search & embeddings</li>
            <li>Experiment tracking & logging</li>
            <li>API design around ML services</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Software Engineering</h3>
          <ul>
            <li>React & modern front-end</li>
            <li>TypeScript & JavaScript</li>
            <li>RESTful APIs and integrations</li>
            <li>Testing and code quality</li>
          </ul>
        </div>
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
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View repository
            </a>
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
          <h3>AI Engineering Projects (Personal & Open Source)</h3>
          <p className="timeline-period">Ongoing</p>
          <p>
            Building and maintaining AI agents and RAG systems, from hotel
            information assistants to documentation helpers, reflexion agents and
            LangGraph-based workflows.
          </p>
        </div>
        <div className="timeline-item">
          <h3>IT Engineer</h3>
          <h4>Welbond Armatures</h4>
          <p className="timeline-period">2023 – Present</p>
          <p>
          Full-Time Position: Provided first- and second-line IT support across hardware, software, and networking environments
Diagnosed and resolved technical issues to minimise downtime and maintain business continuity
Portfolio Development: Continuously update my portfolio with professional and personal projects.
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
            <li>Location: Cardiff, Wales, United Kingdom</li>
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
          <span>Haidra Suleiman</span>
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
