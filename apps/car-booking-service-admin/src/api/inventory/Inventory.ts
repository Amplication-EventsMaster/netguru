import { Rental } from "../rental/Rental";

export type Inventory = {
  available: boolean | null;
  createdAt: Date;
  id: string;
  name: string | null;
  pricePerDay: number | null;
  rentals?: Array<Rental>;
  typeField: string | null;
  updatedAt: Date;
};
