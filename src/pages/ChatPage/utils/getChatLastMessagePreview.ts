import { MessageModel } from '@shared/types/messageModel';

export const getChatLastMessagePreview = (messages: MessageModel[]): string => {
	const lastChatMessage =
		messages[messages.length - 1]?.textMessageData?.textMessage;

	if (lastChatMessage?.length > 20) {
		return lastChatMessage.slice(0, 17) + '...';
	}

	return lastChatMessage;
};
