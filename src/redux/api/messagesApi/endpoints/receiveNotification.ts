import { InstanceModel } from '@shared/types/instanceModel';
import { BuilderType } from '../types/builder';
import { NotificationModel } from '@shared/types/notificationModel';

export const receiveNotification = (build: BuilderType) => {
	return build.query<NotificationModel | null, InstanceModel>({
		query: ({ idInstance, apiToken }) => ({
			url: `waInstance${idInstance}/receiveNotification/${apiToken}`,
		}),
	});
};
