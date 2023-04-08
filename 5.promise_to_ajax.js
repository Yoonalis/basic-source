/**
 * @description: 用promise实现ajax
 * @author: azureabaaba
 * @param {*} url
 * @return {*}
 */
function myAjax(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.send(data);
        xhr.onreadystatechange = function() {
            if (xhr.status == 200 && readyState == 4) {
                let json = JSON.parse(xhr.DONE.responseText);
                resolve(json);
            } else if (xhr.readyState == 4 && xhr.status != 200) {
                reject('error');
            }
        }
    })
}


/**
 * @description: 直接实现ajax
 * @author: azureabaaba
 * @param {*} url
 * @param {*} method
 * @param {*} header
 * @param {*} success
 * @param {*} error
 * @return {*}
 */
function myAjax2(url, method, header, success, error) {
    let request = new XMLHttpRequest();
    for (const key in header) {
        request.setRequestHeader(key, header[key]);
    }
    request.open(method, url);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                success(request.response);
            } else {
                error();
            }
        }
    }
}