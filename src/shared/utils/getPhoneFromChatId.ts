import { ChatModel } from '@shared/types/chatModel';

export const getPhoneFromChatId = (chatId?: ChatModel['chatId']): string => {
	return chatId?.split('@')[0] ?? '';
};
