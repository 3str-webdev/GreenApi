import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageModel } from '@shared/types/messageModel';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSend } from '../../hooks';
import ChatInput from '../ChatInput/ChatInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { ChatMessageFormSchema } from '../config';
import { IChatMessageFormProps } from './types/ChatMessageForm.props';

const ChatMessageForm: FC<IChatMessageFormProps> = ({ chatId }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<MessageModel['textMessageData']>({
		defaultValues: {
			textMessage: '',
		},
		resolver: yupResolver(ChatMessageFormSchema),
		mode: 'onSubmit',
	});

	const { send, process } = useSend({ chatId });

	const onSubmit: SubmitHandler<
		MessageModel['textMessageData']
	> = async data => {
		const messageData: MessageModel = {
			typeMessage: 'textMessage',
			textMessageData: data,
			sender: '',
		};

		await send(messageData);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputGroup>
				<ChatInput
					name="textMessage"
					placeholder="Введите сообщение..."
					isInvalid={Boolean(errors && errors.textMessage)}
					control={control}
				/>
				<InputRightElement>
					<SubmitButton
						isDisabled={!isValid}
						isLoading={process.isLoading}
					/>
				</InputRightElement>
			</InputGroup>
		</form>
	);
};

export default ChatMessageForm;
