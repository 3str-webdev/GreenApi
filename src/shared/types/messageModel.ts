import { ChatModel } from './chatModel';

export interface MessageModel {
	typeMessage: string;
	textMessageData: {
		textMessage: string;
	};
	sender: ChatModel['chatId'];
}
