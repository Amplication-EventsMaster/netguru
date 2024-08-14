import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  available?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pricePerDay?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
