import { useCallback } from 'react';
import createDelivery from './createDelivery';
import getAll from './getDelivery';

function useDelivery() {
	return {
		create: useCallback(createDelivery, []),
		getAll: useCallback(getAll, []),
	};
}

export default useDelivery;
