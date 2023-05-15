import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';
import ChatMessageItem from '../ChatMessageItem/ChatMessageItem';
import { IChatMessagesListProps } from './types/ChatMessagesList.props';

const ChatMessagesList: FC<IChatMessagesListProps> = ({ messages }) => {
	return (
		<Flex
			direction={'column'}
			gap={2}
			p={4}
			borderWidth={1}
			rounded="md"
			overflowY={'auto'}
		>
			{messages &&
				messages.map(message => {
					return (
						<ChatMessageItem
							key={uuid()}
							message={message}
						/>
					);
				})}
		</Flex>
	);
};

export default ChatMessagesList;
