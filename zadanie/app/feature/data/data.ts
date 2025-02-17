import { InputFormProps } from '@/app/types';

export const formInputs: InputFormProps[] = [
	{
		name: 'email',
		label: 'Email Address',
		required: false,
		placeholder: 'Enter your email',
	},
	{
		name: 'age',
		label: 'Age',
		required: true,
		isNumeric: true,
		placeholder: 'Enter your age',
	},
];
