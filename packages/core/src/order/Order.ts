import type OrderDelivered from "./OrderDelivered";
import type OrderItem from "./OrderItem";
import type { PaymentMethod } from "./PaymentMethod";
import type { Status } from "./Status";

export default interface Order {
  id: number;
  date: Date;
  items: OrderItem[];
  totalValue: number;
  status: Status;
  paymentMethod: PaymentMethod;
  delivered: OrderDelivered;
}
