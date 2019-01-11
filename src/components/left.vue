<template>
  <v-container>
      <v-layout column="">
              <v-btn class="left" color="light-blue lighten-5" block ripple=""  align="center" v-bind:key=item.genre v-for="item in toolbar(path)" @click="changeroute(item.url)"><b>{{ item.genre }}</b></v-btn>
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
            if(path=='catalog' || path=='download'  || path=='newGoods' || path=='pointer_pressure' || path=='pressure_switch' || path=='pressure_transmitter' || path=='transmitter' || path=='digit_pressure' ||  path=='pointer_thermometer' ||  path=='temperature_switch' || path=='digit_thermometer' || path=='TC_dipole' || path=='RTD_resistance' || path=='glass_thermometer' || path=='septum' || path=='vertify' || path=='accessory' || path=='search')
            {
                return[
                    {genre:"新品",url:"newGoods"},
                    {genre:"指針式壓力錶",url:"pointer_pressure"},
                    {genre:"類比輸出壓力開關",url:"pressure_switch"},
                    {genre:"壓力傳感(送)器",url:"pressure_transmitter"},
                    {genre:"智能型變送器",url:"transmitter"},
                    {genre:"數位式壓力錶",url:"digit_pressure"},
                    {genre:"指針式溫度表",url:"pointer_thermometer"},
                    {genre:"機械式溫度開關",url:"temperature_switch"},
                    {genre:"數位溫度表",url:"digit_thermometer"},
                    {genre:"TC熱電偶",url:"TC_dipole"},
                    {genre:"RTD熱電阻",url:"RTD_resistance"},
                    {genre:"玻璃管溫度計",url:"glass_thermometer"},
                    {genre:"隔膜",url:"septum"},
                    {genre:"校驗儀器",url:"vertify"},
                    {genre:"配件",url: "accessory"},
                    {genre:"型錄總覽下載",url:"download"}]
            }
            if(path=='FRL'||path=='valve'||path=='liquid'||path=='flow'||path=='adjuster'||path=='load_transmitter')
            {
                return [
                    {genre:"F.R.L 1~3點組合",url:"FRL"},
                    {genre:"閥類",url:"valve"},
                    {genre:"液位",url:"liquid"},
                    {genre:"流量",url:"flow"},
                    {genre:"調整器",url:"adjuster"},
                    {genre:"荷重傳感器及變送器",url:"load_transmitter"}]
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
                    {genre:"新品",url:"newGoods"}]
            }
            if(path=='technology' || path == 'instruction'|| path=='maintain' || path=='FAQ' || path=='note' || path== 'theory' || path=='skill' || path=='conversion' || path=='data'  || path== 't_link' || path=='issue')
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
            if(path=='scene'|| path=='equipment' || path=='film' || path=='picture')
            {
                return [
                    {genre:"管路/設備儀表照片",url:"equipment"},
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
                    {genre:"政府機關連結",url:"governoment"},
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
            if(path=='member' || path=='update' || path=='order' || path=='memberAsk'){
                return [
                    {genre:"會員資料",url:"member"},
                    {genre:"修改會員資料",url:"update"},
                    {genre:"詢價單紀錄",url:"memberAsk"},
                    {genre:"訂單",url:"order"},
                ]
            }
        },
        changeroute (url) {
            this.$router.push('/home/'+ url)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            //window.location.reload()
        }
    },
    beforeMount(){
    }
}
</script>

<style>
.left{
    z-index:0;
    min-height: 20px;
    max-width:150px;
}
</style>
