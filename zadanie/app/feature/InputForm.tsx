import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '../component/fields/InputField';
import { InputFormProps } from '../types';

interface Props {
	title: string;
	inputs: InputFormProps[];
	output: (data: Record<string, string>) => void;
}

const InputForm = ({ title, inputs, output }: Props) => {
	const schemaShape = inputs.reduce((acc, input) => {
		if (input.isNumeric) {
			const numericValidator = z.preprocess(
				(val) => (val === '' ? undefined : Number(val)),
				z.number({
					invalid_type_error: `${input.label} must be a number`,
				})
			);
			acc[input.name] = input.required
				? numericValidator
				: numericValidator.optional();
		} else if (input.isEmail) {
			const emailValidator = z
				.string()
				.refine(
					(val) => val === '' || z.string().email().safeParse(val).success,
					{ message: `${input.label} must be a valid email address` }
				);
			acc[input.name] = input.required
				? emailValidator.refine((val) => val !== '', {
						message: `${input.label} is required`,
				  })
				: emailValidator;
		} else {
			const stringValidator = z.string();
			acc[input.name] = input.required
				? stringValidator.nonempty(`${input.label} is required`)
				: stringValidator.optional();
		}
		return acc;
	}, {} as z.ZodRawShape);

	const schema = z.object(schemaShape);

	const defaultValues = inputs.reduce((acc, input) => {
		acc[input.name] = input.defaultValue || '';
		return acc;
	}, {} as Record<string, string>);

	type FormData = z.infer<typeof schema>;

	const methods = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		output(data);
	};

	return (
		<div className='w-full px-4 md:px-8 lg:px-16 rounded-md border border-dashed border-content-on-neutral-medium p-4'>
			<h2 className='mb-6 text-xl font-bold'>{title}</h2>

			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className='grid grid-cols-1 md:grid-cols-2 gap-6'
				>
					{inputs.map((input) => (
						<InputField
							key={input.name}
							name={input.name}
							label={input.label}
							placeholder={input.placeholder}
							defaultValue={input.defaultValue}
							disabled={input.disabled}
							required={input.required}
							type={input.isNumeric ? 'number' : input.type || 'text'}
						/>
					))}

					<div className='col-span-1 md:col-span-2 flex justify-end'>
						<button
							type='submit'
							className='inline-flex items-center justify-center rounded-md bg-content-on-neutral-xx-high px-4 py-2 text-white hover:bg-content-on-neutral-medium'
						>
							Submit
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default InputForm;
