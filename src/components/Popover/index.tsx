import React, {
	useState,
	useRef,
	useEffect,
	forwardRef,
	useCallback,
} from 'react';

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

const DEFAULT_POSITIONS = ['top', 'left', 'right', 'bottom'];

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
	(
		{
			isOpen,
			children,
			content,
			positions = DEFAULT_POSITIONS,
			align = 'center',
			padding = 0,
			reposition = true,
			parentElement = document.body,
			boundaryElement,
			containerClassName,
			containerStyle,
			transform,
			transformMode = 'absolute',
			boundaryInset = 0,
			onClickOutside,
			clickOutsideCapture = false,
		},
		externalRef
	) => {
		const popoverRef = useRef<HTMLDivElement>(null);
		const childRef = useRef<HTMLDivElement>(null);

		const [popoverState, setPopoverState] = useState({
			position: positions[0],
			align,
			nudgedLeft: 0,
			nudgedTop: 0,
			padding,
			childRect: {},
			popoverRect: {},
			parentRect: {},
			boundaryRect: {},
			boundaryInset,
			violations: {},
			hasViolations: false,
		});

		const positionPopover = useCallback(() => {
			if (childRef.current && popoverRef.current) {
				const childRect = childRef.current.getBoundingClientRect();
				const popoverRect = popoverRef.current.getBoundingClientRect();

				let top = 0;
				let left = 0;

				switch (popoverState.position) {
					case 'top':
						top = childRect.top - popoverRect.height - padding;
						left = childRect.left + childRect.width / 2 - popoverRect.width / 2;
						break;
					case 'bottom':
						top = childRect.bottom + padding;
						left = childRect.left + childRect.width / 2 - popoverRect.width / 2;
						break;
					case 'left':
						top = childRect.top + childRect.height / 2 - popoverRect.height / 2;
						left = childRect.left - popoverRect.width - padding;
						break;
					case 'right':
						top = childRect.top + childRect.height / 2 - popoverRect.height / 2;
						left = childRect.right + padding;
						break;
				}

				popoverRef.current.style.top = `${top}px`;
				popoverRef.current.style.left = `${left}px`;

				// Set the state with the new positions and rects
				setPopoverState({
					...popoverState,
					childRect,
					popoverRect,
				});
			}
		}, [popoverState, padding]);

		useEffect(() => {
			if (isOpen) {
				positionPopover();
			}
		}, [isOpen, positionPopover]);

		useEffect(() => {
			const handleClickOutside = (e: MouseEvent) => {
				if (
					isOpen &&
					popoverRef.current &&
					childRef.current &&
					!popoverRef.current.contains(e.target as Node) &&
					!childRef.current.contains(e.target as Node)
				) {
					onClickOutside?.(e);
				}
			};

			if (isOpen) {
				document.addEventListener(
					'click',
					handleClickOutside,
					clickOutsideCapture
				);
			} else {
				document.removeEventListener(
					'click',
					handleClickOutside,
					clickOutsideCapture
				);
			}

			return () => {
				document.removeEventListener(
					'click',
					handleClickOutside,
					clickOutsideCapture
				);
			};
		}, [isOpen, onClickOutside, clickOutsideCapture]);

		return (
			<>
				{React.cloneElement(children as React.ReactElement<any>, {
					ref: childRef,
				})}
				{isOpen && (
					<div
						ref={popoverRef}
						className={`absolute ${containerClassName}`}
						style={{ position: transformMode, ...containerStyle }}
					>
						{typeof content === 'function' ? content(popoverState) : content}
					</div>
				)}
			</>
		);
	}
);

export default Popover;
