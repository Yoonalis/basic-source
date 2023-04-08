/**
 * @description: 检测构造函数的prototype属性是否出现在某个实例对象的原型链上
 * @author: azureabaaba
 * @param {*} left
 * @param {*} right
 * @return {*}
 */
function myInstanceof (left, right) {
    if (typeof left !== 'Object' || left === null) return false;
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto === null) return false;
        if (proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}