namespace rdb {

	namespace props {

		interface Table {
			data: any[];
			columns: { title: string, key: string; }[];
			callbacks?: { approval?: (id: string, row: rdb.row.System) => void; rejection?: (id: string, row: rdb.row.System) => void; };
			details?: boolean;
		}

		interface MainList {
			title: string;
			mainTable: string;
			moveTable: string;
			entriesPerPage: number;
		}

		interface ListDetail {
			colspan: number;
			row: any;
		}

		interface Pagination {
			current: number;
			min: number;
			max: number;
			entryCount: number;
			setPage: rdb.DispSet<number>;
		}

	}

}
