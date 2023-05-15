import { messagesApi } from '@redux/api';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { chatsActions } from '@redux/store/slices/chatsSlice';
import { ChatModel } from '@shared/types/chatModel';
import { MessageModel } from '@shared/types/messageModel';
import { SendMessageResponseModel } from '@shared/types/sendMessageResponseModel';

interface ISendResponse {
	data: SendMessageResponseModel;
}

interface IUseSendArgs {
	chatId: ChatModel['chatId'];
}

export const useSend = ({ chatId }: IUseSendArgs) => {
	const dispatch = useAppDispatch();
	const instanceData = useAppSelector(state => state.instanceReducer);
	const [sendMessage, { isLoading, error }] =
		messagesApi.useSendMessageMutation();

	const saveMessageInStore = (message: MessageModel) => {
		dispatch(
			chatsActions.addMessage({
				chatId: chatId,
				message: message,
			})
		);
	};

	const send = async (message: MessageModel) => {
		try {
			const response = await sendMessage({
				instanceData,
				chatId,
				message: message.textMessageData.textMessage,
			});

			console.log(response);

			if ((response as ISendResponse).data.idMessage) {
				saveMessageInStore(message);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return { send, process: { isLoading, error } };
};
