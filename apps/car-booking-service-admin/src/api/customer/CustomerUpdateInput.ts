import { RentalUpdateManyWithoutCustomersInput } from "./RentalUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  rentals?: RentalUpdateManyWithoutCustomersInput;
};
