import { Feedback } from "../feedback/Feedback";
import { Rental } from "../rental/Rental";

export type Order = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  orderDate: Date | null;
  rental?: Rental | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
