/**
 * @description: 实现bind
 * @author: azureabaaba
 * @param {*} context
 * @param {array} args
 * @return {*}
 */
Function.prototype.bind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('type error');
    }
    let self = this;
    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments);
        }
        return self.apply(context, [...args, ...arguments]);
    }
}