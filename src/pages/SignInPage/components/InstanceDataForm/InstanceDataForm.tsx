import { Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InstanceDataFormSchema } from '@pages/SignInPage/config';
import { useAppDispatch } from '@redux/hooks';
import { instanceActions } from '@redux/store/slices/instanceSlice';
import { InstanceModel } from '@shared/types/instanceModel';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InstanceDataFormInput from '../InstanceDataFormInput/InstanceDataFormInput';
import SubmitButton from '../SubmitButton/SubmitButton';

const InstanceDataForm: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<InstanceModel>({
		defaultValues: {
			idInstance: '',
			apiToken: '',
		},
		resolver: yupResolver(InstanceDataFormSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<InstanceModel> = data => {
		dispatch(instanceActions.setInstanceData(data));
		navigate('/', { replace: true });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2}>
				<InstanceDataFormInput
					isInvalid={Boolean(errors && errors.idInstance)}
					name={'idInstance'}
					control={control}
				/>

				<InstanceDataFormInput
					isInvalid={Boolean(errors && errors.apiToken)}
					name={'apiToken'}
					control={control}
				/>
				<SubmitButton isDisabled={!isValid} />
			</Stack>
		</form>
	);
};

export default InstanceDataForm;
