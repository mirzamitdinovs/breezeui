var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useRef, useEffect, forwardRef, useCallback, } from 'react';
var DEFAULT_POSITIONS = ['top', 'left', 'right', 'bottom'];
var Popover = forwardRef(function (_a, externalRef) {
    var isOpen = _a.isOpen, children = _a.children, content = _a.content, _b = _a.positions, positions = _b === void 0 ? DEFAULT_POSITIONS : _b, _c = _a.align, align = _c === void 0 ? 'center' : _c, _d = _a.padding, padding = _d === void 0 ? 0 : _d, _e = _a.reposition, reposition = _e === void 0 ? true : _e, _f = _a.parentElement, parentElement = _f === void 0 ? document.body : _f, boundaryElement = _a.boundaryElement, containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, transform = _a.transform, _g = _a.transformMode, transformMode = _g === void 0 ? 'absolute' : _g, _h = _a.boundaryInset, boundaryInset = _h === void 0 ? 0 : _h, onClickOutside = _a.onClickOutside, _j = _a.clickOutsideCapture, clickOutsideCapture = _j === void 0 ? false : _j;
    var popoverRef = useRef(null);
    var childRef = useRef(null);
    var _k = useState({
        position: positions[0],
        align: align,
        nudgedLeft: 0,
        nudgedTop: 0,
        padding: padding,
        childRect: {},
        popoverRect: {},
        parentRect: {},
        boundaryRect: {},
        boundaryInset: boundaryInset,
        violations: {},
        hasViolations: false,
    }), popoverState = _k[0], setPopoverState = _k[1];
    var positionPopover = useCallback(function () {
        if (childRef.current && popoverRef.current) {
            var childRect = childRef.current.getBoundingClientRect();
            var popoverRect = popoverRef.current.getBoundingClientRect();
            var top_1 = 0;
            var left = 0;
            switch (popoverState.position) {
                case 'top':
                    top_1 = childRect.top - popoverRect.height - padding;
                    left = childRect.left + childRect.width / 2 - popoverRect.width / 2;
                    break;
                case 'bottom':
                    top_1 = childRect.bottom + padding;
                    left = childRect.left + childRect.width / 2 - popoverRect.width / 2;
                    break;
                case 'left':
                    top_1 = childRect.top + childRect.height / 2 - popoverRect.height / 2;
                    left = childRect.left - popoverRect.width - padding;
                    break;
                case 'right':
                    top_1 = childRect.top + childRect.height / 2 - popoverRect.height / 2;
                    left = childRect.right + padding;
                    break;
            }
            popoverRef.current.style.top = "".concat(top_1, "px");
            popoverRef.current.style.left = "".concat(left, "px");
            // Set the state with the new positions and rects
            setPopoverState(__assign(__assign({}, popoverState), { childRect: childRect, popoverRect: popoverRect }));
        }
    }, [popoverState, padding]);
    useEffect(function () {
        if (isOpen) {
            positionPopover();
        }
    }, [isOpen, positionPopover]);
    useEffect(function () {
        var handleClickOutside = function (e) {
            if (isOpen &&
                popoverRef.current &&
                childRef.current &&
                !popoverRef.current.contains(e.target) &&
                !childRef.current.contains(e.target)) {
                onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleClickOutside, clickOutsideCapture);
        }
        else {
            document.removeEventListener('click', handleClickOutside, clickOutsideCapture);
        }
        return function () {
            document.removeEventListener('click', handleClickOutside, clickOutsideCapture);
        };
    }, [isOpen, onClickOutside, clickOutsideCapture]);
    return (<>
				{React.cloneElement(children, {
            ref: childRef,
        })}
				{isOpen && (<div ref={popoverRef} className={"absolute ".concat(containerClassName)} style={__assign({ position: transformMode }, containerStyle)}>
						{typeof content === 'function' ? content(popoverState) : content}
					</div>)}
			</>);
});
export default Popover;
