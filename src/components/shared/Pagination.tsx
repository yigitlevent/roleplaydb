import { Fragment, useCallback } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";

const PaginationWrapper = styled.div`
	width: max-content;
	margin: 2px auto;
	padding: 2px;
	display: flex;
	flex-flow: row;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const PageElement = styled.div`
	flex: 0 0 auto;

	& > .cl {
		cursor: pointer;
	}
`;

const EntryCounter = styled.div`
	font-size: 0.8em;
	font-style: italic;
	text-align: center;
	color: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level4};
`;

export function Pagination({ current, min, max, entryCount, setPage }: rdb.props.Pagination): JSX.Element {
	const changePage = useCallback((n: 1 | -1) => {
		if (n === -1 && current > min) setPage(current - 1);
		if (n === 1 && current < max) setPage(current + 1);
	}, [current, max, min, setPage]);

	const calculatePagesToShow = useCallback(() => {
		const pagesToShow = new Set<number>();
		pagesToShow.add(min);
		if (current !== min) {
			if (pagesToShow.size > 3 && current - 1 - min > 1) pagesToShow.add(-1);
			pagesToShow.add(current - 1);
		}
		pagesToShow.add(current);
		if (current !== max) {
			pagesToShow.add(current + 1);
			if (pagesToShow.size > 3 && max - current + 1 > 1) pagesToShow.add(-2);
		}
		pagesToShow.add(max);
		return pagesToShow;
	}, [current, max, min]);

	const pages = Array.from(calculatePagesToShow()).map((value, index) => {
		if (value < 0) return <PageElement>...</PageElement>;

		const isCurrent = (value === current);

		return (
			<PageElement
				key={index}
				className={(isCurrent) ? "" : "cl"}
				onClick={() => { if (!isCurrent) setPage(value); }}
			>
				{value}
			</PageElement>
		);
	});

	return (
		<Fragment>
			<PaginationWrapper>
				{(current !== min)
					? <Icon iconName={"arrow_left"} size={12} inline title={"Previous Page"} onClick={() => changePage(-1)} />
					: null
				}

				{pages}

				{(current !== max)
					? <Icon iconName={"arrow_right"} size={12} inline title={"Next Page"} onClick={() => changePage(1)} />
					: null
				}
			</PaginationWrapper>

			<EntryCounter>
				Showing up to 100 entries out of {entryCount}.
			</EntryCounter>
		</Fragment>
	);
}
