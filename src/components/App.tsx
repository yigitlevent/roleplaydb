import { useCallback, useEffect, useState } from "react";
import { createClient, Session, User } from "@supabase/supabase-js";

import { ClientContext } from "../contexts/Contexts";

import { Top } from "./app/Top";
import { Main } from "./app/Main";

export const DatabaseClient = createClient(process.env.REACT_APP_DATABASE_URL as string, process.env.REACT_APP_DATABASE_KEY as string);

export function App(): JSX.Element {
	const [clientState, setClientState] = useState<rdb.ClientState>("presign");
	const [user, setUser] = useState<undefined | User>(undefined);

	// TODO: Delete later
	console.log(process.env.NODE_ENV);

	const refreshProfile = useCallback(async (user: User) => {
		try {
			const { data, error } = await DatabaseClient.from("profiles").select().eq("uuid", user.id);

			if (error) throw error;

			if (data?.length === 1) {
				user.role = data[0].role;
				setUser(user);
			}
			else if (data?.length === 0) {
				const { error } = await DatabaseClient.from("profiles")
					.insert({ uuid: user.id, role: "user" });

				if (error) throw error;
			}
			else throw new Error("incorrect number of profiles");
		}
		catch (error) { console.log(error); }
	}, []);

	const setSessionData = useCallback((session: Session | null) => {
		if (session && session.user) {
			setClientState("signedin");
			refreshProfile(session.user);
		}
		else {
			setUser(undefined);
			setClientState("signedout");
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
		<ClientContext.Provider value={{ clientState, user, setClientState, setUser }}>
			<Top />
			<Main />
		</ClientContext.Provider >
	);
}
