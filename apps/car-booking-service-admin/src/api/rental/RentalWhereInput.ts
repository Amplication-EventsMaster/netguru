import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RentalWhereInput = {
  customer?: CustomerWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  orders?: OrderListRelationFilter;
  startDate?: DateTimeNullableFilter;
  totalPrice?: FloatNullableFilter;
};
