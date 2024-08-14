import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RentalTitle } from "../rental/RentalTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="available" source="available" />
        <TextInput label="name" source="name" />
        <NumberInput label="pricePerDay" source="pricePerDay" />
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
