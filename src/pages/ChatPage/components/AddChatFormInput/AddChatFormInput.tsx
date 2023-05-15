import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { IAddChatFormInputProps } from './types/AddChatFormInput.props';

const AddChatFormInput: FC<IAddChatFormInputProps> = ({
	name,
	placeholder,
	isInvalid,
	...props
}) => {
	return (
		<Controller
			{...props}
			name={name}
			render={({ field }) => (
				<InputGroup>
					<InputLeftAddon>+</InputLeftAddon>
					<Input
						placeholder={placeholder}
						isInvalid={isInvalid}
						errorBorderColor="red.300"
						focusBorderColor={isInvalid ? 'red.300' : ''}
						{...field}
					/>
				</InputGroup>
			)}
		/>
	);
};

export default AddChatFormInput;
