/**
 * @description: 与map类似，但没有返回值
 * @author: azureabaaba
 * @param {*} callback
 * @param {*} args
 * @return {*}
 */
Array.prototype.forEach = function(callback, args) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    let obj = Object(this);
    let len = obj.length >>> 0
    let k = 0;
    while (k < len) {
        if (k in obj) {
            callback.call(args, obj[k], k, obj);
        }
        k++;
    }
}