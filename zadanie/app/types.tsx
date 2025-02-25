export interface InputFormProps {
	name: string;
	label: string;
	required: boolean;
	disabled?: boolean;
	isNumeric?: boolean;
	isEmail?: boolean;
	placeholder?: string;
	defaultValue?: string;
	type?: string;
}
