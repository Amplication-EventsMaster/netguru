import { RentalCreateNestedManyWithoutInventoriesInput } from "./RentalCreateNestedManyWithoutInventoriesInput";

export type InventoryCreateInput = {
  available?: boolean | null;
  name?: string | null;
  pricePerDay?: number | null;
  rentals?: RentalCreateNestedManyWithoutInventoriesInput;
  typeField?: string | null;
};
