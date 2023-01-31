"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterSetTimeOut = void 0;
const betterSetTimeOut = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, time);
    });
};
exports.betterSetTimeOut = betterSetTimeOut;
