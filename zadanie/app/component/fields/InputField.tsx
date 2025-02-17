import { FieldValues, Path, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import FieldWrapper from './FieldWrapper';

export interface InputProps<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	hasBorder?: boolean;
	border?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	type?: string;
}

const InputField = <T extends FieldValues>(props: InputProps<T>) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FieldWrapper
			label={props.label}
			className={props.className}
			error={errors[props.name]?.message as string}
			required={props.required}
		>
			<input
				className={classNames(
					`h-[4vh] min-h-11 w-full border-none px-4 opacity-100 focus:outline-[#1A1A1ACC] border-[3px] rounded-s-xl`,
					{
						'cursor-not-allowed bg-content-on-neutral-medium text-content-on-neutral-xx-high':
							props.disabled === true,
					}
				)}
				type={props.type}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				disabled={props.disabled}
				{...register(props.name)}
			/>
		</FieldWrapper>
	);
};

export default InputField;
