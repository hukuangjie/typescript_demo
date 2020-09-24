/*
 * @Author: your name
 * @Date: 2020-09-24 13:14:33
 * @LastEditTime: 2020-09-24 13:30:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo10.ts
 */

class Lady {
    content = "hi.帅哥"
    sayHello() {
        return this.content
    }
}

class XiaoJieJie extends Lady {
    sayLove() {
        return super.sayHello()+',你好'
    }
    sayHello() {
        return 'hi,honney'
    }
}

const goddess = new XiaoJieJie()
console.log(goddess.sayHello());
console.log(goddess.sayLove());
