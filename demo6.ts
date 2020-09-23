/*
 * @Author: your name
 * @Date: 2020-09-23 22:57:55
 * @LastEditTime: 2020-09-23 23:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo6.ts
 */
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['1', '2']
const undefinedArr: undefined[] = [undefined, undefined]
const arr: (number | string)[] = [1, '2', undefined]


// type alias 类型别名

type Lady = {
    name: string,
    age: number
}

class Madam {
    name: string;
    age: number;
}
// interface Woman {
//     name: string;
//     age: number;
// }
const xiaojiejies: Madam[] = [
    { name: '刘颖', age: 18 },
    { name: '张三', age: 16 },
]