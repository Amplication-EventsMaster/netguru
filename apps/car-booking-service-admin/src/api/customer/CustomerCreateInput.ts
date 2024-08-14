import { RentalCreateNestedManyWithoutCustomersInput } from "./RentalCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  rentals?: RentalCreateNestedManyWithoutCustomersInput;
};
