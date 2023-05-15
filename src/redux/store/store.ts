import { messagesApi } from '@redux/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatsSlice from './slices/chatsSlice';
import instanceSlice from './slices/instanceSlice';

const rootReducer = combineReducers({
	instanceReducer: instanceSlice,
	chatsReducer: chatsSlice,
	[messagesApi.reducerPath]: messagesApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(messagesApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
