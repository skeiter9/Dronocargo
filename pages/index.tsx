import { memo } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Section from 'components/Section';
import { SectionSubTitle, Caption, SectionTitle } from 'components/Typography';
import DeliveryLists from 'models/Delivery/components/DeliveryLists';
import DeliveryListHeader from 'models/Delivery/components/DeliveryListHeader';
import Avatar from 'components/Avatar';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dronocargo</title>
				<meta name='description' content='Dronocargo App' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section
				left={
					<SectionTitle className='dro-text-green'>Dronocargo</SectionTitle>
				}
				right={
					<div className='dro-flex dro-items-center'>
						<SectionSubTitle className='dro-text-black dro-mr-[10px]'>
							Regina Zepeda
						</SectionSubTitle>
						<Avatar />
					</div>
				}
			/>
			<DeliveryListHeader />
			<DeliveryLists className='dro-mt-6' />
			<Section
				className='dro-mt-12'
				left={<Caption>Powered By Nuvo Cargo</Caption>}
				right={<Caption>Help</Caption>}
			/>
		</>
	);
};

export default memo(Home);
