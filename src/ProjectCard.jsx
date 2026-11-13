function ProjectCard({ title, description, techStack, github, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {techStack.map((t) => (
          <li key={t} className="tech-tag">{t}</li>
        ))}
      </ul>
      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noreferrer">Live demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;
