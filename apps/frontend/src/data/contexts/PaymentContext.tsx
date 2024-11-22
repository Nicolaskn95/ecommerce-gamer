"use client";
import {
  OrderDelivered,
  PaymentMethod,
  Order,
  Status,
  CartItem,
  OrderItem,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import useAPI from "../hooks/useAPI";
import useShoppingCart from "../hooks/useShoppingCart";

export interface PaymentContextProps {
  paymentMethod: PaymentMethod;
  delivered: Partial<OrderDelivered>;
  modifyPaymentMethod: (paymentMethod: PaymentMethod) => void;
  modifyDelivered: (delivered: Partial<OrderDelivered>) => void;
  checkout: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any);

export function PaymentProvider(props: any) {
  const { httpPost } = useAPI();
  const { items, totalValue, cleanCart } = useShoppingCart();
  const { saveItem, getItem } = useLocalStorage();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX
  );
  const [delivered, setDelivered] = useState<Partial<OrderDelivered>>({});

  function modifyPaymentMethod(paymentMethod: PaymentMethod) {
    saveItem("paymentMethod", paymentMethod);
    setPaymentMethod(paymentMethod);
  }

  function modifyDelivered(delivered: Partial<OrderDelivered>) {
    saveItem("delivered", delivered);
    setDelivered(delivered);
  }

  async function checkout() {
    const order: Partial<Order> = {
      date: new Date(),
      totalValue,
      paymentMethod,
      delivered: delivered as OrderDelivered,
      status: Status.RECEBIDO,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionPrice,
          }) as OrderItem
      ),
    };

    await httpPost("/orders", order);
    cleanCart();
    router.push("/checkout/success");
  }

  useEffect(() => {
    const delivered = getItem("delivered");
    const paymentMethod = getItem("paymentMethod");
    if (delivered) setDelivered(delivered);
    if (paymentMethod) setPaymentMethod(paymentMethod);
  }, [getItem]);

  return (
    <PaymentContext.Provider
      value={{
        delivered,
        paymentMethod,
        modifyDelivered,
        modifyPaymentMethod,
        checkout,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;
