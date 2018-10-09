<template>
  <v-container fluid="">
    <top></top>
    <v-layout row="">
        <v-flex xs10>
          <br>
          <v-card @click="changeroute('new')" align="center" color="yellow accent-1">
            <v-card-text align="center" >
              <b><font size="4">最新商品</font></b>
            </v-card-text>
          </v-card>
          <v-card height="200px">
            <br>
            <v-flex xs2 offset-xs1>
            <v-card-media height="140px" @click="changeroute">商品圖片</v-card-media>
            <v-card-text >商品名稱</v-card-text>
            </v-flex>
          </v-card>
          <v-card @click="changeroute('news')" align="center" color="yellow accent-1">
            <v-card-text align="center">
              <b><font size="4">最新消息</font></b>
            </v-card-text>
          </v-card>
          <v-card height="200px">
            <v-list>
              <v-list-tile>
                <v-list-tile-title @click="changeroute">內容...</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card>
          <br>
          <v-card @click="changeroute('about')" align="center" color="yellow accent-1">
            <v-card-text align="center">
              <b><font size="4">關於亞帝</font></b>
            </v-card-text>
          </v-card>
          <v-card height="200px">
            <v-flex xs12>
            <v-card-text height="150px">{{about}}</v-card-text>
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
import api from '../../store/api'
export default {
  data(){
    return{
      about: '',
    }
  },
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
    }
  },
  beforeMount(){
    let self = this
    api.getArticle(15).then(res=>{
      self.about = res.data.article.context;
    }).catch(error=>{
      alert(error)
    })
  }
}
</script>
