import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
