import { OrderItemsInterface } from 'interfaces/order-items';

export interface OrdersInterface {
  id?: string;
  status: string;
  total_price: number;
  created_at: Date;
  updated_at: Date;
  customer_id: string;
  restaurant_id: string;
  order_items?: OrderItemsInterface[];
}
