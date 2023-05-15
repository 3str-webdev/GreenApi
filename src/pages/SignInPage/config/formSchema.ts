import { InstanceModel } from '@shared/types/instanceModel';
import * as yup from 'yup';

export const InstanceDataFormSchema = yup
	.object<InstanceModel>({
		idInstance: yup.string().required(),
		apiToken: yup.string().required(),
	})
	.required();
