
const Projects = () => {
  const projects = [
    { title: 'Blood Bank System', link: 'https://github.com/Chaithanyaina/BloodBankSystem' },
    { title: 'Vehicle Service Hub', link: 'https://github.com/Chaithanyaina/VehicleServiceHub' },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 underline mt-2 block">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
