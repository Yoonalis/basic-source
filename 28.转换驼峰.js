/**
 * @description: 操作字符串数组
 * @author: azureabaaba
 * @param {*} str
 * @return {*}
 */
function transformStr2Hump1(str) {
    if(str == null) {
        return "";
    }
    var strArr = str.split('-');
    for(var i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join('');
}


/**
 * @description: 操作字符数组
 * @author: azureabaaba
 * @param {*} str
 * @return {*}
 */
function transformStr2Hump2(str) {
    if(str == null) {
        return "";
    }
    var strArr  =str.split('');
    for(var i = 0; i < strArr.length; i++) {
        if(strArr[i] == "-"){
            //删除-
            strArr.splice(i, 1);
            //将该处改为大写
            if(i < strArr.length) {
                strArr[i] = strArr[i].toUpperCase();
            }
        }
    }
    return strArr.join("");
}


/**
 * @description: 利用正则
 * @author: azureabaaba
 * @param {*} str
 * @return {*}
 */
function transformStr2Hump3(str) {
    if(str == null) {
        return "";
    }
    var reg = /-(\w)/g;//匹配字母或数字或下划线或汉字
    return str.replace(reg, function($0, $1) {
        return $1.toUpperCase();
    })
}