/*
 * @Author: your name
 * @Date: 2020-09-24 15:27:05
 * @LastEditTime: 2020-09-24 15:38:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\src\demo18.ts
 */

/**
 * 类中使用泛型
 */

// interface Girl {
//     name: string
// }

// class SelectGirl<T extends Girl> {
//     constructor(private girls: T[]) { }
//     getGirl(index: number): string {
//         return this.girls[index].name
//     }
// }
// const selectGirl = new SelectGirl([
//     { name: "大脚" }, { name: "刘颖" }, { name: "小红" }
// ])

class SelectGirl<T extends number | string> {
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index]
    }
}
const selectGirl = new SelectGirl<string>(["大脚", "刘颖", "小红"])
console.log(selectGirl.getGirl(1));


