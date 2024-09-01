import React, { ReactNode } from 'react';
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
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ModalHandle>>;
export default Modal;
