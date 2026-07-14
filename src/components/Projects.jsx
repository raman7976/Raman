import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle kicker="// build log" title="Projects" />
      <FeaturedProject />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
