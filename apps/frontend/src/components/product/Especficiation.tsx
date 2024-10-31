import Tag from "../shared/Tag";
import type { Product } from "@/core";
import { CiShoppingTag } from "react-icons/ci";

export interface EspecificationProps {
  product: Product;
}

export default function Especification(props: EspecificationProps) {
  const { product } = props;
  return product ? (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag
          label={product.especification.highlight!}
          icon={CiShoppingTag}
          outlined
        />
      </div>
      {product?.especification &&
        Object.keys(product.especification)
          .filter((k) => k !== "destaque")
          .map((chave) => (
            <div key={chave} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">{chave}</span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {product.especification[chave]}
              </span>
            </div>
          ))}
    </div>
  ) : null;
}
