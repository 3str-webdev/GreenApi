import { FC } from 'react';
import { IInstanceDataFormInputProps } from './types/InstanceDataFormInput.props';
import { Controller } from 'react-hook-form';
import { Input } from '@chakra-ui/react';

const InstanceDataFormInput: FC<IInstanceDataFormInputProps> = ({
	isInvalid,
	name,
	...props
}) => {
	return (
		<Controller
			{...props}
			name={name}
			render={({ field }) => (
				<Input
					placeholder={name}
					isInvalid={isInvalid}
					errorBorderColor="red.300"
					focusBorderColor={isInvalid ? 'red.300' : ''}
					{...field}
				/>
			)}
		/>
	);
};

export default InstanceDataFormInput;
