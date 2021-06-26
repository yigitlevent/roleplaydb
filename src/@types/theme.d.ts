namespace rdb {

	namespace theme {

		interface StyleProps extends ThemedStyledProps {
			theme: Palette;
			mainFont?: string;
			italicFont?: string;
		}

		interface Palette {
			backgrounds: {
				level1: string;
				level2: string;
				level3: string;
				level4: string;
				level5: string;
				link: string;
				success: string;
				warning: string;
				error: string;
				info: string
			};

			colors: {
				level1: string;
				level2: string;
				level3: string;
				level4: string;
				level5: string;
				link: string;
				success: string;
				warning: string;
				error: string;
				info: string;
			};

			borders: {
				level1: string;
				level2: string;
				level3: string;
				level4: string;
				level5: string;
				link: string;
				success: string;
				warning: string;
				error: string;
				info: string;
			};
		}

	}

}
