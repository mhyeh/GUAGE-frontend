<template>
    <v-layout>
        <v-flex offset-xs1 xs10>
            <br>
        <v-card v-if="this.pathchange == 'equipment'">
             <v-data-table
    :headers="headers"
    :items="equipment"
    class="elevation-1"
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
      <td class="text-xs-center"> {{props.item.date}} </td>
      <td @click="changeRoute(props.item.id)" class="text-xs-center"><p class="pointer">{{ props.item.title }}</p></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-else-if="this.pathchange == 'film'">
             <v-data-table
    :headers="headers"
    :items="film"
    v-bind:pagination.sync="pagination"
    class="elevation-1"
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
      <td class="text-xs-center"> {{props.item.date}} </td>
      <td class="text-xs-center"><a v-bind:href="props.item.context" target="_blank"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-else-if="this.pathchange == 'picture'">
           <v-data-table
    :headers="headers"
    :items="picture"
    class="elevation-1"
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
      <td class="text-xs-center"> {{props.item.date}} </td>
      <td class="text-xs-center" @click="changeRoute(props.item.id)"><p class="pointer">{{ props.item.title }}</p></td>
    </template>
  </v-data-table>
        </v-card>
        <br>
        </v-flex>
    </v-layout>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'
export default {
     props: ['path'],
     data(){
         return {
             headers:[ {text: '日期',align: 'center',sortable: false,value: 'date'},{text: '標題',align: 'center',sortable: false,value: 'title'}],
             pagination:{'sortBy':'date','descending':true},
             pathchange:'',
             equipment:[],
             film:[],
             picture:[],
         }
     },
     methods:{
         changeRoute(id){
             this.$router.push('/article_view/'+ id)
             },
     },
     watch: {
         'path' (newPath, oldPath) {
             this.pathchange = newPath;
         }
     },
    beforeMount(){
        let self = this;
        api.getArticleByClass(8).then(res=>{
            for(var i in res.data.articles){
                if(res.data.articles[i].type=='管路/設備儀表照片'){
                    self.equipment[self.equipment.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type=='影片'){
                    self.film[self.film.length] = res.data.articles[i];
                    console.log(self.film)
                }
                else if(res.data.articles[i].type=='文字圖案'){
                    self.picture[self.picture.length] = res.data.articles[i];
                }
                this.pathchange = this.path;
            }
        }).catch(error=>{
        })
    }
}
</script>


<style>
a {
    text-decoration:none;
    color :black
}
.pointer {cursor: pointer;}
</style>
