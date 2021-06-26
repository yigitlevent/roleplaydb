import { SystemSubmit } from "../components/app/main/SystemSubmit";

export const RoutesArray: rdb.generic.RoutesArray[] = [
	{ singular: "System", plural: "Systems", submit: <SystemSubmit /> }
];

export const Conflict: rdb.generic.Conflict[] = ["None", "Dice", "Card", "Tarot", "Diceless", "Other"];

export const Equipment: rdb.generic.Equipment[] = ["None", "Purchase", "Roll", "Freeform"];

export const Levels: rdb.generic.Levels[] = ["None", "Levels", "Multiple Levels"];

export const Creation: rdb.generic.Creation[] = ["None", "Current", "History", "Other"];

export const Advancement: rdb.generic.Advancement[] = ["None", "Exploration", "Treasure", "Survival", "Hunt", "Narrative"];

export const BasicValues: rdb.generic.BasicValues[] = ["None", "Basic", "Extended", "Basic/Extended"];
