import { Card, CardHeader, Heading, CardBody } from '@chakra-ui/react';
import { FC } from 'react';
import InstanceDataForm from '../InstanceDataForm/InstanceDataForm';

const InstanceCard: FC = () => {
	return (
		<Card>
			<CardHeader>
				<Heading size={'md'}>Введите данные вашего инстанса</Heading>
			</CardHeader>
			<CardBody>
				<InstanceDataForm />
			</CardBody>
		</Card>
	);
};

export default InstanceCard;
