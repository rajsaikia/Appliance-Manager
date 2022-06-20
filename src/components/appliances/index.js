import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeAppliancesAction, addAppliancesAction } from 'store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import useSelectorRoom from 'selectors/selectedRoom';
import useSelectedAppliancesIndex from 'selectors/defaultAppliancesIndex';

import './appliances.css';

function Appliances({ appliances }) {
	const selectedRoom = useSelector(useSelectorRoom);
	const selectedAppliancesIndex = useSelector(useSelectedAppliancesIndex);
	const [active, setActive] = useState(selectedAppliancesIndex);
	useEffect(() => {
		setActive(selectedAppliancesIndex);
	}, [selectedAppliancesIndex]);
	const dispatch = useDispatch();
	const handleAppliancesChange = (index, res) => {
		setActive(Number(index));
		dispatch(changeAppliancesAction({ id: res, index: Number(index) }));
	};
	const addAppliances = () => {
		const data = {
			id: selectedRoom,
		};
		dispatch(addAppliancesAction(data));
	};
	return (
		<div className='row'>
			{appliances.map((res, index) => (
				<div
					className={
						Number(active) === index
							? 'card mb-3 cardSection selected'
							: 'card mb-3 cardSection'
					}
					onClick={() => handleAppliancesChange(index, res.id)}
					key={index}
				>
					<div className='row g-0'>
						<div className='col-md-4 right-2'>
							<img
								style={{ height: '50px', marginTop: '10px' }}
								src='https://alanmajchrowicz.com/wp-content/uploads/2019/01/glacier_peak_image_lake_58240.jpg'
								className='img-fluid rounded-start'
								alt='...'
							/>
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<h6 className='card-title' style={{ fontSize: '12px' }}>
									{res.nickname}
								</h6>
								<h6 className='card-title' style={{ fontSize: '12px' }}>
									online
								</h6>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className='card mb-3 cardSection'>
				<FontAwesomeIcon
					icon={faCirclePlus}
					className='addItem'
					onClick={addAppliances}
				/>
			</div>
		</div>
	);
}

export default Appliances;
