/*
 * @Author: your name
 * @Date: 2020-09-24 15:17:04
 * @LastEditTime: 2020-09-24 15:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\src\demo17.ts
 */

/**
 * 泛型
 */

// 第一个参数传什么类型 第二个参数也要传什么类型

function join<T, P>(f: T, s: P) {
    return `${f}${s}`
}

const add = join<string, number>('1', 3)

console.log(add);


// 泛型中数组的使用  一般用T来代替泛型
function myFun<T>(params: Array<T>) {
    return params
}

myFun<string>(["123", "456"])