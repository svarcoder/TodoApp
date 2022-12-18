/** @format */

import { TODAYS_TASK } from "./action.type";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	const { task } = action;

	switch (action.type) {
		case TODAYS_TASK:
			let toDo = state.items;

			toDo[0].items = [...toDo[0].items, task];

			return {
				...state,
				items: toDo,
			};

		default:
			return state;
	}
};
