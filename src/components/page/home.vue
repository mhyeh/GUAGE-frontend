<template>
  <v-container>
    <top></top>
    <v-layout row="">
        <v-flex xs10>
          <v-card height="30px" align="center">最新商品</v-card>
          <v-card height="200px"></v-card>
          <v-card height="30px" align="center">最新消息</v-card>
          <v-card height="200px"></v-card>
          <v-card height="30px" align="center">關於亞帝</v-card>
          <v-card height="200px"></v-card>
        </v-flex>
        <v-flex xs2>
          <right></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
export default{
}
/*data:{
  items[
  {message: '關於亞帝'},
  {message: '產品目錄'},
  {message: '衍生資訊'},
  {message: '應用產業'},
  {message: '最新消息'},
  {message: '技術園地'},
  {message: '產品應用現場'},
  {message: '相關連結'},
  {message: '人才自薦'},
  {message: 'Q&A'},
  {message: '聯絡我們'}
  ]
}*/
</script>
