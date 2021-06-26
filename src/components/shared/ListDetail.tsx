import styled from "styled-components";

import { TableRowWrapper } from "./Table";
import { Header3 } from "./Headers";

const DetailsWrapper = styled.div`
	width: 100;
	padding: 4px;
`;

const RowGroup = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
`;

const Row = styled.div`
	flex: 1 0 200px;
	padding: 4px 0;

	& > *:first-child {
		font-variation-settings: 'wght' 600;
	}

	& > *:last-child {
		margin-left: 4px;
	}
`;

export function ListDetail({ colspan, row }: rdb.props.ListDetail): JSX.Element {
	return (
		<TableRowWrapper>
			<td colSpan={colspan}>
				<DetailsWrapper>

					<Header3>General</Header3>
					<RowGroup>
						<Row>
							<span>Conflict Resolution:</span>
							<span>{row.conflict}</span>
						</Row>
						<Row>
							<span>Generic System:</span>
							<span>{(row.is_generic) ? "Yes" : "No"}</span>
						</Row>
						<Row>
							<span>Unusual Accessories:</span>
							<span>{(row.unusual_accessories) ? "Yes" : "No"}</span>
						</Row>
					</RowGroup>

					<br />

					<Header3>Character Mechanics</Header3>
					<RowGroup>
						<Row>
							<span>Advancement:</span>
							<span>{row.c_advancement}</span>
						</Row>
						<Row>
							<span>Creation:</span>
							<span>{row.c_creation}</span>
						</Row>
						<Row>
							<span>Equipment:</span>
							<span>{row.c_equipment}</span>
						</Row>
						<Row>
							<span>Level:</span>
							<span>{row.c_levels}</span>
						</Row>
						<Row>
							<span>Sheet Complexity:</span>
							<span>{row.c_sheet}</span>
						</Row>
					</RowGroup>

					<br />

					<Header3>Mechanic Complexities</Header3>
					<RowGroup>
						<Row>
							<span>Combat:</span>
							<span>{row.r_combat}</span>
						</Row>
						<Row>
							<span>Social:</span>
							<span>{row.r_social}</span>
						</Row>
						<Row>
							<span>Warfare:</span>
							<span>{row.r_warfare}</span>
						</Row>
						<Row>
							<span>Crafting:</span>
							<span>{row.r_crafting}</span>
						</Row>
						<Row>
							<span>Travel:</span>
							<span>{row.r_travel}</span>
						</Row>
						<Row>
							<span>Downtime:</span>
							<span>{row.r_downtime}</span>
						</Row>
						<Row>
							<span>Faction:</span>
							<span>{row.r_faction}</span>
						</Row>
						<Row>
							<span>Construction:</span>
							<span>{row.r_construction}</span>
						</Row>
					</RowGroup>

				</DetailsWrapper>
			</td>
		</TableRowWrapper>
	);
}
