import { useAppDispatch } from '@redux/hooks';
import { chatsActions } from '@redux/store/slices/chatsSlice';
import { ChatModel } from '@shared/types/chatModel';

export const useAddChat = () => {
	const dispatch = useAppDispatch();

	const addChat = (chatId: ChatModel['chatId']) => {
		dispatch(
			chatsActions.addChat({
				chatId,
				messages: [],
			})
		);
	};

	return addChat;
};
