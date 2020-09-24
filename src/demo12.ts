/*
 * @Author: your name
 * @Date: 2020-09-24 13:14:33
 * @LastEditTime: 2020-09-24 13:45:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo10.ts
 */

/**
 * 类的构造函数
 */

class Person {
    constructor(public name: string) { }
}

class Teacher extends Person {
    constructor(public name: string, public age: number) {  //子类中如果要写构造函数 需要加super()
        super('111')
    }
}
const teacher = new Teacher('kuangjie', 19)

console.log(teacher.name);
console.log(teacher.age);
