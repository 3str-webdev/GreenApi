import ChatPage from '@pages/ChatPage/ChatPage';
import SignInPage from '@pages/SignInPage/SignInPage';
import RequiredInstanceData from '@shared/hoc/RequiredInstanceData/RequiredInstanceData';
import Chat from '@shared/modules/Chat/Chat';
import { createHashRouter } from 'react-router-dom';
import Root from './Root';

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
				path: '/',
				element: (
					<RequiredInstanceData>
						<ChatPage />
					</RequiredInstanceData>
				),
				children: [
					{
						path: ':chatId',
						element: <Chat />,
					},
				],
			},
		],
	},
]);
