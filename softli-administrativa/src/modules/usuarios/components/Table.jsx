import  { useState, useEffect } from 'react';

const Table = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para el valor de búsqueda

  useEffect(() => {
    // Simulación de datos obtenidos de una API o base de datos
    const datosUsuarios = [
      {
        id_usuario: 1,
        nombre_usuario: "juanperez",
        nombre_completo: "Juan Perez",
        email: "juan.perez@example.com",
        telefono: "1234567890",
        rol: "Admin",
        fecha_creacion: "2021-10-01",
        password_hash: "123456",
      },
      // Más usuarios...
    ];
    setUsuarios(datosUsuarios);
  }, []);

  // Función para manejar la entrada de búsqueda
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value); // Actualiza el valor de búsqueda
  };

  // Filtrar los usuarios en función del valor de búsqueda
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre_completo.toLowerCase().includes(busqueda.toLowerCase()) ||
    usuario.rol.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded-md mt-4">
      <h2 className="text-gray-500 text-lg font-semibold pb-4">
        Autorizaciones Pendientes
      </h2>
      <div className="relative max-w-md w-full mb-4">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
          type="search"
          placeholder="Buscar..."
          value={busqueda} // Vínculo con el estado
          onChange={manejarBusqueda} // Maneja la búsqueda
        />
      </div>
      <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="text-sm leading-normal">
            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
              Foto
            </th>
            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
              Nombre Completo
            </th>
            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
              Rol
            </th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id_usuario} className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">
                  <img
                    src={usuario.foto}
                    alt={`Foto de ${usuario.nombre_completo}`}
                    className="rounded-full h-10 w-10"
                  />
                </td>
                <td className="py-2 px-4 border-b border-grey-light">
                  {usuario.nombre_completo}
                </td>
                <td className="py-2 px-4 border-b border-grey-light">
                  {usuario.rol}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-2 px-4 text-center">
                No se encontraron resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
