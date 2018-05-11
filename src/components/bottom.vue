<template>
  <v-footer height="300px">
      <v-layout row wrap="" justify-center="">
          <v-flex  v-bind:key=item v-for="item in toolbar" >
                <v-btn @click="changeroute(item.url)"  ripple="" flat=""><b>{{ item.genre }}</b></v-btn>
        </v-flex>
          <v-flex xs12 text-xs-center><br>地址: 台北市北投區致遠一路二段109號 電話: 886-2-28235699  傳真: 886-2-28270646<br>亞帝有限公司版權所有</v-flex>
      </v-layout>
  </v-footer>
</template>

<script>
export default {
 data () {
    return {
      toolbar: [
        {genre:"關於亞帝",url:"about"},
        {genre:"產品目錄",url:"catalog"},
        {genre:"衍生類別",url:"derivative"},
        {genre:"應用產業",url:"industry"},
        {genre:"最新消息",url:"news"},
        {genre:"技術園地",url:"technology"},
        {genre:"產品應用現場",url:"scene"},
        {genre:"相關連結",url:"link"},
        {genre:"人才自薦",url:"recommend"},
        {genre:"聯絡我們",url:"contact"}
      ]
    }
  },
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
    }
  }
}
</script>

<style>

</style>
