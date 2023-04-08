/**
 * @description: 数组按给定值分块
 * @author: azureabaaba
 * @param {*} size
 * @return {*}
 */
Array.prototype.chunk = function(size) {
    if(this.length === 0) {
        return this;
    }
    let size = size > 1 ? (size > this.length ? this.length : size) : 1;
    let res = [];
    let smallChunk = [];
    this.forEach((item) => {
        smallChunk.push(item);
        if (smallChunk.length === size) {
            res.push(smallChunk);
            smallChunk = [];
        }
    })
    if (smallChunk.length > 0) {
        res.push(smallChunk);
    }
    return res;
}