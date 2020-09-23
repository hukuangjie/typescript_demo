/*
 * @Author: your name
 * @Date: 2020-09-23 22:36:32
 * @LastEditTime: 2020-09-23 22:56:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo5.ts
 */
function getTotal(one: number, two: number): number {
    return one + two
}

const total = getTotal(1, 2)



// 没有返回的
function sayHello(): void {
    console.log('hello world');
}

function errorFunction(): never {
    throw new Error()
    console.log('helloworld');

}

function forNever(): never {
    while (true) {

    }
    console.log('hello world');

}

// function add({ one, two }: { one: number, two: number }) {
//     return one + two
// }

// const total = add({ one: 1, two: 2 })

function getNumber({ one }: { one: number }) {
    return one
}
const one = getNumber({ one: 1 })