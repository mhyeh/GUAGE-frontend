<template>
  <v-container>
      <v-layout column="">
          <v-flex xs2 v-bind:key=item v-for="item in toolbar" >
              <v-card ripple=""  align="center" v-for="sub in item.sub_genre" v-bind:key=sub>{{ sub }}</v-card>
            </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data(int){
        return {
            toolbar:[
            {genre:"關於亞帝",sub_genre:["公司介紹","公司沿革","公司環境","工程實績","營利/營業證照","產品校正報告","認證報告","關係網頁連結"]},
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
    }
}
</script>

<style>

</style>
