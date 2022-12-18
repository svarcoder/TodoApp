import React, { useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";

let initialState = {
	task: null,
	items: {
		0: {
			name: "Today's Task",
			items: [],
		},
		1: {
			name: "Pending",
			items: [],
		},
		2: {
			name: "Abandon",
			items: [],
		},
		3: {
			name: "Completed",
			items: [],
		},
		4: {
			name: "In Progress",
			items: [],
		},
	},
};

export default function MainProvider(props) {
	const [details, dispatchDetails] = useReducer(Reducer, initialState);

	return (
		<Context.Provider
			value={{
				details,
				dispatchDetails,
			}}>
			{props.children}
		</Context.Provider>
	);
}
