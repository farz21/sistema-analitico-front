import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-400">
          S.A.P.E.
        </h1>
        <h2 className="text-2xl font-medium text-slate-300">
          Sistema Analítico Para Empleados
        </h2>
        <p className="text-slate-400 text-lg">
          Plataforma integral para la gestión, métricas y evaluación de
          rendimiento del personal.
        </p>
        <div className="pt-8">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
          >
            Ingresar al Sistema
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
