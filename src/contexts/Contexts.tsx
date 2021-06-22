import { createContext } from "react";

export const ClientContext = createContext({
	clientState: "precheck" as rdb.ClientState,
	userName: undefined as undefined | string,
	userRole: undefined as undefined | rdb.UserRoles,
	timeZone: undefined as undefined | string,
	setClientState: (() => { /* */ }) as rdb.DispSet<rdb.ClientState>,
	setUserName: (() => { /* */ }) as rdb.DispSet<undefined | string>,
	setUserRole: (() => { /* */ }) as rdb.DispSet<undefined | rdb.UserRoles>,
	setTimeZone: (() => { /* */ }) as rdb.DispSet<undefined | string>
});
