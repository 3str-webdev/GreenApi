import { Flex, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router';
import ChatMessageForm from './components/ChatMessageForm/ChatMessageForm';
import ChatMessagesList from './components/ChatMessagesList/ChatMessagesList';
import { useGetChat } from './hooks';
import { getPhoneFromChatId } from '@shared/utils/getPhoneFromChatId';

const Chat: FC = () => {
	const { chatId } = useParams();
	const phone = getPhoneFromChatId(chatId);
	const chat = useGetChat({ chatId });

	return (
		<Flex
			flex={1}
			direction={'column'}
			gap={2}
		>
			<Text fontSize={'2xl'}>{phone}</Text>
			<Spacer />
			{chat?.messages && !!chat.messages.length && (
				<ChatMessagesList messages={chat?.messages} />
			)}
			<ChatMessageForm chatId={chatId ?? ''} />
		</Flex>
	);
};

export default Chat;
