// 主要解决的问题
+0 === -0; // true
NaN === NaN // false

function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1/x === 1/y;
    } else {
        return x !== x && y !== y;
    }
}