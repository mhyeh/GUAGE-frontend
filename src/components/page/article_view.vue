<template>
    <v-container>
    <top class="top"></top>
    <v-layout class="mid" row>
        <v-flex>
            <v-layout column class="hidden-md-and-down">
              <v-btn color="light-blue lighten-5" block ripple v-bind:key=item.genre v-for="item in toolbar()" @click="changeroute(item.url)"><b>{{ item.genre }}</b></v-btn>
            </v-layout>
        </v-flex>
        <v-flex  offset-xs1>
            <br>
            <v-card>
                <center>
                    <v-card-text><b><font size=6>{{article.title}}</font></b></v-card-text>
                </center>
                <v-layout column="">
                    <pdf v-for="i in numPages" :key="i" :src="src" :page="i" style="display: inline-block; width: 100%"></pdf>
                </v-layout>
            </v-card>
        </v-flex>
        <v-flex class="hidden-md-and-down">
          <right></right>
        </v-flex>
    </v-layout>
    <br>
    <bottom></bottom>
  </v-container>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'

export default {
    props:['id'],
     components:{
        pdf,
    },
    data(){
        return{
            article:null,
            src: '',
            numPages: undefined
        }
    },
    methods: {
        toolbar : function (){
            if(this.article.classID==4 )
            {
                return [
                    {genre:"營建工程業",url:"construction"},
                    {genre:"製造業",url:"manufacture"},
                    {genre:"水火電力燃氣業",url:"electricity"}]
            }
            if(this.article.classID==5 || this.article.classID==6)
            {
                return [
                    {genre:"最新公告",url:"lastest"},
                    {genre:"各期E-DM",url:"DM"},
                    {genre:"新品",url:"newGoods"}]
            }
            if(this.article.classID==7)
            {
                return [
                    {genre:"產品操作說明",url:"instruction"},
                    {genre:"FAQ",url:"FAQ"},
                    {genre:"人員安全衛生作業要點",url:"note"},
                    {genre:"理論彙集",url:"theory"},
                    {genre:"實作技術",url:"skill"},
                    {genre:"單位換算器/表",url:"conversion"},
                    {genre:"數據/資料對照表",url:"data"},
                    {genre:"技術連結",url:"t_link"},
                    {genre:"研究中議題",url:"issue"}]
            }
            if(this.article.classID==8)
            {
                return [
                    {genre:"管路/設備儀表照片",url:"equipment"},
                    {genre:"影片",url:"film"},
                    {genre:"文字圖案",url:"picture"}]
            }
            if(this.article.classID==9)
            {
                return [
                    {genre:"關係網頁連結",url:"relation"},
                    {genre:"友好網頁連結",url:"friend"},
                    {genre:"國營事業連結",url:"national"},
                    {genre:"工業開發科技園區",url:"develop"},
                    {genre:"政府機關連結",url:"governoment"},
                    {genre:"砂金源頭",url:"source"},
                    {genre:"貿易交易交流",url:"commerce"},
                    {genre:"工作/生活百科",url:"work"},
                    {genre:"休閒陶冶",url:"rest"},
                    {genre:"生活資訊",url:"life"},
                    {genre:"企業經營管理連結",url:"enterprise"},
                    {genre:"關聯公協會",url:"association"}]
            }
        },
         changeroute (url) {
            this.$router.push('/home/'+ url)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        loadingTask(url) {
            return pdf.createLoadingTask(url);
        }
    },
    beforeMount(){
        let self = this;
        api.getArticle(this.id).then( (res) => {
            self.article = res.data.article;
            console.log(self.article.context)
            self.src = this.loadingTask(self.article.context);
            return self.src;
        }).then(pdf => {
            self.numPages = pdf.numPages;
        }).catch(error=>{
            console.log(error);
        })
    }
}
</script>

<style scoped>
.top {
    position: relative;
    z-index: 100;
}

.mid {
    position: relative;
    z-index: 0;
}
</style>
