import { Heading, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { getChatLastMessagePreview } from '@pages/ChatPage/utils/getChatLastMessagePreview';
import { ChatModel } from '@shared/types/chatModel';
import { getPhoneFromChatId } from '@shared/utils/getPhoneFromChatId';
import { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

const ChatItem: FC<{ chat: ChatModel }> = ({ chat }) => {
	const lastChatMessage = getChatLastMessagePreview(chat.messages);
	const phone = getPhoneFromChatId(chat.chatId);
	const match = useMatch({ path: chat.chatId, end: true });

	return (
		<LinkBox
			as={'article'}
			width={'xs'}
			p="3"
			borderWidth="1px"
			rounded="md"
			borderColor={match ? 'teal' : ''}
		>
			<Heading size={'sm'}>
				<LinkOverlay
					as={Link}
					to={`./${chat.chatId}`}
				>
					{phone}
				</LinkOverlay>
			</Heading>
			<Text>{lastChatMessage ?? 'Новый диалог'}</Text>
		</LinkBox>
	);
};

export default ChatItem;
