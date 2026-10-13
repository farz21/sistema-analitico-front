import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Iniciar Sesión
          </h2>
          <p className="text-slate-500 mt-2">
            Accede a tu panel de S.A.P.E.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Correo institucional
            </label>
            <input
              type="email"
              placeholder="ejemplo@empresa.com"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-lg shadow transition-colors"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          ¿No tenés una cuenta?{" "}
          <Link
            to="/registro"
            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
