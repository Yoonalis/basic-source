/*
 * @Author: = =
 * @Date: 2023-04-07 18:42:54
 * @Description: 数组去重
 * @FilePath: \7.数组去重.js
 */


/**
 * @description: 利用set
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function unique1(arr) {
    return Array.from(new Set(arr));
}


/**
 * @description: 两层for + splice
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function unique2(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len-=1;
                j-=1;
            }
        }
    }
    return arr
}


/**
 * @description: 利用indexof
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function unique3(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i] === -1)) res.push(arr[i]);
    }
    return res;
}


/**
 * @description: 利用includes
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function unique4(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}


/**
 * @description: 利用filter
 * @author: azureabaaba
 * @param {*} arr
 * @return {*}
 */
function unique5(arr) {
    return arr.filter((item, index)=> {
        return arr.indexOf(item) === index;
    });
}


function unique6(arr) {
    let map = new Map();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
            res.push(arr[i]);
        }
    }
    return res;
}



// test
console.log(unique2([2,5,6,2,2,4,6,7,4]));
