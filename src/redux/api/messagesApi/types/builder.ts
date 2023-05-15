import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export type BuilderType = EndpointBuilder<
	BaseQueryFn<
		string | FetchArgs,
		unknown,
		FetchBaseQueryError,
		NonNullable<unknown>,
		FetchBaseQueryMeta
	>,
	never,
	'MessagesApi'
>;
