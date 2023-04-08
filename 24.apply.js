/**
 * @description: 实现apply方法
 * @author: azureabaaba
 * @param {*} context
 * @param {*} args 数组
 * @return {*}
 */
Function.prototype.apply = function(context = window, args) {
    if (typeof this !== 'function') {
        throw new TypeError('type error');
    }
    let fn = Symbol('fn');
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
}
