/**
 * @description: 将数字转换为每三位添加一个逗号
 * @author: azureabaaba
 * @param {*} num
 * @return {*}
 */
function numFormat(num) {
    num = num.toString().split('.');
    let arr = num[0].split('').reverse();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && i%3 === 0) {
            res.push(',');
        }
        res.push(arr[i]);
    }
    res.reverse();
    if (num[1]) {
        res = res.join('').concat("." + num[1]);
    } else {
        res = res.join('');
    }
    return res;
}

// test
// console.log(numFormat(21481491));