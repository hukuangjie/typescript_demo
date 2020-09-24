/*
 * @Author: your name
 * @Date: 2020-09-23 16:15:30
 * @LastEditTime: 2020-09-23 16:40:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo3.ts
 */
const cont: number = 918;
const myName: string = 'hukuangjie'

const xiaoJieJie: {
    name: string, age: number
} = {
    name: '大脚',
    age: 19
}

const xiaoJieJies: string[] = ['谢大脚', '刘颖', '123']

class Person { }

const dajiao: Person = new Person()

const jianXiaoJieJie: () => string = () => {
    return '大脚'
}

console.log(jianXiaoJieJie());
