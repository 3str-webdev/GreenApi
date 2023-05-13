import { useAppSelector } from '@redux/hooks';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const RequiredAuth: FC<{ children: ReactNode }> = ({ children }) => {
	const { idInstance, apiToken } = useAppSelector(
		state => state.instanceReducer
	);

	if (!(idInstance && apiToken)) {
		return (
			<Navigate
				to={'/sign-in'}
				state={'Инстанс не авторизован'}
				replace
			/>
		);
	}

	return <>{children}</>;
};

export default RequiredAuth;
