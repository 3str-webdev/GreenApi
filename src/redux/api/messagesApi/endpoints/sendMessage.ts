import { InstanceModel } from '@shared/types/instanceModel';
import { BuilderType } from '../types/builder';
import { ChatModel } from '@shared/types/chatModel';
import { SendMessageResponseModel } from '@shared/types/sendMessageResponseModel';

interface IQueryArgs {
	instanceData: InstanceModel;
	chatId: ChatModel['chatId'];
	message: string;
}

export const sendMessage = (build: BuilderType) => {
	return build.mutation<SendMessageResponseModel, IQueryArgs>({
		query: args => ({
			url: `waInstance${args.instanceData.idInstance}/sendMessage/${args.instanceData.apiToken}`,
			method: 'POST',
			body: {
				chatId: `${args.chatId}`,
				message: args.message,
			},
		}),
	});
};
