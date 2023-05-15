import { Button, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddChatFormSchema } from '@pages/ChatPage/config/formSchema';
import { AddChatFormModel } from '@pages/ChatPage/types/AddChatFormModel';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AddChatFormInput from '../AddChatFormInput/AddChatFormInput';
import { useAddChat } from '@pages/ChatPage/hooks/useAddChat';
import { getChatIdFromPhone } from '@shared/utils/getChatIdFromPhone';
import { IAddChatFormProps } from './types/AddChatForm.props';

const AddChatForm: FC<IAddChatFormProps> = ({ onSubmitCb }) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<AddChatFormModel>({
		defaultValues: {
			phone: '',
		},
		resolver: yupResolver(AddChatFormSchema),
		mode: 'onBlur',
	});

	const addChat = useAddChat();

	const onSubmit: SubmitHandler<AddChatFormModel> = data => {
		console.log(data);
		addChat(getChatIdFromPhone(data.phone));
		onSubmitCb();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack gap={2}>
				<AddChatFormInput
					placeholder="Телефон"
					name={'phone'}
					control={control}
					isInvalid={Boolean(errors && errors.phone)}
				/>
				<Button
					type="submit"
					colorScheme="teal"
				>
					Сохранить
				</Button>
			</Stack>
		</form>
	);
};

export default AddChatForm;
