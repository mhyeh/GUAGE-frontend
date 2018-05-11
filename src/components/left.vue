<template>
  <v-container>
      <v-layout column="">
          <v-flex xs2>
              <v-btn flat small block height="30px" ripple=""  align="center" v-bind:key=item v-for="item in toolbar(path)" @click="changeroute(item.url)">{{ item.genre }}</v-btn>
            </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    props: ['path'],
    data(){
        return {
        }
    },
    methods: {
        toolbar: function (path) {
            if (path == 'about' || path=='introduction' || path=='history' || path=='envirnoment' || path=='records' || path=='license' || path=='report' || path=='product_report') {
                return [
                   {genre:"公司介紹",url:"introduction"},
                   {genre:"公司沿革",url:"history"},
                   {genre:"公司環境",url:"envirnoment"},
                   {genre:"工程實績",url:"records"},
                   {genre:"營利/營業證照",url:"license"},
                   {genre:"產品校正報告",url:"product_report"},
                   {genre:"認證報告",url:"report"},
                   {genre:"關係網頁連結",url:"relation"}]
            }
            if(path=='catalog' || path=='download' || path=='on_sale' || path=='new')
            {
                return[
                    {genre:"型錄下載",url:"download"},
                    {genre:"特價品",url:"on_sale"},
                    {genre:"新品",url:"new"}]
            }
            if(path=='derivative' || path=='product' || path=='brands')
            {
                return [
                    {genre:"衍生產品",url:"product"},
                    {genre:"品牌衍生",url:"brands"}]
            }
            if(path=='industry' || path=='construction' || path=='manufacture' || path=='electricity' )
            {
                return [
                    {genre:"營建工程業",url:"construction"},
                    {genre:"製造業",url:"manufacture"},
                    {genre:"水火電力燃氣業",url:"electricity"}]
            }
            if(path=='news' || path== 'lastest' || path=='DM')
            {
                return [
                    {genre:"最新公告",url:"lastest"},
                    {genre:"各期E-DM",url:"DM"},
                    {genre:"特價品",url:"on_sale"},
                    {genre:"新品",url:"new"}]
            }
            if(path=='technology' || path == 'instruction'|| path=='maintain' || path=='FAQ' || path=='note' || path== 'theory' || path=='skill' || path=='conversion' || path=='data'  || path== 't_link' || path=='issue')
            {
                return [
                    {genre:"產品操作說明",url:"instruction"},
                    {genre:"產品維護手冊",url:"maintain"},
                    {genre:"FAQ",url:"FAQ"},
                    {genre:"人員安全衛生作業要點",url:"note"},
                    {genre:"理論彙集",url:"theory"},
                    {genre:"實作技術",url:"skill"},
                    {genre:"單位換算器/表",url:"conversion"},
                    {genre:"數據/資料對照表",url:"data"},
                    {genre:"技術連結",url:"t_link"},
                    {genre:"研究中議題",url:"issue"}]
            }
            if(path=='scene'||path=='equipment' || path=='film' || path=='picture')
            {
                return [
                    {genre:"管路/設備儀表照片",url:"eqipment"},
                    {genre:"影片",url:"film"},
                    {genre:"文字圖案",url:"picture"}]
            }
            if(path=='link' || path=='relation' || path=='friend' || path=='national' || path=='develop' || path=='governoment' || path=='source'||path=='commerce'||path=='work'||path=='rest'||path=='life'||path=='enterprise' || path=='association')
            {
                return [
                    {genre:"關係網頁連結",url:"relation"},
                    {genre:"友好網頁連結",url:"friend"},
                    {genre:"國營事業連結",url:"national"},
                    {genre:"工業開發科技園區",url:"develop"},
                    {genre:"政府機關連結",url:"governomemt"},
                    {genre:"砂金源頭",url:"source"},
                    {genre:"貿易交易交流",url:"commerce"},
                    {genre:"工作/生活百科",url:"work"},
                    {genre:"休閒陶冶",url:"rest"},
                    {genre:"生活資訊",url:"life"},
                    {genre:"企業經營管理連結",url:"enterprise"},
                    {genre:"關聯公協會",url:"association"}]
            }
            if(path=='contact' || path=='message' || path=='information')
            {
                return [
                    {genre:"我要留言",url:"message"},
                    {genre:"聯絡資訊",url:"information"}
                ]
            }
        },
        changeroute (url) {
            this.$router.push('/home/'+ url)
        }
    }
}
</script>

<style>

</style>
