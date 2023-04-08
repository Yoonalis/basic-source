/*
 * @Author: azureabaaba
 * @Date: 2023-04-08 09:42:00
 * @Description: Promise相关
 * @FilePath: \13.promise.js
 */



/**
 * @description: promise.all()：检测参数数组内部的所有promise实例是否成功，成功则调用then处理，否则变为reject状态
 * @author: azureabaaba
 * @param {*} promises
 * @return {*}
 */
Promise.myAll = function(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new Error('argument must be a array');
        }
        let count = 0;
        let len = promises.length;
        let res = [];
        promises.forEach((item) => {
            Promise.resolve(item).then((data) => {
                res.push(data);
                count+=1;
                if (count === len) return resolve(res);
            }, err => {
                return reject(err);
            })
        })
    })
}


/**
 * @description: 返回第一个状态改变的promise实例
 * @author: azureabaaba
 * @param {*} promises
 * @return {*}
 */
Promise.myRace = function(promises) {
    return new Promise(function(resolve, reject) {
        for (const item of promises) {
            Promise.resolve(item).then(resolve, reject);
        }
    })
}


/**
 * @description: 不论fulfilled还是rejected，只要所有promise状态发生变更，返回的promise对象才发生状态变更
 * @author: azureabaaba
 * @param {*} promises
 * @return {*}
 */
Promise.myAllSettled = function(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new Error('argument must be an array');
        }
        let res = [];
        let count = 0;
        let len = promises.length;
        promises.forEach(function (promise) {
            Promise.resolve(promise).then((data) => {
                res[count] = {
                    status: 'fulfilled',
                    data
                }
                if (++count == len) {//遍历完，走resolve
                    resolve(result);
                }
            }, (err) => {
                res[count] = {
                    status: 'rejected',
                    err
                }
                if (++count == len) {//遍历完依然走resolve
                    reject(result);
                }
            })
        })
    })
}


/**
 * @description: 一个fulfilled，则fulfilled; 全部rejected，则rejected
 * @author: azureabaaba
 * @param {*} promises
 * @return {*}
 */
Promise.myAny = function(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new Error('argument must be an array');
        }
        let count = 0;
        let errs = [];
        let len = promises.length
        promises.forEach((item) => {
            Promise.resolve(item).then(res => {
                resolve(res);//只要有一个成功，就走resolve
            }, err => {
                errs[count] = err;//遇到错误先不管，继续检查
                if (++count == len) {//直到遇到成功的或检查完
                    reject(errs);
                }
            })
        })
    })
}