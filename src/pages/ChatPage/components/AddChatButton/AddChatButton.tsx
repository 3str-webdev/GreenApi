import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { IAddChatButtonProps } from './types/AddChatButton.props';

const AddChatButton: FC<IAddChatButtonProps> = ({ showModalFunc }) => {
	return (
		<Button
			colorScheme="teal"
			onClick={showModalFunc}
		>
			Создать чат
		</Button>
	);
};

export default AddChatButton;
