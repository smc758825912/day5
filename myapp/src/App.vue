<!--
 * @Author: your name
 * @Date: 2020-12-11 08:12:39
 * @LastEditTime: 2020-12-11 08:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day5\myapp\src\App.vue
-->
<template>
  <div id="app">
    <input type="text">
    <div v-for="(item,index) in list" :key="index" >
      <dl><img src={item.img} alt=""></dl>
      {{item.name}}
    </div>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'App',
  data () {
    return {
      list:[]  
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata(){
      axios('/api').then(res=>{
        console.log(res);
        this.list = res.data.list
        console.log(this.list,'list');
        
      }) 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
