import { AddChatFormModel } from '@pages/ChatPage/types/AddChatFormModel';
import { ControllerProps } from 'react-hook-form';

export interface IAddChatFormInputProps
	extends Partial<ControllerProps<AddChatFormModel>> {
	name: keyof AddChatFormModel;
	placeholder: string;
	isInvalid?: boolean;
}
