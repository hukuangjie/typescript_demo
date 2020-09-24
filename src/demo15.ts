/*
 * @Author: your name
 * @Date: 2020-09-24 14:37:58
 * @LastEditTime: 2020-09-24 15:08:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\src\demo15.ts
 */

/**
 * 类型守护
 */
interface Waiter {
    anjiao: boolean
    say: () => {

    }
}
interface Teacher {
    anjiao: boolean
    skill: () => {

    }
}

// function juegeWho(animal: Waiter | Teacher) {
//     if (animal.anjiao) {
//         // 断言 的方式
//         (animal as Teacher).skill()
//     } else {
//         (animal as Waiter).say()
//     }
// }

// function judgeWhoTwo(animal: Waiter | Teacher) {
//    // in 的方式
//     if ("skill" in animal) {
//         animal.skill()
//     } else {
//         animal.say()
//     }
// }

// function add(first: string | number, second: string | number) {
//      //typeof 的方式
//     if (typeof first === "string" || typeof second === "string") {
//         return `${first}${second}`
//     }
//     return first + second
// } 

class NumberObj {
    count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    // instanceof 的方式
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}