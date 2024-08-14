import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  order?: OrderWhereUniqueInput | null;
  rating?: number | null;
};
