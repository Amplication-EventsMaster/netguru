import { Customer } from "../customer/Customer";
import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";

export type Rental = {
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  inventory?: Inventory | null;
  orders?: Array<Order>;
  startDate: Date | null;
  totalPrice: number | null;
  updatedAt: Date;
};
