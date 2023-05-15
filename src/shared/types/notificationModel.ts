import { MessageModel } from '@shared/types/messageModel';
import { ChatModel } from './chatModel';

export interface NotificationModel {
	receiptId: number;
	body: {
		typeWebhook: string;
		senderData: {
			chatId: ChatModel['chatId'];
		};
		messageData: MessageModel;
	};
}
