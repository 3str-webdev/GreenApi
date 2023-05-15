import { ArrowRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { ISubmitButtonProps } from './types/SubmitButton.props';

const SubmitButton: FC<ISubmitButtonProps> = ({ ...props }) => {
	return (
		<IconButton
			{...props}
			type="submit"
			h="1.75rem"
			size="sm"
			aria-label="Отправить"
			icon={<ArrowRightIcon />}
			colorScheme="teal"
		/>
	);
};

export default SubmitButton;
