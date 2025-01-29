import React from "react";
import userPhoto from "../assets/user.jpg";
function About() {
  return (
<div className="flex flex-wrap jus items-center bg-gradient-to-b from-black via-slate-800 to-slate-600 lg:p-20 p-10 text-white">
  {/* Sección de Texto */}
  <div className="lg:flex-1 lg:mx-20 mx-5">
    <h1 className="title__color">Sobre mí</h1>
    <p className="text-lg leading-relaxed mb-8">
      Soy <strong>Yamizaki Arakaki Chávez</strong>, un profesional comprometido con la
      excelencia y la innovación tecnológica. Mi enfoque no solo está en el
      código, sino en las personas. Considero que la empatía, la
      comunicación efectiva y el trabajo en equipo son pilares fundamentales
      para crear soluciones tecnológicas que realmente impacten.
    </p>
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors duration-300">
      <a href="/path-to-cv.pdf" download>
        Descargar CV
      </a>
    </button>
  </div>

  {/* Sección de Imagen */}
  <div className="flex-1 mt-10 lg:mt-0">
    <img
      src={userPhoto}
      alt="Yamizaki Arakaki Chávez"
      className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
    />
  </div>
</div>
  );
}

export default About;
