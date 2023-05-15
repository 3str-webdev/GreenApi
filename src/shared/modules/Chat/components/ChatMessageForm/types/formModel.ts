import { MessageModel } from '@shared/types/messageModel';

export interface ChatMessageFormModel {
	message: MessageModel['text'];
}
