import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatModel } from '@shared/types/chatModel';
import { MessageModel } from '@shared/types/messageModel';

const initialState: ChatModel[] = [];

const chatsSlice = createSlice({
	name: 'Chats',
	initialState,
	reducers: {
		addChat: (state, action: PayloadAction<ChatModel>) => {
			state.push(action.payload);
		},
		addMessage: (
			state,
			action: PayloadAction<{ chatId: string; message: MessageModel }>
		) => {
			const findChat = state.find(
				chat => chat.chatId === action.payload.chatId
			);
			if (findChat) {
				findChat.messages.push(action.payload.message);
			}
		},
	},
});

export const chatsActions = chatsSlice.actions;
export default chatsSlice.reducer;
