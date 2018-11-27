<template>
    <v-layout>
        <v-flex offset-xs1 xs10>
            <br>
        <v-card v-if="this.pathchange == 'construction'">
             <v-data-table
    :headers="headers"
    :items="CONarticles"
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
      <td @click="changeRoute(props.item.id)" class="text-xs-center"><v-btn small>{{ props.item.title }}</v-btn></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-else-if="this.pathchange == 'manufacture'">
             <v-data-table
    :headers="headers"
    :items="MANarticles"
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
      <td class="text-xs-center" @click="changeRoute(props.item.id)">{{ props.item.title }}</td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-else-if="this.pathchange == 'electricity'">
           <v-data-table
    :headers="headers"
    :items="ELEarticles"
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
      <td class="text-xs-center" @click="changeRoute(props.item.id)">{{ props.item.title }}</td>
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
             headers:[ {text: '日期',align: 'center',sortable: false,value: 'date'},{text: '標題',align: 'center',sortable: false,value: 'title'},],
             pagination:{},
             pathchange:'',
             CONarticles:[],
             MANarticles:[],
             ELEarticles:[],
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
        api.getArticleByClass(4).then(res=>{
            for(var i in res.data.articles){
                if(res.data.articles[i].type=='營建工程業'){
                    self.CONarticles[self.CONarticles.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type=='製造業'){
                    self.MANarticles[self.MANarticles.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type=='水火電力燃氣業'){
                    self.ELEarticles[self.ELEarticles.length] = res.data.articles[i];
                }
            }
            self.pathchange = self.path
        }).catch(error=>{
        })

        
    }
}
</script>


<style>

</style>
