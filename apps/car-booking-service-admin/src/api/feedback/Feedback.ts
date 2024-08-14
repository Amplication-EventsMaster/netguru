import { Order } from "../order/Order";

export type Feedback = {
  comment: string | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  rating: number | null;
  updatedAt: Date;
};
