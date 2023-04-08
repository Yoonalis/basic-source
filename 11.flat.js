/*
 * @Author: azureabaaba
 * @Date: 2023-04-08 09:08:20
 * @Description: 把带有嵌套的数组平摊为一整个数组
 * @FilePath: \11.flat.js
 */

// api示例
// arr = [1,2,[3,9,[5,[7,8,[9]]]]]
// const res = arr.flat(Infinity)
// console.log(res);



/**
 * @description: 使用reduce
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
} 

/**
 * @description: 函数递归
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
let res = []
function flatten1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten1(arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
}