import React from 'react';
interface PopoverProps {
    isOpen: boolean;
    children: React.ReactNode;
    content: React.ReactNode | ((popoverState: any) => React.ReactNode);
    positions?: Array<'top' | 'left' | 'right' | 'bottom'>;
    align?: 'center' | 'start' | 'end';
    padding?: number;
    reposition?: boolean;
    parentElement?: HTMLElement;
    boundaryElement?: HTMLElement;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    transform?: string;
    transformMode?: 'absolute' | 'fixed';
    boundaryInset?: number;
    onClickOutside?: (e: MouseEvent) => void;
    clickOutsideCapture?: boolean;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export default Popover;
