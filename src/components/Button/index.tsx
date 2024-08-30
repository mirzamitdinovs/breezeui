'use client';

import React, { useState } from 'react';

type ButtonVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'info'
	| 'success'
	| 'warning'
	| 'error';
type ButtonStyle = 'solid' | 'outline';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
	children: React.ReactNode;
	type?: ButtonVariant;
	variant?: ButtonStyle;
	buttonType?: ButtonType;
	onClick?: () => void;
	disabled?: boolean;
	showLoader?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	type = 'default',
	variant = 'solid',
	buttonType = 'button',
	onClick,
	disabled = false,
	showLoader = false,
}) => {
	const [loading, setLoading] = useState(false);

	const solidClasses: Record<ButtonVariant, string> = {
		default:
			'bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90',
		primary:
			'bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90',
		secondary:
			'bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90',
		info: 'bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90',
		success:
			'bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90',
		warning:
			'bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90',
		error:
			'bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90',
	};

	const outlineClasses: Record<ButtonVariant, string> = {
		default:
			'border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90',
		primary:
			'border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90',
		secondary:
			'border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90',
		info: 'border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90',
		success:
			'border border-success font-medium text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success/90',
		warning:
			'border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90',
		error:
			'border border-error font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90',
	};

	const spinnerClasses: Record<ButtonVariant, string> = {
		default: 'border-slate-500 dark:border-navy-300',
		primary:
			variant === 'solid'
				? 'border-white'
				: 'border-primary dark:border-accent',
		secondary: variant === 'solid' ? 'border-white' : 'border-secondary',
		info:
			variant === 'solid'
				? 'border-white'
				: 'border-primary dark:border-accent',
		success: variant === 'solid' ? 'border-white' : 'border-success',
		warning: variant === 'solid' ? 'border-white' : 'border-warning',
		error: variant === 'solid' ? 'border-white' : 'border-error',
	};

	const selectedClasses =
		variant === 'outline' ? outlineClasses[type] : solidClasses[type];

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		if (buttonType === 'button') {
			if (onClick) {
				setLoading(true);
				await onClick();
				setLoading(false);
			}
		} else if (buttonType === 'submit') {
			setTimeout(() => {
				setLoading(true);
			}, 0);
		}
	};

	return (
		<button
			type={buttonType}
			className={`btn gap-2 ${selectedClasses} ${
				(showLoader && loading) || disabled
					? 'opacity-50 cursor-not-allowed'
					: ''
			}`}
			onClick={handleClick}
			disabled={(showLoader && loading) || disabled}
		>
			{showLoader && loading && (
				<div
					className={`spinner size-4 animate-spin rounded-full border-[3px] border-r-transparent ${spinnerClasses[type]}`}
				></div>
			)}{' '}
			{children}
		</button>
	);
};

export default Button;
