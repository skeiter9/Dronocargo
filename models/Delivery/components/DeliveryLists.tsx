import { useState } from 'react';
import Button from '../../../components/Button';
import List from '../../../components/List';
import ListItem from '../../../components/ListItem';
import { DeliveryModel } from '../Delivery';
import Dropdown from '../../../components/Dropdown';
import useStore from '../../../app/useStore';
import useDispatch from '../../../app/useDispacth';
import { DeliveryActionTypes } from '../deliveryReducer';
import CreateDeliveryForm from './CreateDeliveryForm';
import Modal from '../../../components/Modal';
import { Caption, ListItemText, ListItemTitle } from 'components/Typography';
import clsx from 'clsx';

interface DeliveryListsProps {
	className?: string;
}

function DeliveryLists({ className }: DeliveryListsProps) {
	const [showModalEditDelivery, setShowModalEditDelivery] = useState(false);
	const [detailItem, setDetailItem] = useState<DeliveryModel | null>(null);
	const [editItem, setEditItem] = useState<DeliveryModel | null>(null);
	const { deliveries: items } = useStore();
	const dispatch = useDispatch();
	const onRemove = (id: string) =>
		dispatch({
			type: DeliveryActionTypes.REMOVE_DELIVERY,
			payload: { id },
		});
	return (
		<section className={clsx('dro-container dro-mx-auto', className)}>
			<List>
				{items.map((item) => (
					<ListItem key={item.id} className='dro-flex'>
						<ListItemSection title='Status' text={item.status} textBold />
						<ListItemSection title='Order ID' text={item.orderId} />
						<ListItemSection title='Technician' text={item.technician.name} />
						<ListItemSection title='Platform' text={item.platform.name} />
						<ListItemSection title='Drone' text={item.drone.serial} />
						<ListItemSection
							title='Technical check'
							text={item.technicalCheck}
						/>
						<div className='dro-flex dro-items-center'>
							<Button
								onClick={() => setDetailItem(item)}
								variant='secondary'
								className='dro-mr-4'>
								<span className='dro-mr-[10px]'>Details</span> <DetailIcon />
							</Button>

							<Dropdown.Menu buttonText='Actions'>
								<Dropdown.Item>
									<button
										onClick={() => {
											setEditItem(item);
											setShowModalEditDelivery(true);
										}}>
										Edit
									</button>
								</Dropdown.Item>
								<Dropdown.Item>
									<button onClick={onRemove.bind(null, item.id)}>Remove</button>
								</Dropdown.Item>
							</Dropdown.Menu>
						</div>
					</ListItem>
				))}
			</List>
			<CreateDeliveryForm
				isOpen={showModalEditDelivery}
				ontoggle={setShowModalEditDelivery}
				item={editItem}
			/>
			<Modal
				isOpen={!!detailItem}
				title='Detail'
				onClose={() => setDetailItem(null)}
				className='sm:dro-max-w-lg dro-mx-auto dro-items-center dro-justify-between'>
				<h2>Details {detailItem?.orderId} </h2>
			</Modal>
		</section>
	);
}

export default DeliveryLists;

interface ListItemSectionProps {
	title: string;
	text: string;
	textBold?: boolean;
}

function ListItemSection({ title, text, textBold }: ListItemSectionProps) {
	return (
		<div className='dro-mr-11 dro-py-8 dro-flex-1'>
			<ListItemTitle className='dro-block dro-opacity-50'>
				{title}
			</ListItemTitle>
			<ListItemText
				className={clsx('dro-block', textBold ? '!dro-font-medium' : '')}>
				{text}
			</ListItemText>
		</div>
	);
}

function DetailIcon() {
	return (
		<svg
			width='20'
			height='16'
			viewBox='0 0 20 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M-6.10352e-05 0V16H19.9999V0H-6.10352e-05ZM17.9999 4.67H15.4999V2H17.9999V4.67ZM15.4999 6.67H17.9999V9.34H15.4999V6.67ZM1.99994 2H13.4999V14H1.99994V2ZM15.4999 14V11.33H17.9999V14H15.4999Z'
				fill='black'
				fillOpacity='0.25'
			/>
		</svg>
	);
}
