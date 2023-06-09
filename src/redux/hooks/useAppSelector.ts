import { RootState } from '@redux/store/store';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
