import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  rating?: IntNullableFilter;
};
