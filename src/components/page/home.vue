<template>
  <v-container>
    <top></top>
    <v-layout row="">
        <v-flex xs10>
          <br>
          <v-card-media @click="changeroute('new')" align="center">
            <v-card-text align="center">
              <b>最新商品</b>
            </v-card-text>
          </v-card-media>
          <v-card height="200px">
            <br>
            <v-flex xs2 offset-xs1>
            <v-card-media height="140px" @click="changeroute">商品圖片</v-card-media>
            <v-card-text >商品名稱</v-card-text>
            </v-flex>
          </v-card>
          <v-card-media @click="changeroute('news')" align="center">
            <v-card-text align="center">
              <b>最新消息</b>
            </v-card-text>
          </v-card-media>
          <v-card height="200px">
            <v-list>
              <v-list-tile>
                <v-list-tile-title @click="changeroute">內容...</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card>
          <br>
          <v-card-media @click="changeroute('about')" align="center">
            <v-card-text align="center">
              <b>關於亞帝</b>
            </v-card-text>
          </v-card-media>
          <v-card height="200px">
            <v-flex xs12>
            <v-card-text height="150px" >內容...</v-card-text>
            </v-flex>
            <v-flex offset-10xs>
            <v-btn flat ripple small="" @click="changeroute('about')">更多</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <right></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
export default {
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
    }
  }
}
</script>
