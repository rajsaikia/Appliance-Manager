import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editAppliancesAction } from 'store/actions';
import Checkbox from 'components/checkbox';
import Temperature from 'components/temperature';
import './form.css';
function Form({ field, cancelUpdate }) {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		const payload = {
			id: field.id,
			...data,
		};
		dispatch(editAppliancesAction(payload));
		cancelUpdate();
	};

	const formField = res => {
		if (res.type === 'select') {
			return (
				<div className='row mb-3'>
					<label htmlFor='inputEmail3' className='col-sm-6 col-form-label'>
						{res.name}
					</label>
					<div className='col-sm-6'>
						<select {...register(`${res.name}`)} className='form-select'>
							{res.options.map((data, i) => {
								return (
									<option key={i} value={`${data}`}>
										{data}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			);
		} else if (res.type === 'toggle') {
			return (
				<div className='row mb-3'>
					<label
						className='form-check-label col-sm-6 col-form-label'
						htmlFor='mySwitch'
					>
						{res.name}
					</label>

					<div className='col-sm-6 form-check form-switch section paddingLeft'>
						<Checkbox res={res} register={register} setValue={setValue} />
					</div>
				</div>
			);
		} else if (res.type === 'temperature') {
			return (
				<div className='row mb-3'>
					<label htmlFor='inputEmail3' className='col-sm-6 col-form-label'>
						{res.name}
					</label>
					<div className='col-sm-6'>
						<Temperature
							value={res.value}
							setValue={setValue}
							name={res.name}
							register={register}
						/>
					</div>
				</div>
			);
		}
	};
	return (
		<div className='card-body'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{field.nickname && (
					<div className='row mb-3'>
						<label htmlFor='inputEmail3' className='col-sm-6 col-form-label'>
							Nickname
						</label>
						<div className='col-sm-6'>
							<input defaultValue={field.nickname} {...register('nickname')} />
						</div>
					</div>
				)}
				{field?.properties?.map((res, index) => {
					return <div key={index}>{formField(res)}</div>;
				})}

				<div className='rightAlign'>
					<button type='submit' className='btn btn-primary'>
						Apply
					</button>
					<button
						type='submit'
						className='btn btn-outline-secondary marginLeft'
						onClick={cancelUpdate}
					>
						cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
