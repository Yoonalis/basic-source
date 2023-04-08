/**
 * @description: 将所有可枚举属性的值从一个或多个源复制到目标对象，它将返回目标对象
 * @author: azureabaaba
 * @param {*} target
 * @param {array} objs
 * @return {*}
 */
function myAssgin(target, ...objs) {
    if (target === null || target === undefined) {
        throw new TypeError('can not convert null or undefined to object');
    }
    let res = Object(target);
    objs.forEach((obj) => {
        'use strict'
        if (obj != null && obj != undefined) {
            for (let key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    res[key] = obj[key];
                }
            }
        }
    })
    return res;
}

Object.defineProperties(Object, 'myAssgin', {
    value: myAssgin,
    writable: true,
    configurable: true,
    enumerable: false
})