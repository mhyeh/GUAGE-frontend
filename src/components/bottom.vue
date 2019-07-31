<template>
  <v-footer height="200px">

      <v-layout >
            <center class="Bottom">
         <v-toolbar flat>
            <v-toolbar-items>
              <v-layout row class="hidden-md-and-down">
                  <v-flex v-bind:key=item.genre v-for="item in toolbar">
                      <v-btn flat block @click="changeroute(item.url)" slot="activator" class="btnBottom"><b>{{ item.genre }}</b></v-btn>
                  </v-flex>
              </v-layout>
            </v-toolbar-items>
          </v-toolbar>
          <v-layout row align-center="">
          <v-divider></v-divider>
            <v-card flat color="grey lighten-4">
              &nbsp;&nbsp;第&nbsp;{{counter}}&nbsp;位訪問者&nbsp;&nbsp;
            </v-card>
          <v-divider></v-divider>
          </v-layout>
          <v-flex><br>地址: 台北市北投區致遠一路二段109號 電話: 886-2-28235699  傳真: 886-2-28270646<br>亞帝國際有限公司版權所有<br>Copyright © 2018 Gauge Inc. All rights reserved</v-flex>
              </center>
      </v-layout>

  </v-footer>
</template>

<script>
import api from '../store/api.js'
export default {
 data () {
    return {
      toolbar: [
        {genre:"關於亞帝",url:"introduction"},
        {genre:"產品目錄",url:"new"},
        {genre:"衍生產品",url:"FRL"},
        {genre:"應用產業",url:"construction"},
        {genre:"最新消息",url:"lastest"},
        {genre:"技術園地",url:"instruction"},
        {genre:"產品應用現場",url:"equipment"},
        {genre:"相關連結",url:"relation"},
        {genre:"衍生品牌",url:"brands"},
        {genre:"聯絡我們",url:"information"}
      ],
      counter:null
    }
  },
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  beforeMount(){
    let self = this

    if(sessionStorage.getItem('counter') == undefined){
      api.setCounter().then(res=>{
          sessionStorage.setItem('counter',Math.random())
      })
    }
    

    api.getCounter().then(res=>{
      self.counter = res.data.article.context
    })
  }
}
</script>

<style>
.btnBottom{ 
  min-height: 50px;
}

.Bottom{
  margin:0px auto;
}
</style>
