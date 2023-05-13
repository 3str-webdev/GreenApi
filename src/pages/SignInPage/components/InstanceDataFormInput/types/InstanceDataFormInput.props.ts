import { InstanceModel } from '@shared/types/instanceModel';
import { ControllerProps } from 'react-hook-form';

export interface IInstanceDataFormInputProps
	extends Partial<ControllerProps<InstanceModel>> {
	name: keyof InstanceModel;
	isInvalid?: boolean;
}
