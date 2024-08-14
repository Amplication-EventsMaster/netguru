import { RentalUpdateManyWithoutInventoriesInput } from "./RentalUpdateManyWithoutInventoriesInput";

export type InventoryUpdateInput = {
  available?: boolean | null;
  name?: string | null;
  pricePerDay?: number | null;
  rentals?: RentalUpdateManyWithoutInventoriesInput;
  typeField?: string | null;
};
