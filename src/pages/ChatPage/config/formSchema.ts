import * as yup from 'yup';
import { AddChatFormModel } from '../types/AddChatFormModel';

export const AddChatFormSchema = yup
	.object<AddChatFormModel>({
		phone: yup.string().required().min(11),
	})
	.required();
