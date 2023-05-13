import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstanceModel } from '@shared/types/instanceModel';

const initialState: InstanceModel = {
	idInstance: undefined,
	apiToken: undefined,
};

const instanceSlice = createSlice({
	name: 'Instance',
	initialState,
	reducers: {
		setInstanceData: (state, action: PayloadAction<InstanceModel>) => {
			state.apiToken = action.payload.apiToken;
			state.idInstance = action.payload.idInstance;
		},
	},
});

export const instanceActions = instanceSlice.actions;
export default instanceSlice.reducer;
