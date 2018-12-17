<template>
  <v-container>
      <top class="top"></top>
    <v-layout class="mid" row>
        <v-flex>
          <br>
          <v-card  @click="changeroute('new')" align="center" color="yellow accent-1">
            <v-card-text align="center" >
              <b><font size="4">最新商品</font></b>
            </v-card-text>
          </v-card>
          <v-card>
            <br>
            <v-layout align-end justify-space-around wrap>
            <v-flex v-bind:key=item.name v-for ="item in products">
              <v-card flat max-width="120px" >
                <v-img contain class="pointer" max-width="100px" max-height="120px" @click="changerouteProduct(item.id)" v-bind:src=item.picture></v-img>
                <v-card-text class="pointer" @click="changerouteProduct(item.id)">{{item.name}}</v-card-text>
              </v-card>
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
      <td class="text-xs-center"  @click="changerouteArticle(props.item.id)"> <p class="pointer">{{props.item.date}} </p></td>
      <td class="text-xs-center" @click="changerouteArticle(props.item.id)"><p class="pointer">{{ props.item.title }} </p></td>
    </template>
  </v-data-table>
          </v-card>
          <br>
          <v-card @click="changeroute('about')" align="center" color="yellow accent-1">
            <v-card-text align="center">
              <b><font size="4">關於亞帝</font></b>
            </v-card-text>
          </v-card>
          <v-card>
            <v-flex>
            <v-card-text><p v-html="about"></p></v-card-text>
            <v-btn flat ripple small="" @click="changeroute('introduction')">更多</v-btn>            
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex>
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
      self.about = self.about.replace(/\n|\r\n/g,"<br/>")
      console.log(self.about)
    }).catch(error=>{
    })

    api.getLastestArticle().then(res=>{
      self.articles = res.data.articles;
    }).catch(error=>{
    })

    api.getLastestProduct(5).then(res=>{
      self.products = res.data.products;
    }).catch(error=>{
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

.full {
  width: 100%;
  height: auto;
}

.pointer {cursor: pointer;}
</style>
