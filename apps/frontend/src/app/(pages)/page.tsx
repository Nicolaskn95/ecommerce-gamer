import ProductItem from "@/components/product/ProductItem";
import ProductList from "@/components/product/ProductList";
import Page from "@/components/template/Page";
import { mockProducts } from "@/core";

export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col container gap-5">
        <ProductList />
      </div>
    </>
  );
}
