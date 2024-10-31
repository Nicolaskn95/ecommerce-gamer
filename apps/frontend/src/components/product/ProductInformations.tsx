import Image from "next/image";

import type { Product } from "@/core";
import Especification from "./Especficiation";

export interface ProductInformationsProps {
  product: Product;
}

export default function ProductInformations(props: ProductInformationsProps) {
  const { product } = props;
  return product ? (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={product.image!}
          fill
          className="object-cover p-7"
          alt="Imagem do Produto"
        />
      </div>
      <Especification product={product!} />
    </div>
  ) : null;
}
