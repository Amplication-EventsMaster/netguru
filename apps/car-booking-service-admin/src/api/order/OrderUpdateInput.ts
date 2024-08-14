import { FeedbackUpdateManyWithoutOrdersInput } from "./FeedbackUpdateManyWithoutOrdersInput";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type OrderUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  rental?: RentalWhereUniqueInput | null;
  status?: "Option1" | null;
};
