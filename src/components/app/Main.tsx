import { Switch, Route } from "react-router-dom";

import { Systems } from "./main/Systems";
import { SubmitSystem } from "./main/SubmitSystem";
import { Home } from "./main/Home";

export function Main(): JSX.Element {
	return (
		<Switch>
			<Route path="/systems"><Systems /></Route>
			<Route path="/submit_system"><SubmitSystem /></Route>

			<Route path="/"><Home /></Route>
		</Switch>
	);
}
