/*
 * @Author: azureabaaba
 * @Date: 2023-04-07 17:45:05
 * @Description: 连续触发事件，但在n秒内只执行一次
 * @FilePath: \2.节流.js
 */

function throttle(func, wait) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        (!timer) && setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, wait);
    }
}

