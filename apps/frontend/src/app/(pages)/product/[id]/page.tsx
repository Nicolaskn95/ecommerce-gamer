import DontFoundProduct from "@/components/product/DontFoundProduct";
import ProductInformations from "@/components/product/ProductInformations";
import ProductTitle from "@/components/product/ProductTitle";
import PurchaseBanner from "@/components/product/PurchaseBanner";
import { mockProducts } from "@/core";

function ProductPage(props: any) {
  const id = +props.params.id;
  const product = mockProducts.find((prod) => prod.id === id);
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle produto={product} />
        <ProductInformations product={product} />
        <PurchaseBanner product={product} />
      </div>
    </div>
  ) : (
    <DontFoundProduct />
  );
}

export default ProductPage;
