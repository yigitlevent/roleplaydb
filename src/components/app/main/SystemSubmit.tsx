import { useCallback, useContext } from "react";

import { ClientContext } from "../../../contexts/Contexts";

import { Advancement, BasicValues, Conflict, Creation, Equipment, Levels } from "../../../data/Data";

import { Input, Select } from "../../shared/Inputs";
import { FormWrapper, FormRow } from "../../shared/Form";
import { Header1, Header2 } from "../../shared/Headers";
import { Divider } from "../../shared/Divider";
import { Submit } from "../../shared/Button";

import { DatabaseClient } from "../../App";

export function SystemSubmit(): JSX.Element {
	const { user } = useContext(ClientContext);

	const checkSubmissionCount = useCallback(async (): Promise<boolean> => {
		try {
			const { error, count } = await DatabaseClient.from("submitted_systems")
				.select("*", { count: "exact", head: true }).eq("uuid", user?.id);

			if (error) throw error;

			if (count && count > 9) return false;

			return true;
		}
		catch (error) {
			console.log(error);
			return false;
		}
	}, [user?.id]);

	const submit = useCallback(async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const elements = [...(event.target as HTMLFormElement).children].filter((v) => v.children.length > 1);

		const form: { [key: string]: any; } = {};

		elements.forEach((v) => {
			const child = v.children[1] as HTMLInputElement;
			if (child.type === "checkbox") form[child.name] = child.checked;
			else form[child.name] = child.value;
		});

		form["submitted_by"] = user?.user_metadata.full_name;

		try {
			if (!checkSubmissionCount()) throw new Error("You have 10 pending system submissions, wait for them to be approved or rejected first.");
			const { data, error } = await DatabaseClient.from("submitted_systems").insert(form);
			if (error) throw error;
			else console.log(data);
		}
		catch (error) { console.log(error); }
	}, [checkSubmissionCount, user?.user_metadata.full_name]);

	return (
		<FormWrapper onSubmit={event => submit(event)}>
			<Header1>System Submission</Header1>

			<Divider />

			<Header2>Basic Info</Header2>

			<FormRow
				label={<label>System Name</label>}
				input={<Input type="text" name="name" />}
			/>

			<FormRow
				label={<label>Generic System?</label>}
				input={<Input type="checkbox" name="is_generic" />}
				help={
					<div>
						<p>Check if the system is generic. <i>Examples: Savage Worlds, Fate</i></p>
					</div>
				}
			/>

			<FormRow
				label={<label>Unusual Accessories?</label>}
				input={<Input type="checkbox" name="unusual_accessories" />}
				help={
					<div>
						<p>Check if the system requires unusual game items. <i>Examples: Ten Candles, Don&apos;t Rest Your Head</i></p>
					</div>
				}
			/>

			<FormRow
				label={<label>Conflict Resolution</label>}
				input={
					<Select name="conflict" >
						{Conflict.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
				help={
					<div>
						<p>Select the main conflict resolution mechanic type of the system.</p>
					</div>
				}
			/>

			<Divider />

			<Header2>Character</Header2>

			<FormRow
				label={<label>Creation</label>}
				input={
					<Select name="c_creation" >
						{Creation.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
				help={
					<div>
						<p>Specify what kind of character creation this system supports.</p>
						<p><b>Current</b>: Characters created as-is, without much emphasis on their past. <i>Examples: Dungeons and Dragons, World of Darkness</i></p>
						<p><b>History</b>: Characters are created as-before, with their histories. <i>Examples: Traveller, Burning Wheel</i></p>
						<p><b>Other</b>: Characters created in a different way the specified above.</p>
					</div>
				}
			/>

			<FormRow
				label={<label>Levels</label>}
				input={
					<Select name="c_levels" >
						{Levels.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
			/>

			<FormRow
				label={<label>Advancement</label>}
				input={
					<Select name="c_advancement" >
						{Advancement.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
			/>

			<FormRow
				label={<label>Equipment</label>}
				input={
					<Select name="c_equipment" >
						{Equipment.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
			/>

			<FormRow
				label={<label>Sheet Complexity</label>}
				input={
					<Select name="c_sheet" >
						{BasicValues.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
					</Select>
				}
			/>

			<Divider />

			<Header2>Mechanics</Header2>

			{["Combat", "Social", "Warfare", "Downtime", "Travel", "Faction", "Crafting", "Construction"].map((v) => {
				return <FormRow
					key={v}
					label={<label>{v}</label>}
					input={
						<Select name={`r_${v.toLowerCase()}`}>
							{BasicValues.map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
						</Select>
					}
				/>;
			})}

			<Divider />

			<Submit center value={"Submit System"} />

		</FormWrapper>
	);
}
