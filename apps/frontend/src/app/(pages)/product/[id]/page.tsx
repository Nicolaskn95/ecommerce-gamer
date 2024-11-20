import DontFoundProduct from "@/components/product/DontFoundProduct";
import ExpertAssessment from "@/components/product/ExpertAssessment";
import PriceMeasurement from "@/components/product/PriceMeasurement";
import ProductInformations from "@/components/product/ProductInformations";
import ProductTitle from "@/components/product/ProductTitle";
import PurchaseBanner from "@/components/product/PurchaseBanner";
import UsersReviews from "@/components/product/UsersReviews";
import { mockProducts } from "@gstore/core";

function ProductPage(props: any) {
  const id = +props.params.id;
  const product = mockProducts.find((prod) => prod.id === id);
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle produto={product} />
        <ProductInformations product={product} />
        <PurchaseBanner product={product} />
        <PriceMeasurement product={product} />
      </div>
      <UsersReviews product={product} />
      <ExpertAssessment product={product} />
    </div>
  ) : (
    <DontFoundProduct />
  );
}

export default ProductPage;
