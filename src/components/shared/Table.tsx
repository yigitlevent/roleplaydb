import { useCallback, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { Icon } from "./Icon";
import { ListDetail } from "./ListDetail";

const TableWrapper = styled.table`
	width: 100%;
	padding: 2px;
`;

const TableHeadWrapper = styled.thead`
	& > * {
		background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level4};
	}
`;

const TableBodyWrapper = styled.tbody`
	&:nth-child(2n) > * {
		background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level3};
	}

	&:nth-child(2n+1) > * {
		background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level2};
	}

	&:nth-child(2n+1) > *, &:nth-child(2n) > * {
		&:hover {
			filter: brightness(120%);
		}
	}
`;

export const TableRowWrapper = styled.tr`
`;

const TableColumnWrapper = styled.td`
	text-align: center;

	&:first-child {
		cursor: pointer;
		text-align: left;
	}
`;

const TableHeaderWrapper = styled.th`
	font-weight: bold;
	text-align: center;
	border-bottom: ${(props: rdb.theme.StyleProps) => props.theme.borders.level2};

	&:first-child {
		text-align: left;
	}
`;

export function Table({ data, columns, callbacks, details }: rdb.props.Table): JSX.Element {
	dayjs.extend(utc);
	dayjs.extend(timezone);

	const [openRowID, setOpenRowID] = useState(-1);

	const switchOpenID = useCallback((id: number) => {
		if (openRowID === id) setOpenRowID(-1);
		else setOpenRowID(id);
	}, [openRowID, setOpenRowID]);

	return (
		<TableWrapper>
			<TableHeadWrapper>
				<TableRowWrapper>
					{columns.map((column) =>
						<TableHeaderWrapper key={column.title}>{column.title}</TableHeaderWrapper>)
					}

					{(callbacks) ? <TableHeaderWrapper></TableHeaderWrapper> : null}
				</TableRowWrapper>
			</TableHeadWrapper>

			{data.map((row) =>
				<TableBodyWrapper key={row.id}>
					<TableRowWrapper>
						{columns.map((column, index) =>
							<TableColumnWrapper key={column.title} onClick={() => { if (details && index === 0) switchOpenID(row.id); }}>
								{(typeof row[column.key] === "string")
									? (column.key.endsWith("_at"))
										? dayjs(row[column.key]).format("HH:mm:ss, DD/MM/YYYY")
										: row[column.key]
									: (row[column.key])
										? "Yes"
										: "No"
								}
							</TableColumnWrapper>)
						}

						{(callbacks)
							? <TableColumnWrapper>
								{(callbacks.approval)
									? <Icon iconName={"add"} size={22} title={"Approve"} inline
										onClick={() => { if (callbacks.approval) callbacks.approval(row.id, row); }}
									/>
									: null
								}
								{(callbacks.rejection)
									? <Icon iconName={"remove"} size={22} title={"Reject"} inline
										onClick={() => { if (callbacks.rejection) callbacks.rejection(row.id, row); }}
									/>
									: null
								}
							</TableColumnWrapper>
							: null
						}
					</TableRowWrapper>

					{(details && row.id === openRowID) ? <ListDetail colspan={columns.length + (callbacks ? 1 : 0)} row={row} /> : null}
				</TableBodyWrapper>
			)}
		</TableWrapper>
	);
}
