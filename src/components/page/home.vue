<template>
  <v-container fluid="">
    <top class="top"></top>
    <v-layout class="mid" row="">
        <v-flex xs8 offset-xs1>
          <br>
          <v-card  @click="changeroute('new')" align="center" color="yellow accent-1">
            <v-card-text align="center" >
              <b><font size="4">最新商品</font></b>
            </v-card-text>
          </v-card>
          <v-card>
            <br>
            <v-layout row>
            <v-flex xs3  v-bind:key=item.name v-for ="item in products">
            <v-card-media height="140px" @click="changerouteProduct(item.id)" v-bind:src=item.picture></v-card-media>
            <v-card-text align="center" @click="changerouteProduct(item.id)">{{item.name}}</v-card-text>
            </v-flex>
            </v-layout>
          </v-card>
          <br>
          <v-card @click="changeroute('news')" class="bottom" align="center" color="yellow accent-1">
            <v-card-text align="center">
              <b><font size="4" >最新消息</font></b>
            </v-card-text>
          </v-card>
          <v-card align="center">
            <v-data-table
            color= "white"
    :headers="headers"
    :items="articles"
    class="elevation-1"
    hide-actions
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td class="text-xs-center"  @click="changerouteArticle(props.item.id)"> {{props.item.date}} </td>
      <td class="text-xs-center" @click="changerouteArticle(props.item.id)">{{ props.item.title }}</td>
    </template>
  </v-data-table>
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
            <v-btn flat ripple small="" @click="changeroute('introduction')">更多</v-btn>
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
      headers:[ {text: '日期',align: 'center',sortable: false,value: 'date'},{text: '標題',align: 'center',sortable: false,value: 'title'},],
      articles:[],
      products:[],
    }
  },
   methods: {
    changeroute (url) {
      this.$router.push('/home/'+ url)
    },
    changerouteArticle(url){
      this.$router.push('/article_view/'+url)
    },
    changerouteProduct(url){
      this.$router.push('/product_view/'+url)
    }
  },
  beforeMount(){
    let self = this
    api.getArticle(15).then(res=>{
      self.about = res.data.article.context;
      console.log(self.about);
    }).catch(error=>{
      alert(error)
    })

    api.getLastestArticle().then(res=>{
      self.articles = res.data.articles;
    }).catch(error=>{
      alert(error)
    })

    api.getLastestProduct(5).then(res=>{
      self.products = res.data.products;
      console.log(self.products);
    }).catch(error=>{
      alert(error)
    })
  }
}
</script>

<style>
.top {
    position: relative;
    z-index: 100;
}

.mid {
    position: relative;
    z-index: 0;
}
</style>
