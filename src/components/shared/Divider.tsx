import styled from "styled-components";

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: ${(props: rdb.theme.StyleProps) => props.theme.borders.level3};
	margin: 6px 0;
`;
