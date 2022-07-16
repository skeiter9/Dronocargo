import { useCallback, useContext, useMemo } from 'react';
import AppDispatchContext from './App.dispatch';

function useDispacth() {
	const dispatch = useContext(AppDispatchContext);
	const _dispatch = useMemo(() => dispatch, [dispatch]);
	return _dispatch;
}

export default useDispacth;
