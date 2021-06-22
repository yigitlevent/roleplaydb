import { useCallback, useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";

import { ClientContext } from "../contexts/Contexts";

import { Top } from "./app/Top";
import { Main } from "./app/Main";

export const DatabaseClient = createClient(process.env.REACT_APP_DATABASE_URL as string, process.env.REACT_APP_DATABASE_KEY as string);

export function App(): JSX.Element {
	const [clientState, setClientState] = useState<rdb.ClientState>("presign");
	const [userName, setUserName] = useState<undefined | string>(undefined);
	const [userRole, setUserRole] = useState<undefined | rdb.UserRoles>(undefined);
	const [timeZone, setTimeZone] = useState<undefined | string>(undefined);

	// TODO: Delete later
	console.log(process.env.NODE_ENV);

	const refreshProfile = useCallback(async (id: string) => {
		try {
			const { data, error } = await DatabaseClient.from("profiles").select().eq("uuid", id);

			if (error) throw error;

			if (data?.length === 1) {
				setUserRole(data[0].role);
				setTimeZone(data[0].timezone);
			}
			else if (data?.length === 0) {
				const { error } = await DatabaseClient.from("profiles")
					.insert({ uuid: id, role: "user", timezone: "" });

				if (error) throw error;
			}
			else throw "multiple profiles";
		}
		catch (error) { console.log(error); }
	}, []);

	const setSessionData = useCallback((session: Session | null) => {
		if (session && session.user) {
			setUserName(session.user.user_metadata.full_name);
			setClientState("signedin");
			refreshProfile(session.user.id);
		}
		else {
			setUserName(undefined);
			setClientState("signedout");
			setUserRole(undefined);
		}
	}, [refreshProfile]);

	useEffect(() => {
		setClientState("presign");

		const session = DatabaseClient.auth.session();
		setSessionData(session);

		const subscription = DatabaseClient.auth.onAuthStateChange((event, session) => { setSessionData(session); });
		return () => { subscription?.data?.unsubscribe(); };
	}, [setSessionData]);

	useEffect(() => {
		window.addEventListener("offline", () => { setClientState("offline"); });
		return () => { window.removeEventListener("offline", () => { setClientState("offline"); }); };
	}, []);

	return (
		<ClientContext.Provider value={{ clientState, userName, userRole, timeZone, setClientState, setUserName, setUserRole, setTimeZone }}>
			<Top />
			<Main />
		</ClientContext.Provider >
	);
}
