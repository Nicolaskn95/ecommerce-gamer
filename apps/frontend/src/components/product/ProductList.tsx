import { mockProducts } from "@gstore/core";
import ProductItem from "./ProductItem";
import DontFoundProduct from "./DontFoundProduct";
import useProducts from "@/data/hooks/useProducts";

function ProductList() {
  const { products } = useProducts();
  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((prod) => (
        <ProductItem product={prod} key={prod.id} />
      ))}
    </div>
  ) : (
    <DontFoundProduct noBackButton />
  );
}

export default ProductList;
