namespace rdb {

	namespace theme {

		interface StyleProps extends ThemedStyledProps {
			theme: Palette;
			mainFont?: string;
			italicFont?: string;
		}

		interface Palette {
			level1: {
				background: string;
				color: string;
			};
			level2: {
				background: string;
				border: string;
			};
			level3: {
				background: string;
				border: string;
			};
			level4: {
				background: string;
				backgroundLight: string;
				border: string;
			};
			link: {
				color: string;
			};
			success: {
				color: string;
				border: string;
			};
			warning: {
				color: string;
				border: string;
			};
			error: {
				color: string;
				border: string;
			};
			info: {
				color: string;
				border: string;
			};
			transparent: string;
			gradient: string;
		}

	}

}
