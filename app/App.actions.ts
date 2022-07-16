export enum AppActionTypes {
	INIT = 'INIT',
}

export interface AppAction {
	type: AppActionTypes;
	payload: {
		sessionStartedAt?: Date;
	};
}
