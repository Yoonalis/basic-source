/**
 * @description: 创建一个新数组，结果是该数组中的每个元素都调用一次提供的函数后的返回值
 * @author: azureabaaba
 * @param {*} fn
 * @return {*}
 */
Array.prototype.map = function (fn) {
    if (typeof fn !== 'function') {
        throw new TypeError(fn + 'is not a function');
    }
    let arr = this;
    let len = arr.length;
    let res = new Array(len);
    for (let i = 0; i < len; i++) {
        let tmp = fn.call(arguments[1], arr[i], i, arr);
        res[i] = tmp;
    }
    return tmp;
}