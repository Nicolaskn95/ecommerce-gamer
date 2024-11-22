"use client";
import Image from "next/image";
import { PiShieldCheckDuotone } from "react-icons/pi";

export default function SuccessPage() {
  return (
    <div className="flex flex-col gap-10 container mx-auto px-4">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center gap-6 py-10">
        {/* Icon Section */}
        <div className="relative">
          <PiShieldCheckDuotone
            className="text-green-500 drop-shadow-lg"
            size={150}
          />
        </div>

        {/* Title and Description */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white-800">
            Pedido Realizado com Sucesso!
          </h1>
          <p className="mt-2 text-lg text-white-600">
            Você receberá um e-mail com os detalhes da sua compra.
          </p>
        </div>
      </header>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col items-center gap-4">
        <button className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg font-medium shadow-md transition-colors">
          Continuar Comprando
        </button>
        <button className="px-6 py-3 text-green-500 bg-white border border-green-500 hover:bg-green-50 rounded-lg font-medium shadow-md transition-colors">
          Ver Meu Pedido
        </button>
      </div>

      {/* Additional Information */}
      <footer className="text-center text-sm text-gray-500">
        Caso precise de ajuda, entre em contato com nosso{" "}
        <a href="#" className="text-green-500 underline hover:text-green-600">
          Suporte
        </a>
        .
      </footer>
    </div>
  );
}
