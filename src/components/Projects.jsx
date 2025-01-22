import React from 'react'

function Projects() {
    const projects = [
      {
        title: "Proyecto 1",
        description: "Este es un proyecto increíble que hice usando React y Tailwind CSS.",
        image: "https://via.placeholder.com/400", // Reemplaza con la URL de tu imagen
        codeLink: "https://github.com/tu-usuario/proyecto-1", // Reemplaza con el enlace al código
        demoLink: "https://tusitio.com/proyecto-1", // Reemplaza con el enlace al proyecto desplegado
      },
      {
        title: "Proyecto 2",
        description: "Un proyecto de backend desarrollado con Node.js y MongoDB.",
        image: "https://via.placeholder.com/400", // Reemplaza con la URL de tu imagen
        codeLink: "https://github.com/tu-usuario/proyecto-2", // Reemplaza con el enlace al código
        demoLink: "https://tusitio.com/proyecto-2", // Reemplaza con el enlace al proyecto desplegado
      },
      {
        title: "Proyecto 3",
        description: "Una aplicación móvil desarrollada con React Native.",
        image: "https://via.placeholder.com/400", // Reemplaza con la URL de tu imagen
        codeLink: "https://github.com/tu-usuario/proyecto-3", // Reemplaza con el enlace al código
        demoLink: "https://tusitio.com/proyecto-3", // Reemplaza con el enlace al proyecto desplegado
      },
    ];
  
    return (
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                    >
                      Ver Código
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Projects