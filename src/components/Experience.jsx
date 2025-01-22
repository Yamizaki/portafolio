import React from "react";
const experiences = [
  {
    company: "Capital Infinity Corporation",
    position: "Desarrollador Full Stack",
    time: "2024 - Present",
    projects: [
      {
        title: "Pagina Web Corporativa",
        description:
          "Fui responsable de la creación de la página web corporativa para Capital Infinity, utilizando tecnologías base como HTML, CSS y Vanilla JavaScript. El objetivo principal del proyecto fue reflejar la identidad profesional y moderna de la empresa, así como proporcionar una experiencia de usuario intuitiva y eficiente.",
        links: {
          viewProject: "#",
          docs: "#",
        },
      },
      {
        title: "Sistema de registro para clientes",
        description:
          "Developed a fully functional blog application with user authentication and real-time commenting system using Node.js and MongoDB.",
        links: {
          viewProject: "#",
          docs: "#",
        },
      },
    ],
  },
  {
    company: "Company B",
    position: "Backend Developer",
    time: "June 2018 - December 2019",
    projects: [
      {
        title: "Project 1: API for Mobile App",
        description:
          "Built RESTful APIs for a mobile application using Express.js, MongoDB, and JWT authentication.",
        links: {
          viewProject: "#",
          docs: "#",
        },
      },
    ],
  },
  {
    company: "Company C",
    position: "Software Engineer Intern",
    time: "June 2017 - May 2018",
    projects: [
      {
        title: "Project 1: Data Analysis Tool",
        description:
          "Assisted in the development of a data analysis tool that helped analyze large datasets using Python and Pandas.",
        links: {
          viewProject: "#",
          docs: "#",
        },
      },
    ],
  },
];
function Experience() {
  return (
    <div className="bg-gradient-to-b from-slate-600 via-slate-200 to-gray-900 p-10 text-black">
      <h1 className="text-4xl font-bold text-center mb-6">Experience</h1>

      {/* Mapear las experiencias */}
      {experiences.map((experience, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold">{experience.company}</h2>
          <p className="text-lg text-gray-700">
            Position: {experience.position}
          </p>
          <p className="text-sm text-gray-500">Time: {experience.time}</p>

          <h3 className="text-xl font-semibold mt-4">Projects:</h3>
          <ul className="list-none space-y-4 mt-2">
            {experience.projects.map((project, projectIndex) => (
              <li
                key={projectIndex}
                className="border-l-4 border-indigo-600 pl-4"
              >
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-2">
                  <a
                    href={project.links.viewProject}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View Project
                  </a>{" "}
                  |{" "}
                  <a
                    href={project.links.docs}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Docs
                  </a>
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
