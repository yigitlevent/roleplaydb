import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { RoutesArray } from "../../data/Data";

import { MainList } from "./main/MainList";
import { QueueList } from "./main/QueueList";

import { Account } from "./main/Account";
import { Home } from "./main/Home";

export function Main(): JSX.Element {
	const entriesPerPage = 100;

	const routes = RoutesArray.map((v) => {
		return (
			<Fragment key={v.singular}>
				<Route path={`/${v.plural.toLowerCase()}/submit`}>
					{v.submit}
				</Route>

				<Route path={`/${v.plural.toLowerCase()}/queue`}>
					<QueueList
						title={`${v.singular} Submissions`}
						mainTable={`submitted_${v.plural.toLowerCase()}`}
						moveTable={v.plural.toLowerCase()}
						entriesPerPage={entriesPerPage}
					/>
				</Route>

				<Route path={`/${v.plural.toLowerCase()}/list`}>
					<MainList
						title={v.plural}
						mainTable={v.plural.toLowerCase()}
						moveTable={`submitted_${v.plural.toLowerCase()}`}
						entriesPerPage={entriesPerPage}
					/>
				</Route>
			</Fragment>
		);
	});

	return (
		<Switch>
			{routes}

			<Route path="/account"><Account /></Route>

			<Route path="/"><Home /></Route>
		</Switch>
	);
}
