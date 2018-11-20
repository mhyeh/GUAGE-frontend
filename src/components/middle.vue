<template>
    <v-container>
        <center>
        <v-card-text align="center" v-bind:key=item.title v-for="item in bar" v-if="item.path===path"><b><font size="6">{{item.title}}</font></b></v-card-text>
        </center>
        <v-card align="center" v-if="path=='recommend'" >
            <recommend></recommend>
        </v-card>
        <v-card align="center" v-else-if="path=='message'">
            <message></message>
        </v-card>
        <v-card align="center" v-else-if="path=='site_map'">
            <sitemap></sitemap>
        </v-card>
        <v-card align="center" v-else-if="path=='shopping'">
            <ask></ask>
        </v-card>
        <v-card v-else-if="path=='introduction' || path=='history' || path=='envirnoment' || path=='records' || path=='license' || path=='product_report' || path=='report'">
            <about :path="path"></about>
        </v-card>
        <v-card v-else-if="path=='register'">
            <register :path="path"></register>
        </v-card>
        <v-card v-else-if="path=='construction' || path=='manufacture' || path=='electricity'">
            <industry :path="path"></industry>
        </v-card>
        <v-card v-else-if="path=='lastest' || path=='DM'">
            <news :path="path"></news>
        </v-card>
        <v-card v-else-if="path=='product_view'">
            <productview></productview>
        </v-card>
        <v-card v-else-if="path=='article_view'">
            <articleview></articleview>
        </v-card>
        <v-card v-else-if="path=='instruction' || path=='FAQ' || path=='note' || path=='theory' || path=='skill' || path=='conversion' || path=='data' || path=='t_link' || path=='issue'">
            <technology :path="path"></technology>
        </v-card>
        <v-card v-else-if="path=='equipment' || path=='film' || path=='picture'">
            <scene :path="path"></scene>
        </v-card>
        <v-card v-else-if="path=='relation' || path=='friend' || path=='national' || path=='develop'|| path=='governoment'||path=='source'||path=='commerce'||path=='work'||path=='rest'||path=='life'||path=='enterprise'||path=='association'">
            <relation :path="path"></relation>
        </v-card>
        <v-card v-else-if="path=='brands'">
            <brand></brand>
        </v-card>
        <v-card v-else-if="path=='information'">
            <information :path="path"></information>
        </v-card>
        <v-card v-else-if="path=='member' || path=='order' || path=='memberAsk' || path=='update'">
            <member :path="path"></member>
        </v-card>
        <v-card v-else-if="path=='pointer_pressure'||path=='pressure_switch'||path=='pressure_transmitter'||path=='transmitter'||path=='digit_pressure'||path=='pointer_thermometer'||path=='temperature_switch'||path=='digit_thermometer'||path=='TC_dipole'||path=='RTD_resistance'||path=='glass_thermometer'||path=='septum'||path=='vertify'||path=='accessory'||path=='FRL'||path=='valve'||path=='liquid'||path=='flow'||path=='adjuster'||path=='load_transmitter'||path=='newGoods' || path=='download'">
            <product :path="path"></product>
        </v-card>
    </v-container>
</template>

<script>
import api from '../store/api'
import pdf from 'vue-pdf'
export default {
    props:['path'],
    data(){
        return {
            bar:[
                {title:"公司介紹",path:"introduction"},
                {title:"公司沿革",path:"history"},
                {title:"公司環境",path:"envirnoment"},
                {title:"工程實績",path:"records"},
                {title:"營利/營業證照",path:"license"},
                {title:"產品校正報告",path:"product_report"},
                {title:"認證報告",path:"report"},
                {title:"型錄下載",path:"download"},
                {title:"新品",path:"newGoods"},
                {title:"指針式壓力錶",path:"pointer_pressure"},
                {title:"類比輸出壓力開關",path:"pressure_switch"},
                {title:"壓力傳感(送)器",path:"pressure_transmitter"},
                {title:"智能型變送器",path:"transmitter"},
                {title:"數位式壓力錶",path:"digit_pressure"},
                {title:"指針式溫度表",path:"pointer_thermometer"},
                {title:"機械式溫度開關",path:"temperature_switch"},
                {title:"數位溫度表",path:"digit_thermometer"},
                {title:"TC熱電偶",path:"TC_dipole"},
                {title:"RTD熱電阻",path:"RTD_resistance"},
                {title:"玻璃管溫度計",path:"glass_thermometer"},
                {title:"隔膜",path:"septum"},
                {title:"校驗儀器",path: "vertify"},
                {title:"配件",path: "accessory"},
                {title:"F.R.L 1~3點組合",path:"FRL"},
                {title:"閥類",path:"valve"},
                {title:"液位",path:"liquid"},
                {title:"流量",path:"flow"},
                {title:"調整器",path:"adjuster"},
                {title:"荷重傳感器及變送器",path:"load_transmitter"},
                {title:"品牌衍生",path:"brands"},
                {title:"營建工程業",path:"construction"},
                {title:"製造業",path:"manufacture"},
                {title:"水火電力燃氣業",path:"electricity"},
                {title:"最新公告",path:"lastest"},
                {title:"各期E-DM",path:"DM"},
                {title:"產品操作說明",path:"instruction"},
                {title:"產品維護手冊",path:"maintain"},
                {title:"FAQ",path:"FAQ"},
                {title:"人員安全衛生作業要點",path:"note"},
                {title:"理論彙集",path:"theory"},
                {title:"實作技術",path:"skill"},
                {title:"單位換算器/表",path:"conversion"},
                {title:"數據/資料對照表",path:"data"},
                {title:"技術連結",path:"t_link"},
                {title:"研究中議題",path:"issue"},
                {title:"管路/設備儀表照片",path:"equipment"},
                {title:"影片",path:"film"},
                {title:"文字圖案",path:"picture"},
                {title:"關係網頁連結",path:"relation"},
                {title:"友好網頁連結",path:"friend"},
                {title:"國營事業連結",path:"national"},
                {title:"工業開發科技園區",path:"develop"},
                {title:"政府機關連結",path:"governoment"},
                {title:"砂金源頭",path:"source"},
                {title:"貿易交易交流",path:"commerce"},
                {title:"工作/生活百科",path:"work"},
                {title:"休閒陶冶",path:"rest"},
                {title:"生活資訊",path:"life"},
                {title:"企業經營管理連結",path:"enterprise"},
                {title:"關聯公協會",path:"association"},
                {title:"人才自薦",path:"recommend"},
                {title:"Q&A",path:"Q&A"},
                {title:"我要留言",path:"message"},
                {title:"聯絡資訊",path:"information"},
                {title:"網站地圖",path:"site_map"},
                {title:"詢價單",path:"shopping"},
                {title:"會員資料",path:"member"},
                {title:"訂單",path:"order"},
                {title:"修改會員資料",path:"update"},
                {title:"詢價單紀錄",path:"memberAsk"},
            ]
        }
    },
    beforeMount(){  
    },
}
</script>
