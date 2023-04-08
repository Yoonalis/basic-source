/**
 * @description: 利用set
 * @author: azureabaaba
 * @param {*} str
 * @return {*}
 */
function unique(str) {
    return Array.from(new Set(str.split(''))).join('');
}