import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { instanceApi } from '@redux/api/instanceApi/instanceApi';
import instanceSlice from './slices/instanceSlice';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
	instanceReducer: instanceSlice,
	authReducer: authSlice,
	[instanceApi.reducerPath]: instanceApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(instanceApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
