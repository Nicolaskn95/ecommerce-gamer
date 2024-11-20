"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { ProductFilter, Product } from "@gstore/core";
import useAPI from "../hooks/useAPI";

export interface ProductContextProps {
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  productById: (id: number) => Product | null;
}

const ProductContext = createContext<ProductContextProps>({} as any);

export function ProductProvider(props: any) {
  const { httpGet } = useAPI();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const loadProduct = useCallback(async () => {
    const products = await httpGet("/products");
    setProducts(products ?? []);
  }, [httpGet]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  return (
    <ProductContext.Provider
      value={{
        search,
        get products() {
          if (!search) return products;
          return new ProductFilter().execute(search, products);
        },
        setSearch,
        productById: (id: number) =>
          products.find((product) => product.id === id) ?? null,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
