import { Paragraph } from 'components/Typography';
import { SubmitHandler } from 'react-hook-form';
import FormItem from 'components/FormItem';
import Form from 'components/Form';
import { DeliveryForm, Delivery, DeliveryModel } from '../Delivery';
import FormItemSelect from 'components/FormItemSelect';
import db from '../../../db/db.json';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { v4 as uuidv4 } from 'uuid';
import useDispatch from 'app/useDispacth';
import { DeliveryActionTypes } from '../deliveryReducer';
import React, { useState } from 'react';

interface CreateDeliveryFormProps {
	isOpen: boolean;
	ontoggle: (toggle: boolean) => void;
	item?: DeliveryModel | null;
}

function CreateDeliveryForm({
	ontoggle,
	isOpen,
	item,
}: CreateDeliveryFormProps) {
	const dispatch = useDispatch();
	const [defaultOrderId, setDefaultOrderId] = useState('');

	const technicians = db.technicians;
	const platforms = db.platforms;
	const drones = db.drones;
	const availableTechnicians = technicians.map(({ id, name }) => ({
		key: id,
		label: name,
	}));
	const availablePlatforms = platforms.map(({ id, name }) => ({
		key: id,
		label: name,
	}));
	const availableDrones = drones.map(({ id, serial }) => ({
		key: id,
		label: serial,
	}));
	const close = () => {
		setDefaultOrderId('');
		ontoggle(false);
	};
	const onSubmit: SubmitHandler<DeliveryForm> = (data) => {
		const _item: Delivery = {
			...data,
			id: item ? item.id : uuidv4(),
			status: 'Ready', // TODO: hard coded
			technicalCheck: 'Passed', // TODO: hard coded
		};
		dispatch({
			type: item
				? DeliveryActionTypes.UPDATE_DELIVERY
				: DeliveryActionTypes.SAVE_DELIVERY,
			payload: { item: _item },
		});
		close();
	};
	return (
		<Form
			onSubmit={onSubmit}
			onError={(error) => {
				alert(error.message);
			}}
			schema={DeliveryForm}>
			<Modal
				isOpen={isOpen}
				title='New delivery'
				onClose={close}
				className='sm:dro-w-[567px] sm:dro-mx-auto'>
				<Paragraph>
					Please select the order ID and a technician to deploy the cargo. All
					elements are mandatory.
				</Paragraph>
				<div className='dro-flex dro-items-center dro-mb-4 dro-mt-7 dro-space-x-6'>
					<FormItem
						name='orderId'
						label='Order ID'
						defaultValue={item?.orderId ?? defaultOrderId}
						wapperClassName='dro-flex-1'
					/>
					<FormItemSelect
						label='Technician'
						name='technicianId'
						items={availableTechnicians}
						defaultValue={item?.technician.id || availableTechnicians[0]?.key}
						wapperClassName='dro-flex-1'
					/>
				</div>
				<div className='dro-flex dro-items-center dro-mb-4 dro-mt-7 dro-space-x-6'>
					<FormItemSelect
						label='Platform'
						name='platformId'
						items={availablePlatforms}
						defaultValue={item?.platform.id || availablePlatforms[0]?.key}
						wapperClassName='dro-flex-1'
					/>
					<FormItemSelect
						label='Drone'
						name='droneId'
						items={availableDrones}
						defaultValue={item?.drone.id || availableDrones[0]?.key}
						wapperClassName='dro-flex-1'
					/>
				</div>
				<div
					className={
						'dro-flex dro-border-t dro-pt-6 dro-justify-end dro-relative -dro-left-6 dro-pr-6 dro-w-[calc(100%+48px)] dro-mt-12'
					}>
					<Button onClick={close} variant='secondary' className='dro-mr-4'>
						Cancel
					</Button>
					<Button type='submit'>
						{item ? 'Update' : 'Create new'} Delivery
					</Button>
				</div>
			</Modal>
		</Form>
	);
}

export default CreateDeliveryForm;
