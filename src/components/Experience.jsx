import React from "react";
const experiences = [
  {
    company: "Capital Infinity Corporation",
    position: "Desarrollador Full Stack",
    time: "2024 - Presente",
    projects: [
      {
        title: "Página Web Corporativa",
        description:
          "Lideré el desarrollo de la página web corporativa para Capital Infinity, utilizando tecnologías fundamentales como HTML, CSS y JavaScript Vanilla. El proyecto tuvo como objetivo principal plasmar la identidad profesional y moderna de la empresa, garantizando una experiencia de usuario intuitiva y eficiente. Mi enfoque se centró en la creación de una interfaz limpia y responsive, optimizada para una navegación fluida y accesible en todos los dispositivos.",
        links: {
          viewProject: "https://capitalinfinity.com/",
          docs: "",
        },
      },
      {
        title: "Sistema de registro para clientes",
        description:
          "Desarrollé un sistema de registro automatizado para eventos, donde los clientes podían registrarse y recibir un código QR único que les permitía acceder al evento. Además, el sistema enviaba correos electrónicos automatizados a cada cliente con su código QR y detalles del evento. También implementé un módulo de análisis de métricas para obtener datos clave sobre los asistentes, como la cantidad de registros y la tasa de asistencia, lo que permitió una mejor toma de decisiones y seguimiento del evento.",
        links: {
          viewProject: "https://experiencia-infinity.onrender.com/",
          docs: "",
        },
      },
      {
        title: "Mantenimiento de página web",
        description:
          "Realicé el mantenimiento de la página web corporativa de SeInfinity, un proyecto basado en WordPress. Para ello, implementé modificaciones en componentes y funciones que no estaban disponibles por defecto en los plugins, asegurando un mejor rendimiento y personalización del sitio.",
        links: {
          viewProject: "https://seinfinity.org/",
          docs: "",
        },
      },
    ],
  },
  {
    company: "Natcodee",
    position: "Desarrollador RPA",
    time: "Junio 2024 - En pausa",
    projects: [
      {
        title: "RPA con Python",
        description:
          "En la primera etapa del proyecto, automatizamos un proceso repetitivo dentro de la empresa utilizando Python y Selenium, lo que permitió aumentar la eficiencia y reducir significativamente los tiempos de trabajo. Para la segunda fase, se planea integrar el script desarrollado con una API que permitirá su ejecución remota y el reenvío de datos, optimizando aún más el flujo de trabajo y facilitando la escalabilidad del sistema.",
        links: {
          viewProject: "https://www.linkedin.com/posts/yamizaki-arakaki-a24580267_python-automation-selenium-activity-7199094399895502850-Nj52?utm_source=share&utm_medium=member_desktop",
          docs: "",
        },
      },
    ],
  },
  {
    company: "Artitek",
    position: "Python Developer",
    time: "Julio 2024 - Septiembre 2024 ",
    projects: [
      {
        title: "Mejorar y optimizacion CI/CD",
        description:
          "En este proyecto, participé en la optimización de procesos de CI/CD, mejorando la creación de imágenes Docker para reducir el tiempo de construcción y el tamaño de las imágenes, simplificando archivos docker-compose para agilizar el despliegue de contenedores, y reestructurando repositorios en GitHub para mejorar la mantenibilidad y escalabilidad del código. Además, optimicé GitHub Actions, logrando que todos los tests se ejecuten sin observaciones y reduciendo el tiempo de ejecución del pipeline. Estas mejoras permitieron un flujo de trabajo más eficiente, reduciendo los tiempos de implementación y aumentando la confiabilidad del proceso de integración continua.",
        links: {
          viewProject: "",
          docs: "",
        },
      },
      {
        title: "Desarrollo y despliegue de página web",
        description:
          "Desarrollé una landing page completamente funcional utilizando HTML, CSS y JavaScript, asegurando un diseño responsive y una experiencia de usuario intuitiva. La página fue desplegada en Firebase, lo que permitió una implementación rápida y confiable, además de facilitar la escalabilidad y el manejo de tráfico.",
        links: {
          viewProject: "https://peaceful-unicorn-293d15.netlify.app/",
          docs: "https://github.com/Yamizaki/aritek-datathon",
        },
      },
    ],
  },
];
function Experience() {
  return (
    <div className="bg-gradient-to-b from-slate-600 via-slate-200 to-gray-600 p-10 text-black">
      <h1 className="title__color">Experiencia</h1>

      {/* Mapear las experiencias */}
      {experiences.map((experience, index) => (
        <div key={index} className="backdrop-blur-md bg-slate-300 bg-opacity-30 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold">{experience.company}</h2>
          <p className="text-lg ">Cargo: {experience.position}</p>
          <p className="text-sm ">Tiempo: {experience.time}</p>

          <h3 className="text-xl font-semibold mt-4">Proyectos:</h3>
          <ul className="list-none space-y-4 mt-2">
            {experience.projects.map((project, projectIndex) => (
              <li
                key={projectIndex}
                className="border-l-4 border-indigo-400 pl-4"
              >
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="">{project.description}</p>
                <div className="mt-2">
                  {project.links.viewProject &&
                    project.links.viewProject.trim() !== "" && ( // Verifica si viewProject no es nulo ni una cadena vacía
                      <>
                        <a
                          href={project.links.viewProject}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                          target="_blank"
                        >
                          Ver proyecto
                        </a>{" "}
                        {" "}
                        {/* Renderiza el separador solo si hay un enlace de docs */}
                      </>
                    )}
                  {/* {project.links.docs &&
                    project.links.docs.trim() !== "" && ( // Verifica si docs no es nulo ni una cadena vacía
                      <a
                        href={project.links.docs}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        Docs
                      </a>
                    )} */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
