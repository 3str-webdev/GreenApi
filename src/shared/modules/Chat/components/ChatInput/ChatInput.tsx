import { Input } from '@chakra-ui/react';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { IChatInputProps } from './types/ChatInput.props';

const ChatInput: FC<IChatInputProps> = ({
	name,
	isInvalid,
	placeholder,
	...props
}) => {
	return (
		<Controller
			{...props}
			name={name}
			render={({ field }) => (
				<Input
					placeholder={placeholder}
					isInvalid={isInvalid}
					errorBorderColor="red.300"
					focusBorderColor={isInvalid ? 'red.300' : ''}
					{...field}
				/>
			)}
		/>
	);
};

export default ChatInput;
