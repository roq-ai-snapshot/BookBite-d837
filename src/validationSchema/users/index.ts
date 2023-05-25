import * as yup from 'yup';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';
import { ordersValidationSchema } from 'validationSchema/orders';
import { restaurantsValidationSchema } from 'validationSchema/restaurants';
import { staffValidationSchema } from 'validationSchema/staff';

export const usersValidationSchema = yup.object().shape({
  role: yup.string().required(),
  feedbacks: yup.array().of(feedbacksValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  restaurants: yup.array().of(restaurantsValidationSchema),
  staff: yup.array().of(staffValidationSchema),
});
