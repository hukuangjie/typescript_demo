/*
 * @Author: your name
 * @Date: 2020-09-24 15:43:46
 * @LastEditTime: 2020-09-24 16:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\TSWeb\src\page.ts
 */


//  命名空间
namespace Home {
    export class Page {
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }
}
