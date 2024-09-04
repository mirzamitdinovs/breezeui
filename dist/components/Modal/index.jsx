'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { forwardRef, useImperativeHandle, useState, } from 'react';
import Button from '../Button';
var Modal = forwardRef(function (_a, ref) {
    var children = _a.children, save = _a.save, cancel = _a.cancel, title = _a.title, _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.showPadding, showPadding = _c === void 0 ? true : _c, header = _a.header, _d = _a.hideButtons, hideButtons = _d === void 0 ? false : _d, _e = _a.hideHeader, hideHeader = _e === void 0 ? false : _e;
    var _f = useState(false), toggle = _f[0], setToggle = _f[1];
    var open = function () {
        setToggle(true);
    };
    var close = function () {
        setToggle(false);
    };
    useImperativeHandle(ref, function () { return ({
        open: open,
        close: close,
    }); }, []);
    var onCancel = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cancel) return [3 /*break*/, 2];
                    return [4 /*yield*/, cancel()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    close();
                    return [2 /*return*/];
            }
        });
    }); };
    var onSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var form;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!save)
                        return [2 /*return*/];
                    return [4 /*yield*/, save()];
                case 1:
                    _a.sent();
                    form = document.querySelector('form');
                    if (form && form.checkValidity()) {
                        close();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var sizeClasses = {
        sm: 'max-w-lg',
        md: 'max-w-xl',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    };
    if (!toggle)
        return null;
    return (<div className='fixed inset-0 z-[100] flex items-center justify-center sm:px-5'>
				<div className='absolute inset-0 bg-slate-900/60 backdrop-blur transition-opacity duration-300'/>
				<div className={"relative w-full ".concat(sizeClasses[size], " max-h-[90vh] flex flex-col rounded-lg bg-white text-center transition-opacity duration-300 dark:bg-navy-700")}>
					{!hideHeader && (<div className='flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5'>
							{header ? (header) : (<h3 className='text-base font-medium text-slate-700 dark:text-navy-100'>
									{title}
								</h3>)}
							<button type='button' onClick={onCancel} className='btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12'/>
								</svg>
							</button>
						</div>)}
					<div className={"flex-1 ".concat(showPadding ? 'p-5' : '', " scrollbar-sm overflow-y-scroll")}>
						<div>{children}</div>
						{!hideButtons && (<div className='pt-2 flex justify-end gap-2'>
								<Button type='error' onClick={onCancel} buttonType='button'>
									Cancel
								</Button>

								<Button onClick={onSave} type='success' buttonType={save ? 'button' : 'submit'}>
									Save
								</Button>
							</div>)}
					</div>
				</div>
			</div>);
});
export default Modal;
