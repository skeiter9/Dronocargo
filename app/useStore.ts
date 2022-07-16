import { useContext } from 'react';
import AppContext from './App.context';

function useStore() {
	const store = useContext(AppContext);
	return store;
}

export default useStore;
