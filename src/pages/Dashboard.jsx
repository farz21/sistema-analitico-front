import React from "react";
import { useState, useEffect } from "react";
import { empleadosMock } from "../data/mockData";
const Dashboard = () => {
  // Estados para guardar los datos y controlar la pantalla de carga
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);

  // El useEffect se ejecuta una sola vez al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setEmpleados(empleadosMock);
      setCargando(false);
    }, 1500); // 1.5 segundos de retraso simulado

    return () => clearTimeout(timer); // limpia el timer si el componente se desmonta antes de que termine el tiempo
  }, []);

  // Función auxiliar para pintar la tarjeta según el semáforo
  const getColorSemaforo = (estado) => {
    if (estado === "Verde")
      return "border-green-500 bg-green-50 text-green-700";
    if (estado === "Amarillo")
      return "border-yellow-400 bg-yellow-50 text-yellow-700";
    if (estado === "Rojo") return "border-red-500 bg-red-50 text-red-700";
    return "border-slate-300 bg-slate-50";
  };

  if (cargando) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-slate-600 font-medium animate-pulse">
          Obteniendo métricas de rendimiento...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Panel de Control S.A.P.E.
        </h2>
        <p className="text-slate-500">
          Semáforo de rendimiento del personal activo.
        </p>
      </div>

      {/* Grilla dinámica que mapea a los empleados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {empleados.map((emp) => (
          <div
            key={emp.id}
            className={`p-6 rounded-xl shadow-sm border-l-4 ${getColorSemaforo(emp.estado).split(" ")[0]} bg-white flex flex-col justify-between transition-transform hover:-translate-y-1`}
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800">{emp.nombre}</h3>
              <p className="text-sm text-slate-500 mb-4">{emp.area}</p>
            </div>

            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold w-fit ${getColorSemaforo(emp.estado)}`}
            >
              Estado: {emp.estado}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
