import { useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import AddChatButton from '../AddChatButton/AddChatButton';
import AddChatModal from '../AddChatModal/AddChatModal';

const AddChat: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<AddChatButton showModalFunc={onOpen} />
			<AddChatModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default AddChat;
