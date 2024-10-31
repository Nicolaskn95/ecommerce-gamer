"use client";
import { Moeda, Product } from "@/core";
import Image from "next/image";
import Link from "next/link";
import { LiaCartPlusSolid } from "react-icons/lia";
import GradeReview from "../shared/GradeReview";

export interface ProductItemProps {
  product: Product;
}

function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-950 border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <GradeReview grade={product.grade} />
      </div>
      <div className="w-full h-48 relative">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="Product Image`"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        <div className="self-start text-sm border-b border-dashed">
          {product.especification.highlight}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            De {Moeda.format(product.basePrice)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            Por {Moeda.format(product.promotionPrice)}
          </span>
          {/* <span className="text-zinc-400 text-xs">
              Até {}
          </span> */}
        </div>
        <button
          className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500"
          onClick={(e) => console.log(e)}
        >
          <LiaCartPlusSolid size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}

export default ProductItem;
