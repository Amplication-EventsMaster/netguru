import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type InventoryWhereInput = {
  available?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pricePerDay?: FloatNullableFilter;
  rentals?: RentalListRelationFilter;
  typeField?: StringNullableFilter;
};
