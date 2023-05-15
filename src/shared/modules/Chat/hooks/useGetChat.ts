import { useAppSelector } from '@redux/hooks';
import { ChatModel } from '@shared/types/chatModel';

interface IUseGetChatArgs {
	chatId?: ChatModel['chatId'];
}

export const useGetChat = ({
	chatId,
}: IUseGetChatArgs): ChatModel | undefined => {
	const chats = useAppSelector(state => state.chatsReducer);
	return chats.find(chat => chat.chatId === chatId);
};
