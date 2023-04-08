/*
 * @Author: = =
 * @Date: 2023-04-07 18:14:32
 * @Description: 只执行一次
 * @FilePath: \4.once.js
 */

/**
 * @description: 只执行一次的函数
 * @author: azureabaaba
 * @param {*} func
 * @return {*}
 */
function once(func) {
    let tag = true;
    return function() {
        if (tag) {
            func.apply(null, arguments);
            tag = false;
        }
        return undefined;
    }
}