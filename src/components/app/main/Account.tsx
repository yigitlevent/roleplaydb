import { useCallback, useContext } from "react";


import { ClientContext } from "../../../contexts/Contexts";

import { FormWrapper } from "../../shared/Form";
import { Header2 } from "../../shared/Headers";

import { DatabaseClient } from "../../App";

export function Account(): JSX.Element {
	const { user } = useContext(ClientContext);

	const submit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const elements = [...(event.target as HTMLFormElement).children].filter((v) => v.children.length > 1);

		const form: { [key: string]: any; } = {};

		elements.forEach((v) => {
			const child = v.children[1] as HTMLInputElement;
			if (child.type === "checkbox") form[child.name] = child.checked;
			else form[child.name] = child.value;
		});

		try {
			const { data, error } = await DatabaseClient.from("profiles").update(form);
			if (error) throw error;
			else console.log(data);
		}
		catch (error) { console.log(error); }
	}, []);

	return (
		<FormWrapper onSubmit={event => submit(event)}>
			<Header2>{user?.user_metadata.full_name}</Header2>

			{
				/*<FormRow
					label={<label>Time Zone</label>}
					input={
						<Select defaultValue={timeZone} name="conflict">
							{[].map((v: string, i: number) => <option key={i} value={v}>{v}</option>)}
						</Select>
					}
				/>
	
				<Submit center value={"Save Changes"} />*/
			}

		</FormWrapper>
	);
}
