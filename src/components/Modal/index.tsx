'use client';

import React, {
	forwardRef,
	ReactNode,
	useImperativeHandle,
	useState,
} from 'react';
import Button from '../Button';
type ModalProps = {
	children: ReactNode;
	save?: () => Promise<void>;
	cancel?: () => Promise<void>;
	title?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	showPadding?: boolean;
	header?: ReactNode;
	hideButtons?: boolean;
	hideHeader?: boolean;
};

export type ModalHandle = {
	open: () => void;
	close: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
	(
		{
			children,
			save,
			cancel,
			title,
			size = 'md',
			showPadding = true,
			header,
			hideButtons = false,
			hideHeader = false,
		},
		ref
	) => {
		const [toggle, setToggle] = useState(true);

		const open = () => {
			setToggle(true);
		};

		const close = () => {
			setToggle(false);
		};

		useImperativeHandle(
			ref,
			() => ({
				open,
				close,
			}),
			[]
		);

		const onCancel = async () => {
			if (cancel) {
				await cancel();
			}
			close();
		};

		const onSave = async () => {
			if (!save) return;

			await save();

			const form = document.querySelector('form');
			if (form && form.checkValidity()) {
				close();
			}
		};

		const sizeClasses = {
			sm: 'max-w-lg',
			md: 'max-w-xl',
			lg: 'max-w-2xl',
			xl: 'max-w-4xl',
		};

		if (!toggle) return null;

		return (
			<div className='fixed inset-0 z-[100] flex items-center justify-center sm:px-5'>
				<div className='absolute inset-0 bg-slate-900/60 backdrop-blur transition-opacity duration-300' />
				<div
					className={`relative w-full ${sizeClasses[size]} max-h-[90vh] flex flex-col rounded-lg bg-white text-center transition-opacity duration-300 dark:bg-navy-700`}
				>
					{!hideHeader && (
						<div className='flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5'>
							{header ? (
								header
							) : (
								<h3 className='text-base font-medium text-slate-700 dark:text-navy-100'>
									{title}
								</h3>
							)}
							<button
								type='button'
								onClick={onCancel}
								className='btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18 18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					)}
					<div
						className={`flex-1 ${
							showPadding ? 'p-5' : ''
						} scrollbar-sm overflow-y-scroll`}
					>
						<div>{children}</div>
						{!hideButtons && (
							<div className='pt-2 flex justify-end gap-2'>
								<Button type='error' onClick={onCancel} buttonType='button'>
									Cancel
								</Button>

								<Button
									onClick={onSave}
									type='success'
									buttonType={save ? 'button' : 'submit'}
								>
									Save
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
);

export default Modal;
