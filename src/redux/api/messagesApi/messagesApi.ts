import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { host } from '../config';
import { sendMessage } from './endpoints/sendMessage';
import { receiveNotification } from './endpoints/receiveNotification';
import { deleteNotification } from './endpoints/deleteNotification';

export const messagesApi = createApi({
	reducerPath: 'MessagesApi',
	baseQuery: fetchBaseQuery({ baseUrl: host }),
	endpoints: build => ({
		sendMessage: sendMessage(build),
		receiveNotification: receiveNotification(build),
		deleteNotification: deleteNotification(build),
	}),
});
