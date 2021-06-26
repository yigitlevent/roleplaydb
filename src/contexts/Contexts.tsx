import { createContext } from "react";
import { User } from "@supabase/supabase-js";

export const ClientContext = createContext({
	clientState: "precheck" as rdb.ClientState,
	user: undefined as undefined | User,
	setClientState: (() => { /* */ }) as rdb.DispSet<rdb.ClientState>,
	setUser: (() => { /* */ }) as rdb.DispSet<undefined | User>
});
