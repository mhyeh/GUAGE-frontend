<template>
    <v-layout>
        <v-flex offset-xs1 xs10>
            <br>
        <v-card>
             <v-data-table
    :headers="headers"
    :items="articles"
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
     data(){
         return {
             headers:[ {text: '標題',align: 'center',sortable: false,value: 'title'},],
             pagination:{},
             articles:[],
         }
     },
     methods:{
         changeRoute(id){
             this.$router.push('/article_view/'+ id)
             },
     },
    beforeMount(){
        let self = this;
        api.getArticleByClass(10).then(res=>{
            self.articles = res.data.articles
        }).catch(error=>{
            alert(error)
        })
    }
}
</script>


<style>

</style>
