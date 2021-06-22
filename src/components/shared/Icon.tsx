import styled from "styled-components";

export const Icon = styled.div<{ iconName: string; size?: number; }>`
	width: ${p => (p.size) ? `${p.size}px` : "100%"};
	height: ${p => (p.size) ? `${p.size}px` : "100%"};
	background: transparent url("./assets/icons/${p => p.iconName}.svg") no-repeat center center;
	background-size: contain;
	margin: auto;

	filter: brightness(60%);

	&:hover {
		filter: brightness(100%);
		cursor: pointer;
	}

	& > svg {
		fill: white;
	}

	& > * {
		height: 100% !important;
		width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
	}
`;
