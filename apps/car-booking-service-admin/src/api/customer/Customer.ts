import { Rental } from "../rental/Rental";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
