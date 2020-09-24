/*
 * @Author: your name
 * @Date: 2020-09-24 13:52:06
 * @LastEditTime: 2020-09-24 13:59:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo14.ts
 */

class Person14 {

    public readonly _name: string
    constructor(public name: string) {
        this._name = name
    }
}

const person = new Person14('kuangjie')
// person._name = 'xxx'  //只读属性
console.log(person._name);

/**
 * 抽象类
 */

abstract class Girl14 {
    abstract skill()
}

class Waiter extends Girl14 {
    // 业务逻辑
    skill() {
        console.log('大爷儿,请喝水');
    }
}

class BaseTeacher extends Girl14 {
    skill() {
        console.log('大爷儿,来个泰式按摩吧');
    }
}

class seniorTeacher extends Girl14 {
    skill() {
        console.log('大爷儿,全身SPA');
    }
}