import React, { useState } from "react";

function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center  p-12">
        <h1 className="font-bold text-4xl">DESIGNER</h1>

        {/* Menú de escritorio, siempre visible */}
        <ul className="gap-20 hidden lg:flex">
        <li className="border-b-2 border-indigo-500">
          <a href="">ACERCA DE</a>
        </li>
        <li className="border-b-2 border-indigo-500">
          <a href="">EXPERIENCIA</a>
        </li>
        <li className="border-b-2 border-indigo-500">
          <a href="">PROYECTOS</a>
        </li>
        <li className="border-b-2 border-indigo-500">
          <a href="">CONTACTO</a>
        </li>
        </ul>

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </nav>

      {/* Menú desplegable para dispositivos móviles */}
      <ul
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-indigo-600 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 p-4 flex flex-col justify-center items-center space-y-6`}
      >
        <li className="border-b-2 border-black">
          <a href="">ACERCA DE</a>
        </li>
        <li className="border-b-2 border-black">
          <a href="">EXPERIENCIA</a>
        </li>
        <li className="border-b-2 border-black">
          <a href="">PROYECTOS</a>
        </li>
        <li className="border-b-2 border-black">
          <a href="">CONTACTO</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
