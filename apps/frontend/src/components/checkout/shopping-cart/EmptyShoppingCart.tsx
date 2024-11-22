import { IconShoppingCartOff } from "@tabler/icons-react";
import React from "react";

function EmptyShoppingCart() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-violet-300 py-10">
      <IconShoppingCartOff size={180} stroke={0.5} />
      <span className="text-violet-500 font-light">Carrinho está vazio</span>
    </div>
  );
}

export default EmptyShoppingCart;
