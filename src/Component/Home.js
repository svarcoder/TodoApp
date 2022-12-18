import React from "react";
import { Link } from "react-router-dom";
import Board from "./Board";

const Home = () => {
	return (
		<>
			<h2>ToDo App</h2>
			<div>
				<h2 className='col-md-12 text-left'>
					<Link to='/add'>
						<button type='button' className='btn btn-outline-danger'>
							ADD
						</button>
					</Link>
				</h2>
			</div>
			<div className='col-md-12'>
				<div className='card'>
					<div className='card-body'>
						<Board />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
