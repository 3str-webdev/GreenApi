import { MessageModel } from '@shared/types/messageModel';
import * as yup from 'yup';

export const ChatMessageFormSchema = yup
	.object<MessageModel['textMessageData']>({
		textMessage: yup.string().required(),
	})
	.required();
