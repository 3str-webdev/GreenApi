import { createHashRouter } from 'react-router-dom';
import Root from './Root';
import SignInPage from '@pages/SignInPage/SignInPage';
import ChatPage from '@pages/ChatPage/ChatPage';
import RequiredAuth from '@shared/hoc/RequiredAuth/RequiredAuth';

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'sign-in',
				element: <SignInPage />,
			},
			{
				index: true,
				element: (
					<RequiredAuth>
						<ChatPage />,
					</RequiredAuth>
				),
			},
		],
	},
]);
