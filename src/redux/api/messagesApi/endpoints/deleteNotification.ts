import { InstanceModel } from '@shared/types/instanceModel';
import { BuilderType } from '../types/builder';

interface IDeleteNotificationArgs {
	instanceData: InstanceModel;
	receiptId: number;
}

export const deleteNotification = (build: BuilderType) => {
	return build.query({
		query: ({ instanceData, receiptId }: IDeleteNotificationArgs) => ({
			url: `waInstance${instanceData.idInstance}/deleteNotification/${instanceData.apiToken}/${receiptId}`,
			method: 'DELETE',
		}),
	});
};
