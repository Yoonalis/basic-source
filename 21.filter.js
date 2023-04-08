/**
 * @description: 返回满足过滤条件的数组
 * @author: azureabaaba
 * @param {*} callback
 * @param {*} thisArg
 * @return {*}
 */
Array.prototype.filter = function(callback, thisArg) {
    if (this === undefined) {
        throw new TypeError('this is null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    let res = [];
    let obj = Object(this);
    let len = obj.length >>> 0;
    for (let i = 0; i < len; i++) {
        if (i in obj) {
            if (callback.call(thisArg, obj[i], i, obj)) {
                res.push(obj[i]);
            }
        }
    }
    return res;
}


// 测试
function unique5(arr) {
    return arr.filter((item, index)=> {
        return arr.indexOf(item) === index;
    });
}

console.log(unique5([2,5,6,2,2,4,6,7,4]));
