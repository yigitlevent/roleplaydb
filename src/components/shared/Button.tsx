import styled from "styled-components";

const ButtonShared = styled.input`
	margin: 0 auto;
	padding: 4px 6px;
	border: none;
	outline: none;

	&:hover {
		filter: brightness(120%);
	}

	&:focus {
		filter: brightness(140%);
	}
`;

export const Button = styled(ButtonShared).attrs({ type: "button" }) <{ noBg?: boolean; center?: boolean; }>`
	display: ${p => (p.center) ? "block" : "initial"};
	background: ${p => (p.noBg) ? "none" : (props: rdb.theme.StyleProps) => props.theme.level4.background};
`;

export const Submit = styled(ButtonShared).attrs({ type: "submit" }) <{ noBg?: boolean; center?: boolean; }>`
	display: ${p => (p.center) ? "block" : "initial"};
	background: ${p => (p.noBg) ? "none" : (props: rdb.theme.StyleProps) => props.theme.level4.background};
`;
