import '../styles/fonts.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext, { initialAppStore } from '../app/App.context';
import AppDispatchContext from '../app/App.dispatch';
import appReducer from '../app/App.reducer';
import {
	memo,
	useEffect,
	useReducer,
	useRef,
	useMemo,
	useCallback,
} from 'react';
import { AppActionTypes } from '../app/App.actions';

function MyApp({ Component, pageProps }: AppProps) {
	const reducer = useCallback(appReducer, []);
	const [state, dispatch] = useReducer(reducer, initialAppStore);
	const isReady = useRef(false); // React 18 needs this trick to render just once
	useEffect(() => {
		if (isReady.current) return;
		isReady.current = true;
		dispatch({
			type: AppActionTypes.INIT,
			payload: { sessionStartedAt: new Date() },
		});
	}, []);
	return (
		<AppDispatchContext.Provider value={dispatch}>
			<AppContext.Provider value={state}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</AppDispatchContext.Provider>
	);
}

export default memo(MyApp);
