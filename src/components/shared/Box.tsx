import styled from "styled-components";

export const Box = styled.div`
	width: 600px;
	max-width: 100%;
	margin: 4px auto;
	padding: 4px;
	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level2};
`;
