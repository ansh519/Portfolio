// src/components/ProjectCard.jsx
function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;