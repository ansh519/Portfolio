// Corrected import
import ProjectsCard from "../components/Projectscard";  
function Projects() {
  const projects = [
    {
      title: 'Project Title 1',
      description:
        'A brief description of your project. Highlight the technologies used and the problem it solves.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project Title 2',
      description:
        'A brief description of your project. Highlight the technologies used and the problem it solves.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project Title 3',
      description:
        'A brief description of your project. Highlight the technologies used and the problem it solves.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-gray-100 pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;