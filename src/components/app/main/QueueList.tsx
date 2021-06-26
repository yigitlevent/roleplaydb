import { useCallback, useEffect, useState } from "react";

import { Box } from "../../shared/Box";
import { Header1 } from "../../shared/Headers";
import { Table } from "../../shared/Table";
import { Divider } from "../../shared/Divider";
import { Pagination } from "../../shared/Pagination";

import { DatabaseClient } from "../../App";

export function QueueList({ title, mainTable, moveTable, entriesPerPage }: rdb.props.MainList): JSX.Element {
	const [count, setCount] = useState(-1);
	const [page, setPage] = useState(1);
	const [list, setList] = useState<any[]>([]);

	const getEntries = useCallback(async () => {
		try {
			const { data, error, count } = await DatabaseClient.from(mainTable)
				.select("*", { count: "exact" }).order("id", { ascending: true })
				.range(entriesPerPage * (page - 1), (entriesPerPage - 1) * page);

			if (error) throw error;
			if (data) setList(data);
			if (count) setCount(count);
		}
		catch (error) { console.log(error); }
	}, [entriesPerPage, mainTable, page]);

	const approval = useCallback(async (id: string, row: rdb.row.System): Promise<void> => {
		try {
			const { error: deletionError } = await DatabaseClient.from(mainTable).delete().match({ id });
			if (deletionError) throw deletionError;

			const { error: insertionError } = await DatabaseClient.from(moveTable).insert(row);
			if (insertionError) throw insertionError;
		}
		catch (error) { console.log(error); }
	}, [mainTable, moveTable]);

	const rejection = useCallback(async (id: string, row: rdb.row.System): Promise<void> => {
		try {
			if (row) {
				const { error } = await DatabaseClient.from(mainTable).delete().match({ id });
				if (error) throw error;
			}
		}
		catch (error) { console.log(error); }
	}, [mainTable]);

	useEffect(() => {
		getEntries();
	}, [getEntries]);

	return (
		<Box>
			<Header1>{title}</Header1>

			<div>[Search Stuff]</div>

			<Divider />

			<Table
				data={list}
				columns={[
					{ title: "Name", key: "name" },
					{ title: "Submitted By", key: "submitted_by" },
					{ title: "Submitted At", key: "submitted_at" }
				]}
				callbacks={{ approval, rejection }}
				details
			/>

			<Pagination current={page} min={1} max={Math.max(1, Math.ceil(count / entriesPerPage))} entryCount={count} setPage={setPage} />
		</Box>
	);
}
