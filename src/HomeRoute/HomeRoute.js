import React from "react";
import { Route, Switch } from "react-router-dom";
import Add from "../Component/Add";
import Home from "../Component/Home";

const HomeRoute = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/add' component={Add} />
			</Switch>
		</>
	);
};

export default HomeRoute;
