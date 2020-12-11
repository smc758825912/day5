/*
 * @Author: your name
 * @Date: 2020-12-11 08:13:49
 * @LastEditTime: 2020-12-11 08:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day5\myapp\src\mock\data.js
 */
import Mock from 'mockjs'
Mock.mock('/api',()=>{
    return Mock.mock({
        'list|10':[{
            name:'@cname',
            img:'image(100x100,@color)'
        }]
    })
})