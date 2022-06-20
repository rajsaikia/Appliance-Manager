import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRoomsAction } from 'store/actions';
import './room.css';

function Rooms({ rooms }) {
	const [active, setActive] = useState(
		Number(process.env.REACT_APP_SELECTED_ID)
	);
	const dispatch = useDispatch();
	const handleRoomChange = (e, res) => {
		setActive(Number(e.target.value));
		dispatch(changeRoomsAction(res));
	};
	return (
		<div className='row'>
			<div className='d-grid gap-2 d-md-flex justify-content-md-start roomSection'>
				{rooms.map((res, index) => (
					<button
						type='button'
						key={index}
						className={
							active === index
								? 'btn btn-outline-warning'
								: 'btn btn-outline-secondary'
						}
						onClick={e => handleRoomChange(e, res)}
						value={index}
					>
						{res.name}
					</button>
				))}
			</div>
		</div>
	);
}

export default Rooms;
