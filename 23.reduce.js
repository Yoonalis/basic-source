/**
 * @description: 对数组里每个元素执行函数，将结果汇总为单个返回值返回
 * @author: azureabaaba
 * @param {*} fn
 * @return {*}
 */
Array.prototype.reduce = function(fn) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`);
    }
    let arr = this;
    let len = arr.length >>> 0;
    let res;
    let k = 0;
    if (arguments.length >= 2) {
        res = arguments[1];
    } else {
        while (k < len && !(k in arr)) {
            k++;
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        res = arr[k++];
    }
    while (k < len) {
        if (k in arr) {
            res = fn(res, arr[k], k, arr);
        }
        k++;
    }
    return res;
}

function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
} 

console.log(flatten([1,2,[3,4,5], [4,5,[5,6,[7,[6]]]]]));