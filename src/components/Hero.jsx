import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import django from "../assets/svg/django.svg";
import docker from "../assets/svg/docker.svg";
import flask from "../assets/svg/flask.svg";
import git from "../assets/svg/git.svg";
import mongodb from "../assets/svg/mongodb.svg";
import postgresql from "../assets/svg/postgresql.svg";
import react from "../assets/svg/react.svg";
import python from "../assets/svg/python.svg";
import javascript from "../assets/svg/javascript.svg";
import database from "../assets/svg/database.svg";
import security from "../assets/svg/security.svg";
function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[5%] px-4 lg:px-20 ">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          {/* Título Principal */}
          <div className="text-6xl lg:text-8xl font-bold flex flex-col space-y-2">
            <h1 className="text-white">MAKE</h1>
            <h1 className="text-indigo-600">YOUR</h1>
            <h1 className="text-white">DREAM</h1>
          </div>

          {/* Subtítulo o Descripción */}
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Transform your ideas into reality with cutting-edge technology and
            innovative solutions.
          </p>

          {/* Enlaces de Contacto */}
          <ul className="flex justify-center lg:justify-start gap-6 mt-6">
            <li>
              <a
                href="https://www.linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
              >
                <FaLinkedin className="w-6 h-6" /> Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
              >
                <FaGithub className="w-6 h-6" /> Github
              </a>
            </li>
            <li>
              <a
                href="mailto:tu-email@example.com"
                className="text-white hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
              >
                <MdEmail className="w-6 h-6" /> Mail
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="pb-6 lg:w-1/2 backdrop-blur-sm bg-slate-300 bg-opacity-10 p-8 lg:ml-12 mt-6 lg:mt-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Experience Section */}
          <div className="mb-8">
            <p className="font-bold text-4xl  mb-4 text-indigo-600">Experiencia</p>
            <p className="text-lg leading-relaxed text-gray-300">
            Soy un desarrollador con más de 2 años de experiencia en desarrollo web, 
            creación de scripts y automatización. He trabajado con diversas tecnologías entre las más conocidas: Django y React.
            Mi experiencia abarca desde la creación de interfaces de usuario atractivas hasta la construcción de arquitecturas 
            backend eficientes, pasando por la automatización de procesos y el despliegue en la nube.
            </p>
          </div>

          {/* Specialty Section */}
          <div className="mb-8">
            <p className="font-bold text-4xl  mb-4 text-indigo-600">Especialidades</p>
            <div className="mt-6 text-white flex  flex-wrap justify-center lg:justify-normal gap-4 container__technologies">
              <img src={python} alt="Python" />
              <img src={javascript} alt="JavaScript" />
              <img src={database} alt="Database" />
              <img src={security} alt="Security" />
              <img src={git} alt="Git" />

            </div>
          </div>

          {/* Skills Section */}
          <div>
            <p className="font-bold text-4xl  mb-4 text-indigo-600">Skills</p>
            <div className="mt-6 text-white flex  flex-wrap justify-center lg:justify-normal gap-4 container__technologies">
              <img src={django} alt="" />
              <img src={docker} alt="" />
              <img src={flask} alt="" />
              <img src={mongodb} alt="" />
              <img src={postgresql} alt="" />
              <img src={react} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
