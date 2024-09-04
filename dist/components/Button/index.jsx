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
import React, { useState } from 'react';
var Button = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'default' : _b, _c = _a.variant, variant = _c === void 0 ? 'solid' : _c, _d = _a.buttonType, buttonType = _d === void 0 ? 'button' : _d, onClick = _a.onClick, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.showLoader, showLoader = _f === void 0 ? false : _f;
    var _g = useState(false), loading = _g[0], setLoading = _g[1];
    var solidClasses = {
        default: 'bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90',
        primary: 'bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90',
        secondary: 'bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90',
        info: 'bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90',
        success: 'bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90',
        warning: 'bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90',
        error: 'bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90',
    };
    var outlineClasses = {
        default: 'border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90',
        primary: 'border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90',
        secondary: 'border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90',
        info: 'border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90',
        success: 'border border-success font-medium text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success/90',
        warning: 'border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90',
        error: 'border border-error font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90',
    };
    var spinnerClasses = {
        default: 'border-slate-500 dark:border-navy-300',
        primary: variant === 'solid'
            ? 'border-white'
            : 'border-primary dark:border-accent',
        secondary: variant === 'solid' ? 'border-white' : 'border-secondary',
        info: variant === 'solid'
            ? 'border-white'
            : 'border-primary dark:border-accent',
        success: variant === 'solid' ? 'border-white' : 'border-success',
        warning: variant === 'solid' ? 'border-white' : 'border-warning',
        error: variant === 'solid' ? 'border-white' : 'border-error',
    };
    var selectedClasses = variant === 'outline' ? outlineClasses[type] : solidClasses[type];
    var handleClick = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(buttonType === 'button')) return [3 /*break*/, 3];
                    if (!onClick) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, onClick()];
                case 1:
                    _a.sent();
                    setLoading(false);
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    if (buttonType === 'submit') {
                        setTimeout(function () {
                            setLoading(true);
                        }, 0);
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<button type={buttonType} className={"btn gap-2 ".concat(selectedClasses, " ").concat((showLoader && loading) || disabled
            ? 'opacity-50 cursor-not-allowed'
            : '')} onClick={handleClick} disabled={(showLoader && loading) || disabled}>
			{showLoader && loading && (<div className={"spinner size-4 animate-spin rounded-full border-[3px] border-r-transparent ".concat(spinnerClasses[type])}></div>)}{' '}
			{children}
		</button>);
};
export default Button;
