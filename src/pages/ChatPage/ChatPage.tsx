import { Divider, Flex } from '@chakra-ui/react';
import { useNotificationObserve } from '@shared/modules/Chat/hooks/useNotificationObserve';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ChatsList from './components/ChatsList/ChatsList';

const ChatPage: FC = () => {
	useNotificationObserve();

	return (
		<Flex
			p={4}
			gap={4}
			height={'100vh'}
		>
			<ChatsList />
			<Divider orientation="vertical" />
			<Outlet />
		</Flex>
	);
};

export default ChatPage;
