import { createContext } from 'react';
import { DeliveryModel } from '../models/Delivery/Delivery';

export interface AppStore {
	sessionStartedAt?: Date;
	deliveries: DeliveryModel[];
}

export const initialAppStore = {
	deliveries: [],
};

const AppContext = createContext<AppStore>(initialAppStore);

export default AppContext;
