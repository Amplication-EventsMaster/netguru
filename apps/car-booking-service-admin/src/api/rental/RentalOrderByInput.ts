import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  startDate?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
