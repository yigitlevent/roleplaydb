import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/global";
import { DarkTheme } from "./theme/_themes";

import { App } from "./components/App";

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle
				mainFont={"Petrona-Regular-wght"}
				italicFont={"Petrona-Italic-wght"}
			/>

			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode >,
	document.getElementById("root")
);
