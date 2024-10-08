import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "name";

export const InventoryTitle = (record: TInventory): string => {
  return record.name?.toString() || String(record.id);
};
