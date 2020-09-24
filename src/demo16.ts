/*
 * @Author: your name
 * @Date: 2020-09-24 15:09:00
 * @LastEditTime: 2020-09-24 15:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\src\demo16.ts
 */

// const Status ={
//     MESSAGE:0,
//     SPA:1,
//     DABAOJIAN:2
// }
// function getServe(status: any) {
//     if (status === Status.MESSAGE) {
//         return "MESSAGE"
//     } else if (status === Status.SPA) {
//         return "SPA"
//     } else if (status === Status.DABAOJIAN) {
//         return 'DABAOJIAN'
//     }
// }

//  enum //枚举
enum Status {
    MESSAGE=2,
    SPA,
    DABAOJIAN
}
function getServe(status: any) {
    if (status === Status.MESSAGE) {
        return "MESSAGE"
    } else if (status === Status.SPA) {
        return "SPA"
    } else if (status === Status.DABAOJIAN) {
        return 'DABAOJIAN'
    }
}

console.log(Status.MESSAGE,Status[3]);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);



const result = getServe(3)
console.log(`我要去${result}`);

