import React, { useState } from 'react';

function Checkbox({ register, res }) {
	const [data, setData] = useState(res.value);
	const handleChange = event => {
		setData(data => !data);
	};
	return (
		<input
			type='checkbox'
			className='form-check-input'
			name={res.name}
			{...register(`${res.name}`)}
			id='selectTc'
			onClick={handleChange}
			checked={data ? true : false}
		/>
	);
}

export default Checkbox;
