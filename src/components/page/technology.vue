<template>
    <v-layout> 
        <v-flex offset-xs1 xs10>
            <br>
        <v-card v-if="this.pathchange == 'instruction'">
             <v-data-table
    :headers="headers"
    :items="instruction"
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
        <v-card v-else-if="this.pathchange == 'FAQ'">
             <v-data-table
    :headers="headers"
    :items="FAQ"
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
        <v-card v-if="this.pathchange == 'note'">
             <v-data-table
    :headers="headers"
    :items="note"
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
        <v-card v-if="this.pathchange == 'theory'">
             <v-data-table
    :headers="headers"
    :items="theory"
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
        <v-card v-if="this.pathchange == 'skill'">
             <v-data-table
    :headers="headers"
    :items="skill"
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
        <v-card v-if="this.pathchange == 'conversion'">
             <v-data-table
    :headers="headers"
    :items="conversion"
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
        <v-card v-if="this.pathchange == 'data'">
             <v-data-table
    :headers="headers"
    :items="datatable"
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
        <v-card v-if="this.pathchange == 't_link'">
             <v-data-table
    :headers="headers"
    :items="t_link"
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
        <v-card v-if="this.pathchange == 'issue'">
             <v-data-table
    :headers="headers"
    :items="issue"
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
             instruction:[],
             FAQ:[],
             note:[],
             theory:[],
             skill:[],
             conversion:[],
             datatable:[],
             t_link:[],
             issue:[]
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
        api.getArticleByClass(7).then(res=>{
            for(var i in res.data.articles){
                if(res.data.articles[i].type == '產品操作說明'){
                    self.instruction[self.instruction.length] = res.data.articles[i]; 
                }
                else if(res.data.articles[i].type == 'FAQ'){
                    self.FAQ[self.FAQ.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '人員安全衛生作業要點'){
                    self.note[self.note.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '理論彙集'){
                    self.theory[self.theory.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '實作技術'){
                    self.skill[self.skill.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '單位換算器/表'){
                    self.conversion[self.conversion.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '數據/資料對照表'){
                    self.datatable[self.datatable.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '技術連結'){
                    self.t_link[self.t_link.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '研究中議題'){
                    self.issue[self.issue.length] = res.data.articles[i];
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
