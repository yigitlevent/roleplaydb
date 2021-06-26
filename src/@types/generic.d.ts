namespace rdb {

	namespace generic {

		interface RoutesArray {
			singular: string;
			plural: string;
			submit: JSX.Element;
		}

		type Conflict = "Dice" | "Card" | "Tarot" | "Diceless" | "Other" | "None";

		type Equipment = "Purchase" | "Roll" | "Freeform" | "None";

		type Levels = "Levels" | "Multiple Levels" | "None";

		type Creation = "Current" | "History" | "Other" | "None";

		type Advancement = "Exploration" | "Treasure" | "Survival" | "Hunt" | "Narrative" | "None";

		type BasicValues = "Basic" | "Extended" | "Basic/Extended" | "None";

	}

}
