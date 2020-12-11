/*
 * @Author: your name
 * @Date: 2020-12-11 08:12:39
 * @LastEditTime: 2020-12-11 08:17:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \day5\myapp\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/mock/data'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
