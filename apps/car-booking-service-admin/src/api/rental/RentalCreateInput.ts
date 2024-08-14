import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutRentalsInput } from "./OrderCreateNestedManyWithoutRentalsInput";

export type RentalCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  inventory?: InventoryWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutRentalsInput;
  startDate?: Date | null;
  totalPrice?: number | null;
};
