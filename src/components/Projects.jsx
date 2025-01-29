import React from "react";
import proyectoReact from "../assets/proyecto-react.jpg";
import lalenas from "../assets/lalenas.png";
import djangopsql from "../assets/proyecto-dj-psql.jpg";
function Projects() {
  const projects = [
    {
      title: "Todo app",
      description:
        "Este es un proyecto para gestionar tareas. Creado con Django y PostgreSQL.",
      image: djangopsql, // Reemplaza con la URL de tu imagen
      codeLink: "https://github.com/Yamizaki/CRUD-POSTGRE-DJANGO", // Reemplaza con el enlace al código
      demoLink: "https://crud-postgre-django.onrender.com", // Reemplaza con el enlace al proyecto desplegado
    },
    {
      title: "Las Leñas",
      description:
        "Desarrollo de un sitio web donde vender entradas de eventos (Stand by). Realizado en React con Tailwind",
      image: lalenas, // Reemplaza con la URL de tu imagen
      codeLink: "#", // Reemplaza con el enlace al código
      demoLink: "https://comforting-lamington-6ef750.netlify.app/", // Reemplaza con el enlace al proyecto desplegado
    },
    {
      title: "Registro de pacientes",
      description:
        "Registro de pacientes para una veterinaria. CRUD realizado con React y Tailwind",
      image: proyectoReact, // Reemplaza con la URL de tu imagen
      codeLink:
        "https://github.com/Yamizaki/Sistema-de-Registro-de-Pacientes-REACT", // Reemplaza con el enlace al código
      demoLink: "https://legendary-hamster-48f8c1.netlify.app/", // Reemplaza con el enlace al proyecto desplegado
    },
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="title__color">
          Mis Proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover p-3  bg-slate-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
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

export default Projects;
