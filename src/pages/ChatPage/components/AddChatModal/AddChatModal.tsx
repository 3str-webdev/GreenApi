import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import AddChatForm from '../AddChatForm/AddChatForm';
import { IAddChatModalProps } from './types/AddChatModal';

const AddChatModal: FC<IAddChatModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			blockScrollOnMount={true}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Введите телефон собеседника</ModalHeader>
				<ModalBody>
					<AddChatForm onSubmitCb={onClose} />
				</ModalBody>
				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddChatModal;
