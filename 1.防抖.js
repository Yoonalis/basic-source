// 防抖：触发事件n秒后才执行函数，如果n秒内又触发了时间，则会重新记录函数执行时间

/**
 * @description: 非立即执行版本（一般防抖定义）
 * @author: azureabaaba
 * @param {*} func
 * @param {*} wait
 * @return {*}
 */
function debounce1(func, wait) {
    let timer = null;
    return function () {
        const args = [...arguments];
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    }
}

/**
 * @description: 立即执行版本（触发事件后立即调用，wait秒内触发事件不会执行功能函数下一次调用）
 * @author: azureabaaba
 * @param {*} func
 * @param {*} wait
 * @return {*}
 */
function debounce2(func, wait) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        timer && clearTimeout(timer);
        const callNow = !timer;
        timer = setTimeout(() => {
            timer = null;
        }, wait);
        if (callNow) func.apply(context, args);
    }
}

/**
 * @description: 合并写法（非立即+立即）
 * @author: azureabaaba
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 * @return {*}
 */
function debounce(func, wait, immediate) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        timer && clearTimeout(timer);
        if (immediate) {
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) func.apply(context, args);
        } else {
            timer = setTimeout(() => {
                func.apply(context, args);
            }, wait)
        }
    }
}
