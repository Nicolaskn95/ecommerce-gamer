import type { Product } from "../product";
import type CartItem from "./CartItem";

export default class ShoppingCart {
  constructor(readonly items: CartItem[] = []) {}
  addItem(product: Product): ShoppingCart {
    const item = this.itemsPerProduct(product);
    if (item) {
      return new ShoppingCart(this.changeItemQuantity(this.items, product, 1));
    } else {
      return new ShoppingCart([...this.items, { product, quantity: 1 }]);
    }
  }
  removeItem(product: Product) {
    const item = this.itemsPerProduct(product);
    if (!item) return this;

    return new ShoppingCart(this.changeItemQuantity(this.items, product, -1));
  }
  removeProduct(product: Product) {
    const item = this.itemsPerProduct(product);
    if (!item) return this;

    return new ShoppingCart(
      this.items.filter((item) => item.product.id !== product.id)
    );
  }
  clean() {
    return new ShoppingCart();
  }

  get qttItems() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalValue() {
    return this.items
      .map((item) => item.product.promotionPrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  get totalFullyValue() {
    return this.items
      .map((item) => item.product.basePrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  private itemsPerProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }

  private changeItemQuantity(
    items: CartItem[],
    product: Product,
    change: number
  ): CartItem[] {
    return items
      .map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter((i) => i.quantity > 0);
  }
}
