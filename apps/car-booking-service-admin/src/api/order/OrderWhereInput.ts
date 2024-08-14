import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type OrderWhereInput = {
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  rental?: RentalWhereUniqueInput;
  status?: "Option1";
};
