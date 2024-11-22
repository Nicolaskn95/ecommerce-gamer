"use client";

import HeaderStepCheckout from "@/components/checkout/HeaderStepCheckout";
import EmptyShoppingCart from "@/components/checkout/shopping-cart/EmptyShoppingCart";
import ItemShoppingCart from "@/components/checkout/shopping-cart/ItemsShoppingCart";
import TotalShoppingCart from "@/components/checkout/shopping-cart/TotalShoppingCart";
import usePayment from "@/data/hooks/usePayment";
import useShoppingCart from "@/data/hooks/useShoppingCart";

export default function Page() {
  const { items, qttItems, totalValue, addItem, removeItem, removeProduct } =
    useShoppingCart();

  return (
    <div className="flex flex-col gap-5 container">
      <HeaderStepCheckout step="shopping-cart" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyShoppingCart />}
        {items.map((item: any) => (
          <ItemShoppingCart
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <TotalShoppingCart qttItems={qttItems} totalValue={totalValue} />
    </div>
  );
}
