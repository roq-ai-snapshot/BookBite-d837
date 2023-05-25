import { FeedbacksInterface } from 'interfaces/feedbacks';
import { OrdersInterface } from 'interfaces/orders';
import { RestaurantsInterface } from 'interfaces/restaurants';
import { StaffInterface } from 'interfaces/staff';

export interface UsersInterface {
  id?: string;
  role: string;
  feedbacks?: FeedbacksInterface[];
  orders?: OrdersInterface[];
  restaurants?: RestaurantsInterface[];
  staff?: StaffInterface[];
}
