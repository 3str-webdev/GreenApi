import { Box, Heading, Text } from '@chakra-ui/react';
import { MessageModel } from '@shared/types/messageModel';
import { getPhoneFromChatId } from '@shared/utils/getPhoneFromChatId';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const ChatMessageItem: FC<{ message: MessageModel }> = ({ message }) => {
	const { chatId } = useParams();
	const isMyMessage = chatId == message.sender;
	const messageTitle = isMyMessage ? getPhoneFromChatId(chatId) : 'Вы';
	const alignSelf = isMyMessage ? 'start' : 'end';

	return (
		<Box
			alignSelf={alignSelf}
			p={2}
			borderWidth={1}
			rounded={'md'}
			maxW={'40%'}
			minW={'10%'}
		>
			<Heading size={'sm'}>{messageTitle}</Heading>
			<Text>{message?.textMessageData?.textMessage}</Text>
		</Box>
	);
};

export default ChatMessageItem;
