/**
 * @description: 实现call，与apply的区别主要在参数不同
 * @author: azureabaaba
 * @param {*} context
 * @param {array} args
 * @return {*}
 */
Function.prototype.call = function(context = window, ...args) {
    if (typeof this !== 'function') {
        throw new Error('type error');
    }
    let fn = Symbol('fn');
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
}