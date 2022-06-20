import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
	deleteAppliancesAction,
	getAppliancesAction,
	getRoomsAction,
} from 'store/actions';
import Form from 'components/form';
import './card.css';

function Card({ cardDetails }) {
	const [edit, setEdit] = useState(false);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const handleClick = () => {
		setShow(!show);
	};
	const handleEdit = () => {
		setEdit(edit => !edit);
	};
	const handleDelete = () => {
		dispatch(deleteAppliancesAction(cardDetails.id));
		dispatch(getAppliancesAction());
		dispatch(getRoomsAction());
		setShow(!show);
	};
	return (
		<div className='row'>
			<div className='card mb-3'>
				<div className='col-md-12 d-grid gap-2 d-md-flex justify-content-md-end p-2'>
					<FontAwesomeIcon icon={faEdit} onClick={handleEdit} />
					<FontAwesomeIcon icon={faTrashCan} onClick={handleClick} />
					<Modal show={show}>
						<Modal.Body>
							Are you sure you want to remove this appliances ?
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={handleDelete}>Delete</Button>
							<Button onClick={handleClick}>Cancel</Button>
						</Modal.Footer>
					</Modal>
				</div>
				<div className='row g-0'>
					<div className='col-md-4 p-2 centerAlign separator'>
						<img
							src='https://alanmajchrowicz.com/wp-content/uploads/2019/01/glacier_peak_image_lake_58240.jpg'
							className='img-fluid rounded-start cardImg'
							alt='...'
						/>
					</div>
					<div className='col-md-8'>
						{edit === true ? (
							<div>
								<Form field={cardDetails} cancelUpdate={handleEdit} />
							</div>
						) : (
							<div className='card-body'>
								<div className='col'>
									<label className='leftMargin'>Appliances Type</label>
									<span>{cardDetails?.type}</span>
								</div>
								<div className='col'>
									<label className='leftMargin'>Nickname</label>
									<span>{cardDetails?.nickname}</span>
								</div>
								{cardDetails?.properties?.map((res, index) => (
									<div className='col' key={index}>
										<label className='leftMargin'>{res.name}</label>
										<span>{`${res.value}`}</span>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
