/**
 * @description: 将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式，便于再次调用，例如f(1)(2)
 * @author: azureabaaba
 * @return {*}
 */
function add() {
    const _args = [...arguments];
    function fn() {
        _args.push(...arguments);
        return fn;
    }
    fn.toString = function() {
        return _args.reduce((cur, item) => cur + item);
    }
    return fn;
}