/*
 * @Author: azureabaaba
 * @Date: 2023-04-08 10:57:14
 * @Description: 原型继承（寄生组合继承）
 * @FilePath: \16.原型继承.js
 */

function Parent() {
    this.name = 'parent';
}

function Child() {
    Parent.call(this);
    this.type = 'children';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;