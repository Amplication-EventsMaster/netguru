import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
