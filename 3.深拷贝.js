/*
 * @Author: azureabaaba
 * @Date: 2023-04-07 17:51:25
 * @Description: 拷贝引用类型在堆里的值，完全的拷贝，区别于浅拷贝只拷贝引用地址
 * @FilePath: \3.深拷贝.js
 */


/**
 * @description: 递归实现
 * @author: azureabaaba
 * @param {*} obj
 * @return {*}
 */
function cloneDeepDi(obj) {
    let keys = Object.keys(obj);
    let key = null;
    let value = null
    let res = {}
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        value = obj[key];
        if (value && typeof value === "object") {
            res[key] = cloneDeepDi(value);
        } else {
            res[key] = value;
        }
    }
    return res;
}


/**
 * @description: 解决循环依赖的递归实现
 * @author: azureabaaba
 * @param {*} obj
 * @param {*} parent
 * @return {*}
 */
function deepCopy(obj, parent = null) {
    // 创建一个新对象
    let result = {};
    let keys = Object.keys(obj),
        key = null,
        temp = null,
        _parent = parent;
    // 该字段有父级则需要追溯该字段的父级
    while (_parent) {
        // 如果该字段引用了它的父级则为循环引用
        if (_parent.originalParent === obj) {
            // 循环引用直接返回同级的新对象
            return _parent.currentParent;
        }
        _parent = _parent.parent;
    }
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        temp = obj[key];
        // 如果字段的值也是一个对象
        if (temp && typeof temp === 'object') {
            // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
            result[key] = DeepCopy(temp, {
                originalParent: obj,
                currentParent: result,
                parent: parent
            });

        } else {
            result[key] = temp;
        }
    }
    return result;
}
