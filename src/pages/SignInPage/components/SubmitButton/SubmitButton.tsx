import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ISubmitButtonProps } from './types/SubmitButton.props';

const SubmitButton: FC<ISubmitButtonProps> = ({ ...props }) => {
	return (
		<Button
			{...props}
			colorScheme="teal"
			type="submit"
		>
			Подтвердить
		</Button>
	);
};

export default SubmitButton;
