const DarkColors = {
	grey: {
		975: "rgba(8, 8, 8, 1.0)",
		950: "rgba(16, 16, 16, 1.0)",
		925: "rgba(20, 20, 20, 1.0)",
		900: "rgba(28, 28, 28, 1.0)",
		850: "rgba(43, 43, 43, 1.0)",
		800: "rgba(59, 59, 59, 1.0)",
		700: "rgba(81, 81, 81, 1.0)",
		600: "rgba(98, 98, 98, 1.0)",
		500: "rgba(126, 126, 126, 1.0)",
		400: "rgba(158, 158, 158, 1.0)",
		300: "rgba(177, 177, 177, 1.0)",
		200: "rgba(207, 207, 207, 1.0)",
		100: "rgba(225, 225, 225, 1.0)"
	},
	red: {
		900: "rgba(50, 0, 0, 1.0)",
		700: "rgba(105, 0, 0, 1.0)",
		500: "rgba(205, 11, 11, 1.0)",
		300: "rgba(255, 108, 108, 1.0)",
		100: "rgba(255, 206, 206, 1.0)"
	},
	blue: {
		900: "rgba(0, 29, 79, 1.0)",
		700: "rgba(33, 66, 123, 1.0)",
		500: "rgba(65, 103, 167, 1.0)",
		300: "rgba(98, 139, 211, 1.0)",
		100: "rgba(130, 176, 255, 1.0)"
	},
	yellow: {
		900: "rgba(79, 76, 0, 1.0)",
		700: "rgba(123, 120, 33, 1.0)",
		500: "rgba(167, 164, 65, 1.0)",
		300: "rgba(211, 207, 98, 1.0)",
		100: "rgba(255, 251, 130, 1.0)"
	},
	green: {
		900: "rgba(45, 79, 0, 1.0)",
		700: "rgba(84, 123, 33, 1.0)",
		500: "rgba(123, 167, 65, 1.0)",
		300: "rgba(162, 211, 98, 1.0)",
		100: "rgba(201, 255, 130, 1.0)"
	}
};

export const DarkTheme: rdb.theme.Palette = {
	backgrounds: {
		level1: DarkColors.grey[975],
		level2: DarkColors.grey[950],
		level3: DarkColors.grey[925],
		level4: DarkColors.grey[900],
		level5: DarkColors.grey[300],
		link: "none",
		success: "none",
		warning: "none",
		error: "none",
		info: "none"
	},

	colors: {
		level1: DarkColors.grey[300],
		level2: "none",
		level3: "none",
		level4: "none",
		level5: "none",
		link: DarkColors.red[300],
		success: DarkColors.green[300],
		warning: DarkColors.yellow[300],
		error: DarkColors.red[300],
		info: DarkColors.blue[300]
	},

	borders: {
		level1: "none",
		level2: `1px ${DarkColors.red[700]} solid`,
		level3: `1px ${DarkColors.grey[600]} solid`,
		level4: `1px ${DarkColors.grey[850]} solid`,
		level5: "none",
		link: "none",
		success: `1px ${DarkColors.green[700]} solid`,
		warning: `1px ${DarkColors.yellow[700]} solid`,
		error: `1px ${DarkColors.red[700]} solid`,
		info: `1px ${DarkColors.blue[700]} solid`
	}
};
