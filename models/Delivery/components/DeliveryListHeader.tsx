import TextInput from 'components/TextInput';
import Section from 'components/Section';
import { HeaderTitle } from 'components/Typography';
import { SearchIcon } from '@heroicons/react/solid';
import Button from 'components/Button';
import React, { useState } from 'react';
import CreateDeliveryForm from './CreateDeliveryForm';
import useDispacth from 'app/useDispacth';
import { DeliveryActionTypes } from '../deliveryReducer';

function DeliveryListHeader() {
	const [showModalCreateDelivery, setShowModalCreateDelivery] = useState(false);
	const dispatch = useDispacth();
	const [text, setText] = useState('');
	return (
		<>
			<Section
				left={
					<HeaderTitle className='sm:dro-w-96'>
						Delivery <span className='dro-opacity-50'>History</span>
					</HeaderTitle>
				}
				right={
					<div className='dro-flex dro-items-center'>
						<TextInput
							label='search'
							hideLabel
							icon={<SearchIcon />}
							placeholder='Search'
							value={text}
							wapperClassName='sm:dro-w-60'
							onChange={(e) => {
								const searchText = e.target.value;
								setText(searchText);
								dispatch({
									type: DeliveryActionTypes.SEARCH_DELIVERY,
									payload: { searchText },
								});
							}}
						/>
						<Button
							variant='primary'
							className='dro-ml-4'
							onClick={() => setShowModalCreateDelivery(true)}>
							New delivery
						</Button>
					</div>
				}
			/>
			<CreateDeliveryForm
				isOpen={showModalCreateDelivery}
				ontoggle={setShowModalCreateDelivery}
			/>
		</>
	);
}

export default DeliveryListHeader;
