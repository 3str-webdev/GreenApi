import { Stack } from '@chakra-ui/layout';
import { useAppSelector } from '@redux/hooks';
import { FC } from 'react';
import ChatItem from '../ChatItem/ChatItem';

const ChatsList: FC = () => {
	const chats = useAppSelector(state => state.chatsReducer);
	return (
		<Stack overflowY={'auto'}>
			{chats.map(chat => {
				return (
					<ChatItem
						key={chat.chatId}
						chat={chat}
					/>
				);
			})}
		</Stack>
	);
};

export default ChatsList;
