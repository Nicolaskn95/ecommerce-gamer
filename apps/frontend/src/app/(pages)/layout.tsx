"use client";
import Page from "@/components/template/Page";
import { PaymentProvider } from "@/data/contexts/PaymentContext";
import { ProductProvider } from "@/data/contexts/ProductContext";
import { ShoppingCartProvider } from "@/data/contexts/ShoppingCartContext";

export default function Layout(props: any) {
  return (
    <>
      <ProductProvider>
        <ShoppingCartProvider>
          <PaymentProvider>
            <Page>{props.children}</Page>
          </PaymentProvider>
        </ShoppingCartProvider>
      </ProductProvider>
    </>
  );
}
