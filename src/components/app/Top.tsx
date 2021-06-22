import { Fragment, useContext } from "react";
import { Provider } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ClientContext } from "../../contexts/Contexts";

import { Icon } from "../shared/Icon";
import { DatabaseClient } from "../App";

const TopWrapper = styled.div`
	position: sticky;
	width: 100%;
	height: 32px;
	top: 0;
	overflow: hidden;
`;

const Topbar = styled.div`
	width: 100%;
	height: 100%;

	background: ${(props: rdb.theme.StyleProps) => props.theme.level2.background};

	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;

	& > * {
		flex: 0 0 auto;
		margin: 0 3px;
	}
`;

const Title = styled.div`
	font-size: 1.2em;
	margin: 0 10px 0 3px;
`;

const TopMenu = styled.div`
	flex: 1 0 auto;

	& > * {
		padding: 0 5px;
	}

	& > *:not(:last-child) {
		border-right: ${(props: rdb.theme.StyleProps) => props.theme.level3.border};
	}
`;

export function Top(): JSX.Element {
	const { userName, clientState, setClientState } = useContext(ClientContext);

	const signOut = async (): Promise<void> => {
		try {
			await DatabaseClient.auth.signOut();
			setClientState("signedout");
		}
		catch (error) { console.log(error); }
	};

	const signIn = async (provider: Provider): Promise<void> => {
		try {
			DatabaseClient.auth.signIn({ provider: provider }, { redirectTo: process.env.REACT_APP_REDIRECT_URL });
		}
		catch (error) { console.log(error); }
	};

	return (
		<TopWrapper>
			<Topbar>
				<Icon iconName={"menu_switch"} size={30} title={"Menu"} onClick={() => { }} />

				<Title>
					<Link to="/">RoleplayDB {(clientState === "offline") ? "(Offline)" : ""}</Link>
				</Title>

				<TopMenu>
					<Link to="/systems">Systems</Link>
					<Link to="/submit_system">Submit a System</Link>
					<Link to="/settings">Settings</Link>
				</TopMenu>

				{(clientState === "signedin")
					? <Fragment>
						<div>{`Welcome, ${userName}`}</div>
						<Icon iconName={"portrait"} size={30} title={"Account"} onClick={() => { }} />
						<Icon iconName={"logout"} size={30} title={"Sign out"} onClick={() => signOut()} />
					</Fragment>
					: null
				}

				{(clientState === "signedout")
					? <Fragment>
						<Icon iconName={"login"} size={30} title={"Sign in with GitHub"} onClick={() => signIn("github")} />
					</Fragment>
					: null
				}
			</Topbar>
		</TopWrapper>
	);
}
