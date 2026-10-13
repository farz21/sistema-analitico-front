import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [datosEmpleado, setDatosEmpleado] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    area: "",
    puesto: "",
    fechaIngreso: "",
    modalidad: "",
    periodoPrueba: false,
  });

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;

    setDatosEmpleado({
      ...datosEmpleado,
      [name]: type === "checkbox" ? checked : value,
    });

    setMensaje("");
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    setMensaje(
      `La ficha de ${datosEmpleado.nombre} ${datosEmpleado.apellido} está lista para registrar.`
    );
  };

  const estiloCampo =
    "w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";

  const estiloLabel =
    "block text-sm font-medium text-slate-700 mb-1";

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <Link
            to="/login"
            className="text-lg font-bold text-slate-800"
          >
            S.A.P.E.
          </Link>

          <span className="text-sm text-slate-500">
            Gestión de empleados
          </span>
        </header>

        <main className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="mb-8">
            <p className="text-sm text-slate-500 mb-2">
              Empleados / Nuevo registro
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Registrar empleado
                </h1>

                <p className="text-slate-500 mt-2">
                  Completa los datos para crear una ficha y hacer
                  seguimiento del equipo.
                </p>
              </div>

              <span className="self-start text-sm font-medium bg-slate-100 text-slate-700 px-3 py-2 rounded-lg">
                Nuevo empleado
              </span>
            </div>
          </div>

          <form onSubmit={manejarEnvio} className="space-y-8">
            {/* DATOS PERSONALES */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-slate-800 text-white text-sm font-bold rounded-lg px-3 py-2">
                  01
                </span>

                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    Datos personales
                  </h2>
                  <p className="text-sm text-slate-500">
                    Información básica del empleado.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <label>
                  <span className={estiloLabel}>Nombre *</span>
                  <input
                    className={estiloCampo}
                    name="nombre"
                    value={datosEmpleado.nombre}
                    onChange={manejarCambio}
                    placeholder="Ej.: Martina"
                    autoComplete="given-name"
                    required
                  />
                </label>

                <label>
                  <span className={estiloLabel}>Apellido *</span>
                  <input
                    className={estiloCampo}
                    name="apellido"
                    value={datosEmpleado.apellido}
                    onChange={manejarCambio}
                    placeholder="Ej.: González"
                    autoComplete="family-name"
                    required
                  />
                </label>

                <label>
                  <span className={estiloLabel}>DNI *</span>
                  <input
                    className={estiloCampo}
                    name="dni"
                    value={datosEmpleado.dni}
                    onChange={manejarCambio}
                    placeholder="Ej.: 35123456"
                    inputMode="numeric"
                    required
                  />
                </label>
              </div>
            </section>

            <div className="border-t border-slate-200" />

            {/* CONTACTO */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-slate-800 text-white text-sm font-bold rounded-lg px-3 py-2">
                  02
                </span>

                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    Contacto
                  </h2>
                  <p className="text-sm text-slate-500">
                    Datos para comunicarse con el empleado.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label>
                  <span className={estiloLabel}>Email laboral *</span>
                  <input
                    type="email"
                    className={estiloCampo}
                    name="email"
                    value={datosEmpleado.email}
                    onChange={manejarCambio}
                    placeholder="nombre@empresa.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span className={estiloLabel}>Teléfono</span>
                  <input
                    type="tel"
                    className={estiloCampo}
                    name="telefono"
                    value={datosEmpleado.telefono}
                    onChange={manejarCambio}
                    placeholder="+54 11 1234 5678"
                    autoComplete="tel"
                  />
                </label>
              </div>
            </section>

            <div className="border-t border-slate-200" />

            {/* INFORMACIÓN LABORAL */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-slate-800 text-white text-sm font-bold rounded-lg px-3 py-2">
                  03
                </span>

                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    Información laboral
                  </h2>
                  <p className="text-sm text-slate-500">
                    Área, puesto y fecha de ingreso.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label>
                  <span className={estiloLabel}>Área *</span>
                  <select
                    className={estiloCampo}
                    name="area"
                    value={datosEmpleado.area}
                    onChange={manejarCambio}
                    required
                  >
                    <option value="" disabled>
                      Selecciona un área
                    </option>
                    <option>Administración</option>
                    <option>Desarrollo</option>
                    <option>People &amp; Culture</option>
                    <option>Soporte técnico</option>
                    <option>Ventas</option>
                  </select>
                </label>

                <label>
                  <span className={estiloLabel}>Puesto *</span>
                  <input
                    className={estiloCampo}
                    name="puesto"
                    value={datosEmpleado.puesto}
                    onChange={manejarCambio}
                    placeholder="Ej.: Analista de datos"
                    required
                  />
                </label>

                <label>
                  <span className={estiloLabel}>Fecha de ingreso *</span>
                  <input
                    type="date"
                    className={estiloCampo}
                    name="fechaIngreso"
                    value={datosEmpleado.fechaIngreso}
                    onChange={manejarCambio}
                    required
                  />
                </label>

                <label>
                  <span className={estiloLabel}>Modalidad de trabajo</span>
                  <select
                    className={estiloCampo}
                    name="modalidad"
                    value={datosEmpleado.modalidad}
                    onChange={manejarCambio}
                  >
                    <option value="">Selecciona una modalidad</option>
                    <option>Presencial</option>
                    <option>Híbrida</option>
                    <option>Remota</option>
                  </select>
                </label>

                <label className="sm:col-span-2 flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="periodoPrueba"
                    checked={datosEmpleado.periodoPrueba}
                    onChange={manejarCambio}
                    className="h-4 w-4 accent-slate-800"
                  />
                  El empleado está en período de prueba
                </label>
              </div>
            </section>

            <div className="border-t border-slate-200 pt-5">
              <p className="text-sm text-slate-500 mb-4">
                * Campos obligatorios
              </p>

              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition-colors"
              >
                Registrar empleado →
              </button>
            </div>

            {mensaje && (
              <p
                role="status"
                className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg text-sm"
              >
                {mensaje}
                <span className="block mt-1 text-blue-600">
                  Vista de prototipo: todavía no se guarda en un servidor.
                </span>
              </p>
            )}
          </form>

          {/* ENLACE AL LOGIN */}
          <p className="text-center text-sm text-slate-500 mt-8 pt-6 border-t border-slate-200">
            ¿Ya tenés una cuenta?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Iniciá sesión
            </Link>
          </p>
        </main>

        <footer className="text-center text-sm text-slate-400 mt-6">
          © 2026 S.A.P.E. — Gestión de empleados
        </footer>
      </div>
    </div>
  );
};

export default Register;