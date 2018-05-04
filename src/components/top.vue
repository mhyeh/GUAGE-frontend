<template>
  <v-container >
      <v-layout align-content-center="" column="">
         <v-layout  row="">
            <v-flex xs4>
              <v-card-media height="60px" @click="changeroute">logo</v-card-media>
            </v-flex>
            <v-flex xs8 offset-xs6>
                <p>繁體中文/簡體中文/English/Site Map/關係網頁連結</p>
            </v-flex>
         </v-layout>
        
        <v-flex>
          <v-card-media height="200px" @click="changeroute">picture</v-card-media>
        </v-flex>
        <v-layout row wrap="">
            <v-flex xs1 v-bind:key=item v-for="item in toolbar" >
              <v-menu open-on-hover=""  transition="scale-transition" attach=""  offset-y="" >
                <v-card-actions @click="changeroute2" align="center" color="primary" ripple="" width="90px"  slot="activator" >{{ item.genre }}</v-card-actions>
                <v-list>
                <v-list-tile  v-bind:key=sub v-for="sub in item.sub_genre">
                  <v-btn block ripple flat=""><v-list-tile-title @click="changeroute2">{{sub}}</v-list-tile-title></v-btn>
                </v-list-tile>
              </v-list>
              </v-menu>
            </v-flex>
        </v-layout>
      </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      toolbar: [
        {genre:"關於亞帝",sub_genre:["公司介紹","公司沿革","公司環境","工程實績","營利/營業證明","產品校正報告","認證報告","關係網頁連結"]},
        {genre:"產品目錄",sub_genre:["型錄下載","特價品","新品"]},
        {genre:"衍生資訊",sub_genre:["衍生產品","品牌衍生"]},
        {genre:"應用產業",sub_genre:["營建工程業","製造業","水火電力燃氣業"]},
        {genre:"最新消息",sub_genre:["最新公告","各期E-DM","特價品","新品"]},
        {genre:"技術園地",sub_genre:["產品操作說明","產品維護手冊","FAQ","人員安全衛生作業注意要點","理論彙集","實作技術","單位換算器","數據/資料對照表","技術連結","研究中議題"]},
        {genre:"產品應用現場",sub_genre:["管路/設備儀表照片","影片","文字檔案"]},
        {genre:"相關連結",sub_genre:["關係網頁連結","友好網頁連結","國營事業連結","工業開發科技園區","政府機關連結","砂金源頭","貿易交通交流","工作/生活百科","休閒陶冶","生活資訊","企業經營管理連結","關聯公協會"]},
        {genre:"人才自薦"},
        {genre:"Q&A"},
        {genre:"我要留言"},
        {genre:"聯絡我們",sub_genre:["我要留言","聯絡資訊"]}
      ]
    }
  },
  methods: {
    changeroute () {
      this.$router.push('/')
    },
    changeroute2(){
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
