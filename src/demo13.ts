/*
 * @Author: your name
 * @Date: 2020-09-24 13:14:33
 * @LastEditTime: 2020-09-24 13:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo10.ts
 */

/**
 * 类的getter setter
 */

// class XiaoJieJie13 {
//     constructor(private _age: number) { }
//     get age() {
//         return this._age
//     }
//     set age(age: number) {
//         this._age = age
//     }
// }

// const dajiao = new XiaoJieJie13(28)

// dajiao.age = 18;
// console.log(dajiao.age);

class Girl {
    static sayLove() { //静态属性 ,不需要new对象.直接通过类名.方法就行
        return 'i love u'
    }
}

const girl = new Girl()
console.log(Girl.sayLove());
