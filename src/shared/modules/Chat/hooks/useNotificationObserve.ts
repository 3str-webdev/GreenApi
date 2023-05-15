import { messagesApi } from '@redux/api';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { chatsActions } from '@redux/store/slices/chatsSlice';
import { NotificationModel } from '@shared/types/notificationModel';
import { useCallback, useEffect } from 'react';

export const useNotificationObserve = () => {
	const dispatch = useAppDispatch();
	const instanceData = useAppSelector(state => state.instanceReducer);

	const { data: notification } = messagesApi.useReceiveNotificationQuery(
		instanceData,
		{ pollingInterval: 1000 }
	);

	const [deleteNotificationQuery] =
		messagesApi.useLazyDeleteNotificationQuery();

	const deleteNotification = useCallback(
		(notification: NotificationModel) => {
			deleteNotificationQuery({
				receiptId: notification.receiptId,
				instanceData,
			});
		},
		[deleteNotificationQuery, instanceData]
	);

	const addMessage = useCallback(
		(notification: NotificationModel) => {
			console.log('Add Notification: ', notification.receiptId);
			dispatch(
				chatsActions.addMessage({
					chatId: notification.body.senderData?.chatId ?? '',
					message: {
						...notification.body.messageData,
						sender: notification.body.senderData.chatId,
					},
				})
			);
		},
		[dispatch]
	);

	useEffect(() => {
		if (!notification) return;
		if (notification.body.typeWebhook !== 'incomingMessageReceived') return;
		if (notification.body.messageData.typeMessage !== 'textMessage') return;

		addMessage(notification);
		deleteNotification(notification);
	}, [notification, addMessage, deleteNotification]);
};
