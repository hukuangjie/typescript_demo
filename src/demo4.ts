/*
 * @Author: your name
 * @Date: 2020-09-23 16:41:21
 * @LastEditTime: 2020-09-23 17:13:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo4.ts
 */


/**
 * 类型注解和类型推断
 */
let count1: number;
count1 = 123

let countInference = 123


/**
 * 能够自己分析出类型的
 */
const one = 1
const two = 2
const three = one + two

function getTotal(one: number, two: number) {
    return one + two
}

const total = getTotal(1, 2)


const Xiaojiejie = {
    name: 'liuying',
    age: 18
}

