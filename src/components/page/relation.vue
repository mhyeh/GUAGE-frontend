<template>
    <v-layout> 
        <v-flex offset-xs1 xs10>
            <br>
        <v-card v-if="this.pathchange == 'relation'">
             <v-data-table
    :headers="headers"
    :items="relation"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context" ><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-else-if="this.pathchange == 'friend'">
             <v-data-table
    :headers="headers"
    :items="friend"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'national'">
             <v-data-table
    :headers="headers"
    :items="national"
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
    <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'develop'">
             <v-data-table
    :headers="headers"
    :items="develop"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'governoment'">
             <v-data-table
    :headers="headers"
    :items="governoment"
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
      <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'source'">
             <v-data-table
    :headers="headers"
    :items="source"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'commerce'">
             <v-data-table
    :headers="headers"
    :items="commerce"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'work'">
             <v-data-table
    :headers="headers"
    :items="work"
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
      <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'rest'">
             <v-data-table
    :headers="headers"
    :items="rest"
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
    <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'life'">
             <v-data-table
    :headers="headers"
    :items="life"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'enterprise'">
             <v-data-table
    :headers="headers"
    :items="enterprise"
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
      <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
    </template>
  </v-data-table>
        </v-card>
        <v-card v-if="this.pathchange == 'association'">
             <v-data-table
    :headers="headers"
    :items="association"
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
     <td class="text-xs-center"><a v-bind:href="props.item.context"><font size=4>{{ props.item.title }}</font></a></td>
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
             headers:[ {text: '標題',align: 'center',sortable: false,value: 'title'},],
             pagination:{},
             pathchange:'',
            relation:[],
            friend:[],
            national:[],
            develop:[],
            governoment:[],
            source:[],
            commerce:[],
            work:[],
            rest:[],
            life:[],
            enterprise:[],
            association:[],
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
        console.log(this.path)
        api.getArticleByClass(9).then(res=>{
            console.log(res.data.articles)
            for(var i in res.data.articles){
                console.log(res.data.articles[i])
                if(res.data.articles[i].type == '關係網頁連結'){
                    self.relation[self.relation.length] = res.data.articles[i]; 
                }
                else if(res.data.articles[i].type == '友好網頁連結'){
                    self.friend[self.friend.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '國營事業連結'){
                    self.national[self.national.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '工業開發科技園區'){
                    self.develop[self.develop.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '政府機關連結'){
                    self.governoment[self.governoment.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '砂金源頭'){
                    self.source[self.source.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '貿易交易交流'){
                    self.commerce[self.commerce.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '工作/生活百科'){
                    self.work[self.work.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '休閒陶冶'){
                    self.rest[self.rest.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '生活資訊'){
                    self.life[self.life.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '企業經營管理連結'){
                    self.enterprise[self.enterprise.length] = res.data.articles[i];
                }
                else if(res.data.articles[i].type == '關聯公協會'){
                    self.association[self.association.length] = res.data.articles[i];
                }
            }
            self.pathchange = self.path
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
</style>
