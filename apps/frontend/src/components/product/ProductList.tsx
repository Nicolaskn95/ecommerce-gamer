import { mockProducts } from "@/core";
import ProductItem from "./ProductItem";
import DontFoundProduct from "./DontFoundProduct";

function ProductList() {
  return mockProducts.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {mockProducts.map((prod) => (
        <ProductItem product={prod} key={prod.id} />
      ))}
    </div>
  ) : (
    <DontFoundProduct noBackButton />
  );
}

export default ProductList;
