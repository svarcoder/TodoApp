import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./HomeRoute/HomeRoute";
import MainProvider from "./Context/Provider";

function App() {
	return (
		<div className='App'>
			<MainProvider>
				<BrowserRouter>
					<HomeRoute />
				</BrowserRouter>
			</MainProvider>
		</div>
	);
}

export default App;
