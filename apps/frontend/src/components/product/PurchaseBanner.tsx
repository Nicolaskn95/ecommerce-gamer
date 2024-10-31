"use client";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { Moeda, Product } from "@/core";
// import useCarrinho from '@/data/hooks/useCarrinho'
import { useRouter } from "next/navigation";
import useInstallment from "@/data/hooks/useInstallment";

export interface PurchaseBannerProps {
  product: Product;
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
  const router = useRouter();
  const { product } = props;
  // const { adicionarItem } = useCarrinho()

  const parcelamento = useInstallment(product.promotionPrice, 12);

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          de R$ {product?.basePrice}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">R$ {product?.promotionPrice}</span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {parcelamento.installmentQtd}x de
        </span>
        {Moeda.format(parcelamento.installmentValue)}{" "}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="flex-1 button bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(product)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="flex-1 button bg-violet-700"
          onClick={() => {
            // adicionarItem(product)
            router.push("/checkout/pagamento");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
