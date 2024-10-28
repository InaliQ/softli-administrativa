import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Chart from 'chart.js/auto'; // Usa chart.js/auto para registrar automáticamente los controladores necesarios
import { BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Registrar los controladores y escalas necesarios manualmente
Chart.register(BarController, CategoryScale, LinearScale, BarElement);

const initCharts = () => {
    const ctx = document.getElementById('usersChart').getContext('2d');

    // Si ya existe un gráfico en este contexto, destrúyelo antes de crear uno nuevo
    if (Chart.getChart('usersChart')) {
        Chart.getChart('usersChart').destroy();
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

const MenuPrueba = () => {
    React.useEffect(() => {
        initCharts();
    }, []);

    return (
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
                        <button id="menuBtn">
                            <i className="fas fa-bars text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>
                <div className="space-x-5">
                    <button>
                        <i className="fas fa-bell text-gray-500 text-lg"></i>
                    </button>
                    <button>
                        <i className="fas fa-user text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex-1 flex">
                {/* Barra lateral de navegación */}
                <div className="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
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

                    {/* Gráficas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                            <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                                <canvas id="usersChart"></canvas>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                            <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                                <canvas id="commercesChart"></canvas>
                            </div>
                        </div>
                    </div>

                    {/* Tablas de Autorizaciones Pendientes */}
                    <div className="bg-white p-4 rounded-md mt-4">
                        <h2 className="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                        <table className="w-full table-auto text-sm">
                            <thead>
                                <tr className="text-sm leading-normal">
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Filas de ejemplo */}
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="Foto Perfil"
                                            className="rounded-full h-10 w-10"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                    <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                                </tr>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-2 px-4 border-b border-grey-light">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="Foto Perfil"
                                            className="rounded-full h-10 w-10"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b border-grey-light">María Gómez</td>
                                    <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPrueba;
