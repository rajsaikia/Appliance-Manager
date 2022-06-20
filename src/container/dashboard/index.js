import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'components/navbar';
import Rooms from 'components/rooms';
import Card from 'components/card';
import Appliances from 'components/appliances';
import useRoomSelector from 'selectors/roomSelector';
import useAppliancesSelector from 'selectors/appliancesSelector';
import useCardSelector from 'selectors/cardSelector';

function Dashboard() {
	const rooms = useSelector(useRoomSelector);
	const appliances = useSelector(useAppliancesSelector);
	const card = useSelector(useCardSelector);

	return (
		<div className='row'>
			<Navbar />
			<Rooms rooms={rooms} />
			<Card cardDetails={card} />
			<Appliances appliances={appliances} />
		</div>
	);
}

export default Dashboard;
