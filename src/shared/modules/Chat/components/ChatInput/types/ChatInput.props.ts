import { MessageModel } from '@shared/types/messageModel';
import { ControllerProps } from 'react-hook-form';

export interface IChatInputProps
	extends Partial<ControllerProps<MessageModel['textMessageData']>> {
	name: keyof MessageModel['textMessageData'];
	isInvalid: boolean;
	placeholder: string;
}
