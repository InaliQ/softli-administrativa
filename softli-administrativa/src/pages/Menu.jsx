import { useState } from "react";
import Usuario from "../modules/usuarios/Usuarios";

function Menu() {
  // Estado para controlar el menú lateral
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el menú lateral
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Barra de navegación superior */}
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              <img
                src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
                alt="Logo"
                className="w-28 h-18 mr-2"
              />
              <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <i className="fas fa-bars text-gray-500 text-lg"></i>
              </button>
            </div>
          </div>
          <div className="space-x-5">
            <button>
              <i className="fas fa-bell text-gray-500 text-lg"></i>
            </button>
            <button>
              <i className="fa-regular fa-user"></i>
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 flex">
          <div
            className={`p-2 bg-white w-60 flex flex-col ${menuOpen ? "flex" : "hidden"} md:flex`}
          >
            <nav>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#"
              >
                <i className="fas fa-home mr-2"></i>Inicio
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#"
              >
                <i className="fas fa-file-alt mr-2"></i>Autorizaciones
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#"
              >
                <i className="fas fa-users mr-2"></i>Usuarios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#"
              >
                <i className="fas fa-store mr-2"></i>Comercios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#"
              >
                <i className="fas fa-exchange-alt mr-2"></i>Transacciones
              </a>
            </nav>
            <a
              className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto"
              href="#"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </a>
          </div>

          {/* Área de contenido principal */}
          <div className="flex-1 p-4">
            <div className="relative max-w-md w-full">
              <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                type="search"
                placeholder="Buscar..."
              />
            </div>

            {/* Tablas de Autorizaciones Pendientes */}
            <Usuario></Usuario>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
