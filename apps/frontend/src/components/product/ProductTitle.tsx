import type { Product } from "@/core";

export interface ProductTitleProps {
  produto: Product;
}

export default function ProductTitle(props: ProductTitleProps) {
  const { produto } = props;
  return (
    <div className="flex flex-col">
      <div className="text-2xl">{produto?.name}</div>
      <div className="font-light text-zinc-400">{produto?.description}</div>
    </div>
  );
}
