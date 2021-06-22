import { Fragment, useCallback } from "react";

import { DatabaseClient } from "../../App";


export function Systems(): JSX.Element {
	const getEntries = useCallback(async () => {
		try {
			const { data, error } = await DatabaseClient.from("systems").select("*").limit(100).order("id", { ascending: false });
			if (error) throw error;

			console.log(data);
		}
		catch (error) { console.log(error); }
	}, []);

	return (
		<Fragment>
			<div>
				[Search Stuff]
			</div>

			<div>
				[Table]
			</div>
		</Fragment>
	);
}
