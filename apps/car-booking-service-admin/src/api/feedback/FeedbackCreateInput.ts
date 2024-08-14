import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  order?: OrderWhereUniqueInput | null;
  rating?: number | null;
};
