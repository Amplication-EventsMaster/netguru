import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderUpdateManyWithoutRentalsInput } from "./OrderUpdateManyWithoutRentalsInput";

export type RentalUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  inventory?: InventoryWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutRentalsInput;
  startDate?: Date | null;
  totalPrice?: number | null;
};
