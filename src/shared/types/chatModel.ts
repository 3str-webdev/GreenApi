import { MessageModel } from './messageModel';

export interface ChatModel {
	chatId: string;
	messages: MessageModel[];
}
