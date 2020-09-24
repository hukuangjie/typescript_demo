/*
 * @Author: your name
 * @Date: 2020-09-24 10:44:46
 * @LastEditTime: 2020-09-24 13:23:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\demo9.ts
 */
// /*
//  * @Author: your name
//  * @Date: 2020-09-24 10:32:02
//  * @LastEditTime: 2020-09-24 10:57:05
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \typescript_demo\demo8.ts
//  */

// interface Girl {
//     name: string;
//     age: number;
//     bust: number;
//     waisline?: number;
//     [propname: string]: any;
//     say(): string
// }

// interface Teacher extends Girl {
//     teach(): string
// }

// // type Girl1 = {
// //     name: string,
// //     age: number,
// //     bust: number
// // }

// class XiaoJieJie implements Girl {
//     name: '李颖';
//     age: 19;
//     bust: 90;
//     say() {
//         return "欢迎光临,洗浴中心"
//     }
// }

// const girl = {
//     name: '大脚',
//     age: 18,
//     bust: 94,
//     waisline: 23,
//     sex: '女',
//     say() {
//         return "欢迎光临,洗浴中心"
//     },
//     teach() {
//         return "我来教你如何操作"
//     }
// }

// const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
// }
// const getResume = (girl: Teacher) => {
//     console.log(girl.name + '年龄是' + girl.age);
//     console.log(girl.name + '胸围是' + girl.bust);
//     girl.waisline && console.log(girl.name + '腰围是' + girl.waisline);
//     girl.sex && console.log(girl.name + '性别是' + girl.sex);

// }

// screenResume(girl)
// getResume(girl)

