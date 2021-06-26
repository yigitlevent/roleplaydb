import { Fragment, useCallback, useContext } from "react";
import { Provider } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { RoutesArray } from "../../data/Data";

import { ClientContext } from "../../contexts/Contexts";

import { Icon } from "../shared/Icon";
import { DatabaseClient } from "../App";

const TopWrapper = styled.div`
	position: sticky;
	width: 100%;
	height: max-content;
	top: 0;
	overflow: hidden;
`;

const Topbar = styled.div`
	width: 100%;

	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level2};

	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;

	& > * {
		flex: 0 0 auto;
		margin: 0 3px;
	}
`;

const Title = styled.div`
	& > a {
		font-variation-settings: 'wght' 600;
		font-size: 1.2em;
		margin: 0 10px 0 3px;
	}
`;

const TopMenu = styled.div`
	flex: 1 0 auto;

	& > * {
		padding: 0 5px;
	}

	& > *:not(:last-child) {
		border-right: ${(props: rdb.theme.StyleProps) => props.theme.borders.level3};
	}
`;

export function Top(): JSX.Element {
	const { clientState, user, setClientState } = useContext(ClientContext);

	const signOut = useCallback(async (): Promise<void> => {
		try {
			const { error } = await DatabaseClient.auth.signOut();
			if (error) throw error;
			else setClientState("signedout");
		}
		catch (error) { console.log(error); }
	}, [setClientState]);

	const signIn = useCallback(async (provider: Provider): Promise<void> => {
		try {
			const { error } = await DatabaseClient.auth.signIn({ provider: provider }, { redirectTo: process.env.REACT_APP_REDIRECT_URL });
			if (error) throw error;
		}
		catch (error) { console.log(error); }
	}, []);

	const links = RoutesArray.map((v) => {
		return (
			<Fragment key={v.singular}>
				<Link to={`/${v.plural.toLowerCase()}/list`}>
					{v.plural}
				</Link>

				{(clientState === "signedin")
					? <Link to={`/${v.plural.toLowerCase()}/submit`}>
						<Icon iconName={"import"} size={18} title={`Submit a ${v.singular}`} inline />
					</Link>
					: null
				}
				{(user?.role === "admin")
					? <Link to={`/${v.plural.toLowerCase()}/queue`}>
						<Icon iconName={"export"} size={18} title={`Review ${v.singular} Submissions`} inline />
					</Link>
					: null
				}
			</Fragment>
		);
	});

	return (
		<TopWrapper>
			<Topbar>
				{/*<Icon iconName={"menu_switch"} size={30} title={"Menu"} onClick={() => { }} />*/}

				<Title>
					<Link to="/">RoleplayDB {(clientState === "offline") ? "(Offline)" : ""}</Link>
				</Title>

				<TopMenu>{links}</TopMenu>

				{(clientState === "signedin")
					? <Fragment>
						<div>{`Welcome, ${user?.user_metadata.full_name}`}</div>
						<Link to="/account">
							<Icon iconName={"portrait"} size={30} title={"Account"} />
						</Link>
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
