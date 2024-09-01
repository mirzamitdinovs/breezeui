import React from 'react';
type ButtonVariant = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
