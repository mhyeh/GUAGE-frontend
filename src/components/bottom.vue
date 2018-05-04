<template>
  <v-footer height="300px">
      <v-layout row wrap="" justify-center="">
          <v-flex  v-bind:key=item v-for="item in toolbar" >
          <v-card ripple=""  align="center">{{ item }}</v-card>
        </v-flex>
          <v-flex xs12 text-xs-center><br>地址:台北市北投區     電話:傳真:<br>有限公司版權所有</v-flex>
      </v-layout>
  </v-footer>
</template>

<script>
export default {
 data () {
    return {
      toolbar: [
        "關於亞帝",
        "產品目錄",
        "衍生資訊",
        "應用產業",
        "最新消息",
        "技術園地",
        "產品應用現場",
        "相關連結",
        "人才自薦",
        "聯絡我們"
      ]
    }
  }
}
</script>

<style>

</style>
