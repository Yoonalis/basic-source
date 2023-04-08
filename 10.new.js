/**
 * @description: 创建一个新的对象
 * @description: 继承父类原型上的方法
 * @description: 添加父类的属性到新的对象上并初始化，保存方法的执行结果
 * @description: 如果执行结果有返回值并且是一个对象，返回执行的对象，否则，返回新创建的对象
 * @author: azureabaaba
 * @param {*} obj
 * @param {array} rest
 * @return {*}
 */
function _new(obj, ...rest) {
    const newObj = Object.create(obj.prototype);
    const res = obj.apply(newObj, rest);
    return typeof res === 'object' ? res : newObj;
}