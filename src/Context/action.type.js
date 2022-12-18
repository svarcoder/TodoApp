/** @format */

export const TODAYS_TASK = "TODAYS_TASK";

export const addTask = (task) => {
	return {
		type: TODAYS_TASK,
		task,
	};
};
