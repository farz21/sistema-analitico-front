import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-500 text-center p-4 mt-auto border-t border-slate-200">
      <p className="text-sm">
        © {new Date().getFullYear()} S.A.P.E. - Sistema Analítico Para Empleados
      </p>
    </footer>
  );
};

export default Footer;
