import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">
          FEITO POR LIKE LOOK SOLUTIONS
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Like Look Solutions. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}