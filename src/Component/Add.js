import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { uuid } from "uuidv4";
import { v4 as uuid_v4 } from "uuid";
import { addTask } from "../Context/action.type";
import Context from "../Context/Context";

const Add = () => {
	let history = useHistory();
	const { dispatchDetails } = useContext(Context);
	const [name, setName] = useState("");

	const handelChange = (event) => {
		setName(event.target.value);
	};

	const onSave = (e) => {
		e.preventDefault();
		const newUser = {
			id: uuid_v4(),
			content: name,
		};
		dispatchDetails(addTask(newUser));
		history.push(`/`);
	};

	return (
		<>
			<h2 className='p-4'>Today's Task</h2>
			<div className='m-4'>
				<div className='card'>
					<div className='card-body'>
						<form>
							<div className='row'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											aria-describedby='emailHelp'
											id='name'
											placeholder='Enter Task Name'
											autoComplete='off'
											value={name}
											onChange={handelChange}
										/>
									</div>
								</div>
								<div className='col-md-6 text-left'>
									<button
										type='submit'
										className='btn btn-primary'
										onClick={onSave}>
										Add Task
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Add;
