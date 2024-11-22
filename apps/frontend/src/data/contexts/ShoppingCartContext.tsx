"use client";
import {
  CartItem,
  Installment,
  InstallmentCalc,
  ShoppingCart,
  Product,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface ShoppingCartContextProps {
  items: CartItem[];
  qttItems: number;
  fullTotalValue: number;
  totalValue: number;
  installment: Installment;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeProduct: (product: Product) => void;
  cleanCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({} as any);

export function ShoppingCartProvider(props: any) {
  const { saveItem, getItem } = useLocalStorage();
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(
    new ShoppingCart()
  );

  function addItem(product: Product) {
    modifyShopCart(shoppingCart.addItem(product));
  }

  function removeItem(product: Product) {
    modifyShopCart(shoppingCart.removeItem(product));
  }

  function removeProduct(product: Product) {
    modifyShopCart(shoppingCart.removeProduct(product));
  }

  function cleanCart() {
    modifyShopCart(shoppingCart.clean());
  }

  function modifyShopCart(cart: ShoppingCart) {
    saveItem("shoppingCart", cart.items);
    setShoppingCart(cart);
  }

  useEffect(() => {
    const saveItems: CartItem[] = getItem("shoppingCart");
    if (saveItems) setShoppingCart(new ShoppingCart(saveItems));
  }, [getItem]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items: shoppingCart.items,
        qttItems: shoppingCart.qttItems,
        totalValue: shoppingCart.totalValue,
        fullTotalValue: shoppingCart.totalFullyValue,
        installment: new InstallmentCalc().implement(shoppingCart.totalValue),
        addItem,
        removeItem,
        removeProduct,
        cleanCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
