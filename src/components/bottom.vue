<template>
  <v-footer height="300px">
      <v-layout row wrap="" justify-center="">
         <v-toolbar  floating flat>
            <v-toolbar-items flat>
        <v-layout row >
            <v-flex v-bind:key=item.genre v-for="item in toolbar">
                <v-btn class="btnbottom" right flat  block @click="changeroute(item.url)" slot="activator"><b>{{ item.genre }}</b></v-btn>
            </v-flex>
        </v-layout>
            </v-toolbar-items>
          </v-toolbar>
          <v-flex xs12 text-xs-center><br>地址: 台北市北投區致遠一路二段109號 電話: 886-2-28235699  傳真: 886-2-28270646<br>亞帝國際有限公司版權所有</v-flex>
      </v-layout>
  </v-footer>
</template>

<script>
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
      ]
    }
  },
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
.btnbottom{
   min-height: 50px;
   min-width: 100px;
}
</style>
