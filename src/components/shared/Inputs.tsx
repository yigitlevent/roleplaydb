import styled from "styled-components";

export const Input = styled.input`
	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level4};
	color: ${(props: rdb.theme.StyleProps) => props.theme.colors.level1};
	outline: none;
	border: none;
	padding: 0;
	margin: 0;

	&:hover {
		filter: brightness(140%);
	}

	&:checked {
		background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level5};
	}

	&:focus,
	&:focus-visible,
	&:visited {
		text-decoration: none;
		outline: ${(props: rdb.theme.StyleProps) => props.theme.borders.level4};
	}

	&:disabled, 
	&:disabled:hover, 
	&:disabled:checked, 
	&:read-only, 
	&:read-only:hover, 
	&:read-only:checked {
		filter: none;
		cursor: default;
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	&[type="button"],
	&[type="submit"] {
		cursor: pointer;
	}

	&[type="checkbox"] {
		height: 22px;
		width: 22px;
		appearance: none;
		cursor: pointer;
		vertical-align: middle;
	}

	&[type="text"],
	&[type="email"],
	&[type="password"],
	&[type="number"] {
		cursor: text;
		display: block;
		appearance: textfield;
	}
`;

export const Select = styled.select`
	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level4};
	color: ${(props: rdb.theme.StyleProps) => props.theme.colors.level1};
	outline: none;
	border: none;
	appearance: none;

	&:hover {
		filter: brightness(140%);
	}

	&:disabled, 
	&:disabled:hover {
		background: none;
		filter: none;
	}
`;
