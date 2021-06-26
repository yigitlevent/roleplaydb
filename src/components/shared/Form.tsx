import styled from "styled-components";

export const FormWrapper = styled.form`
	width: 600px;
	max-width: 100%;
	margin: 4px auto;
	padding: 4px;
	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level2};
`;

export const FormRowWrapper = styled.div<{ hasHelp: boolean; }>`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 22px ${p => (p.hasHelp) ? "auto" : ""};

	margin: 2px;
	padding: 5px;
	background: ${(props: rdb.theme.StyleProps) => props.theme.backgrounds.level3};

	&:hover{
		filter: brightness(110%);
	}

	& > div {
		grid-column: span 2;
		font-size: 0.8em;

		& > p {
			margin: 6px 2px 2px;

			& > i:after {
				content: ")"
			}

			& > i:before {
				content: "("
			}
		}
	}
`;

export function FormRow({ label, input, help }: { label: JSX.Element, input: JSX.Element, help?: JSX.Element; }): JSX.Element {
	return (
		<FormRowWrapper hasHelp={(help !== undefined)}>
			{label}
			{input}
			{help}
		</FormRowWrapper>
	);
}
