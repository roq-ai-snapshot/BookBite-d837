import { FeedbacksInterface } from 'interfaces/feedbacks';
import { MenuItemsInterface } from 'interfaces/menu-items';
import { OrdersInterface } from 'interfaces/orders';
import { StaffInterface } from 'interfaces/staff';

export interface RestaurantsInterface {
  id?: string;
  name: string;
  location: string;
  contact_details: string;
  operating_hours: string;
  owner_id: string;
  feedbacks?: FeedbacksInterface[];
  menu_items?: MenuItemsInterface[];
  orders?: OrdersInterface[];
  staff?: StaffInterface[];
}
