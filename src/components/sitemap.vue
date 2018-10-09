<template>
    <v-container>
        <v-flex v-bind:key=item.genre v-for="item in toolbar" offset-xs1 >
        <p align="left" @click="changeRoute(item.url)">*{{item.genre}}</p>
        <v-flex v-bind:key=sub.genre v-for="sub in item.sub_genre" offset-xs2>
            <p align="left" @click="changeRoute(sub.url)" >{{sub.genre}}</p>
        </v-flex>
        </v-flex>
    </v-container>
</template>

<script>
export default {
   data () {
    return {
      toolbar: [
        {
          genre:"關於亞帝",
          url: "introduction",
          sub_genre:[
            {
              genre: "公司介紹",
              url: "introduction"
            },
            {
              genre: "公司沿革",
              url: "history"
            },
            {
              genre:"公司環境",
              url:"envirnoment"
            },
            {
              genre: "工程實績",
              url: "records"
            },
            {
              genre:"營利/營業證照",
              url: "license"
            },
            {
              genre: "認證報告",
              url: "report"
            },
            {
              genre: "產品校正報告",
              url: "product_report"
            },
            {
              genre:"關係網頁連結",
              url: "relation"
            }
            ]
        },
        {
          genre : "產品目錄",
          url:"new",
          sub_genre:[{genre:"新品",url:"new"},
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
                    {genre:"型錄下載",url:"download"}]
        },
        {
          genre: "衍生產品",
          url:"FRL",
          sub_genre:[
            {genre:"F.R.L 1~3點組合",url:"FRL"},
            {genre:"閥類",url:"valve"},
            {genre:"液位",url:"liquid"},
            {genre:"流量",url:"flow"},
            {genre:"調整器",url:"adjuster"},
            {genre:"荷重傳感器及變送器",url:"transmitter"}]
        },
        {
          genre: "應用產業",
          url:"construction",
          sub_genre:[
            {
              genre:"營建工程業",
              url:"construction"
            },
            {
              genre:"製造業",
              url:"manufacture"
            },
            {
              genre:"水火電力燃氣業",
              url:"electricity"
            }
          ]
        },
        {
          genre:"最新消息",
          url:"lastest",
          sub_genre:[
            {
              genre:"最新公告",
              url:"lastest"
            },
            {
              genre:"各期E-DM",
              url:"DM"
            },
            {
            genre:"新品",
            url:"new"
            }]
        },
        {
          genre:"技術園地",
          url:"instruction",
          sub_genre:[
            {
              genre:"產品操作說明",
              url:"instruction"
            },
            {
              genre:"FAQ",
              url:"FAQ"
            },
            {
              genre:"人員安全衛生作業要點",
              url:"note"
            },
            {
              genre:"理論彙集",
              url:"theory"
            },
            {
              genre:"實作技術",
              url:"skill"
            },
            {
              genre:"單位換算器/表",
              url:"conversion"
            },
            {
              genre:"數據/資料對照表",
              url:"data"
            },
            {
              genre:"技術連結",
              url:"t_link"
            },
            {
              genre:"研究中議題",
              url:"issue"
            },
          ]
        },
        {
          genre:"應用現場",
          url:"equipment",
          sub_genre:[
            {
              genre:"管路/設備儀表照片",
              url:"equipment"
            },
            {
              genre:"影片",
              url:"film"
            },
            {
              genre:"文字圖案",
              url:"picture"
            }
          ]
        },
        {
          genre:"相關連結",
          url:"relation",
          sub_genre:[
            {
              genre:"關係網頁連結",
              url:"relation"
            },
            {
              genre:"友好網頁連結",
              url:"friend"
            },
            {
              genre:"國營事業連結",
              url:"national"
            },
            {
              genre:"工業開發科技園區",
              url:"develop"
            },
            {
              genre:"政府機關連結",
              url:"governoment"
            },
            {
              genre:"砂金源頭",
              url:"source"
            },
            {
              genre:"貿易交通交流",
              url:"commerce"
            },
            {
              genre:"工作/生活百科",
              url:"work"
            },
            {
              genre:"休閒陶冶",
              url:"rest"
            },
            {
              genre:"生活資訊",
              url:"life"
            },
            {
              genre:"企業經營管理連結",
              url:"enterprise"
            },
            {
              genre:"關聯公協會",
              url:"association"
            }
          ]
        },
        {
          genre:"我要留言",
          url:"message"
        },
        {
          genre:"人才自薦",
          url:"recommend"
        },
        {
          genre:"衍生品牌",
          url:"brands"
        },
        {
          genre:"聯絡我們",
          url:"imformation",
          sub_genre:[{
            genre:"我要留言",
            url:"message"
          },
          {
            genre:"聯絡資訊",
            url:"information"
          }]
        }
      ]
    }
   },
   methods:{
       changeRoute(url)
       {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$router.push('/home/' + url)
       }
   }
}
</script>

<style>

</style>
