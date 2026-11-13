import { useState } from 'react';
import FilterBar from './FilterBar';
import ProjectList from './ProjectList';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Accessible personal portfolio site, audited with Lighthouse.',
    techStack: ['HTML', 'CSS'],
    github: 'https://github.com/secbest/portfolio',
    demo: 'https://secbest.github.io/portfolio/',
  },
  {
    id: 2,
    title: 'Book Search',
    description: 'Search books through the Open Library API with covers, caching and a fallback for slow connections.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/secbest/webpro-book-search',
    demo: 'https://secbest.github.io/webpro-book-search/',
  },
  {
    id: 3,
    title: 'Week 9 Accessibility Pages',
    description: 'Accessibility and performance exercises: skip links, semantic HTML, custom 404.',
    techStack: ['HTML', 'CSS'],
    github: 'https://github.com/secbest/webpro-w9',
    demo: 'https://secbest.github.io/webpro-w9/',
  },
  {
    id: 4,
    title: 'Portfolio Gallery',
    description: 'This React app: ProjectCard, ProjectList and a technology FilterBar.',
    techStack: ['React', 'CSS'],
    github: 'https://github.com/secbest/portfolio-gallery',
    demo: 'https://secbest.github.io/portfolio-gallery/',
  },
];

const filters = ['All', 'React', 'JavaScript', 'HTML', 'CSS'];
function App() {
  const [active, setActive] = useState('All');

  const visible =
    active === 'All'
      ? projects
      : projects.filter((p) => p.techStack.includes(active));

  return (
    <main className="app">
      <h1>Portfolio Gallery</h1>
      <FilterBar options={filters} active={active} onSelect={setActive} />
      <p className="count">
        Showing {visible.length} of {projects.length} projects
      </p>
      <ProjectList projects={visible} />
    </main>
  );
}

export default App;

