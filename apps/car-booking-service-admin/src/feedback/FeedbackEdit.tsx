import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
