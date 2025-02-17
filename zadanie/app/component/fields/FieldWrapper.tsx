import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	label?: string;
	error: ReactNode;
	required?: boolean;
	className?: string;
	noBorder?: boolean;
};

const FieldWrapper = ({
	label,
	error,
	required,
	children,
	className,
	noBorder,
}: Props) => {
	return (
		<div className={className}>
			<div className='mb-1 flex items-center '>
				<p className='text-label-m font-[550] text-content-on-neutral-xx-high leading-[8px]'>
					{label}
				</p>
				<div>
					<p
						className={classNames('text-label-m ml-xs font-bold', {
							'text-content-on-neutral-danger': required,
							'text-content-on-neutral-medium ': !required,
						})}
					>
						{required ? 'Required' : 'Optional'}
					</p>
				</div>
			</div>
			<div
				className={classNames(`border-[1.5px] rounded-xl border-solid`, {
					'border-[2px] border-content-on-neutral-danger': error,
					'border-none': noBorder,
				})}
			>
				{children}
			</div>
			{error && (
				<div className='mt-1 flex flex-row items-center'>
					<div
						className={classNames(`ml-xs`, {
							'text-content-on-neutral-danger': error,
						})}
					>
						{error}
					</div>
				</div>
			)}
		</div>
	);
};

export default FieldWrapper;
