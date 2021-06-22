import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: ${(props: rdb.theme.StyleProps) => props.mainFont};
        src: ${(props: rdb.theme.StyleProps) => `url("./assets/fonts/${props.mainFont}.ttf")`};
		font-display: block;
    };

	@font-face {
        font-family: ${(props: rdb.theme.StyleProps) => props.italicFont};
        src: ${(props: rdb.theme.StyleProps) => `url("./assets/fonts/${props.italicFont}.ttf")`};
		font-display: block;
    };

	* {
		box-sizing: border-box;
		tab-size: 4;

		scrollbar-width: thin;
		scrollbar-color: ${(props: rdb.theme.StyleProps) => props.theme.level4.backgroundLight} ${(props: rdb.theme.StyleProps) => props.theme.level4.background};

		color: ${(props: rdb.theme.StyleProps) => props.theme.level1.color};

		font-kerning: auto;
		font-size: 1.00em;
		letter-spacing: -0.1px;
		word-spacing: normal;

		font-family: ${(props: rdb.theme.StyleProps) => props.mainFont};
		font-variation-settings: 'wght' 400;
	}

	*:not(svg, g, path) {
		cursor: default;
	}

	html {
		height: 100vh;
		width: 100vw;
		
	}

	#root {
		overflow: hidden scroll;
	}

	html,
	body {
		overflow: hidden;
	}

	body, 
	#root {
		height: 100%;
		width: 100%;
	}

	html,
	body,
	#root {
		margin: 0;
		padding: 0;
		background-color: ${(props: rdb.theme.StyleProps) => props.theme.level1.background};
	}

	label {
		padding: 1px 0 1px 6px;
	}

	a {
		text-decoration: none;
		cursor: pointer;

		&:hover {
			filter: brightness(100%);
		}

		& > span {
			height: 1px;
			width: 1px;
			position: absolute;
			overflow: hidden;
			top: -10px;
		}
	}

	svg, g, path {
		pointer-events: fill;
	}

	.hide {
		display: none !important;
	}
`;
