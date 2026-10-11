import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-blue-400">
          S.A.P.E.
        </h1>
        <div className="space-x-6 text-sm font-medium">
          <Link
            to="/dashboard"
            className="hover:text-blue-300 transition-colors"
          >
            Dashboard
          </Link>
          <Link to="/duelo" className="hover:text-blue-300 transition-colors">
            Módulo Duelo
          </Link>
          <Link
            to="/"
            className="text-slate-400 hover:text-red-400 transition-colors"
          >
            Salir
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
