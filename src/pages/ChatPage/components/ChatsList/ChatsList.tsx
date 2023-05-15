import { Stack } from '@chakra-ui/layout';
import { Divider, Flex } from '@chakra-ui/react';
import { useAppSelector } from '@redux/hooks';
import { FC } from 'react';
import AddChat from '../AddChat/AddChat';
import ChatItem from '../ChatItem/ChatItem';

const ChatsList: FC = () => {
	const chats = useAppSelector(state => state.chatsReducer);
	return (
		<Flex
			direction={'column'}
			gap={2}
		>
			<AddChat />
			<Divider />
			<Stack
				flex={1}
				overflowY={'auto'}
			>
				{chats.map(chat => {
					return (
						<ChatItem
							key={chat.chatId}
							chat={chat}
						/>
					);
				})}
			</Stack>
		</Flex>
	);
};

export default ChatsList;
