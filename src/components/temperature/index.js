import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';
function Temperature({ register, value, name, setValue }) {
	const [temperature, setTemperature] = useState(value);
	setValue(`${name}`, temperature);
	const incrimentTemperature = () => {
		setTemperature(temperature => temperature + 1);
	};
	const decrimentTemperature = () => {
		setTemperature(temperature => temperature - 1);
	};

	return (
		<>
			<span {...register(`${name}`)} name={name}>
				{temperature}
			</span>
			<span className='left-margin'>F</span>
			<FontAwesomeIcon
				icon={faCirclePlus}
				onClick={incrimentTemperature}
				className='left-margin'
			/>
			<FontAwesomeIcon
				icon={faCircleMinus}
				onClick={decrimentTemperature}
				className='left-margin'
			/>
		</>
	);
}

export default Temperature;
