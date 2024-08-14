import { FeedbackCreateNestedManyWithoutOrdersInput } from "./FeedbackCreateNestedManyWithoutOrdersInput";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type OrderCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  rental?: RentalWhereUniqueInput | null;
  status?: "Option1" | null;
};
