<template>
  <v-container >
      <v-layout align-content-center="" column="">
         <v-layout  row="">
            <v-flex xs4>
              <v-card-media height="60px" @click="changeroute">logo</v-card-media>
            </v-flex>
            <v-flex xs8 offset-xs6>
                <p><font @click="changeroute">繁體中文</font>/簡體中文/English/Site Map/關係網頁連結</p>
            </v-flex>
         </v-layout>
        
        <v-flex>
          <v-card-media height="200px" @click="changeroute">picture</v-card-media>
        </v-flex>
        <v-layout row>
            <v-flex xs1 v-bind:key=item.genre v-for="item in toolbar" >
              <v-menu open-on-hover=""  transition="scale-transition" attach=""  offset-y="" v-if="item.sub_genre !== undefined">
                <v-btn small block @click="changeroute2(item.url)" align="center" slot="activator" flat><b>{{ item.genre }}</b></v-btn>
                <v-list>
                  <v-list-tile v-bind:key=sub.genre v-for="sub in item.sub_genre">
                    <v-btn block ripple flat @click="changeroute2(sub.url)">
                      <v-list-tile-title >{{sub.genre}}</v-list-tile-title>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-btn small align="center" slot="activator" flat v-else @click="changeroute2(item.url)"><b>{{ item.genre }}</b></v-btn>
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
        {
          genre:"關於亞帝",
          url: "about",
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
          url:"catalog",
          sub_genre:[{
            genre:"型錄下載",
            url:"download"
          },
          {
            genre:"特價品",
            url:"on_sale"
          },
          {
            genre:"新品",
            url:"new"
          },
          {
            genre:"指針式壓力錶",
            url:"pointer_pressure"
          },
          {
            genre:"類比輸出壓力開關",
            url:"pressure_switch"
          },
          {
            genre:"壓力傳感(送)器",
            url:"pressure_transmitter"
          },
          {
            genre:"智能型變送器",
            url:"transmitter"
          },
          {
            genre:"數位式壓力錶",
            url:"digit_pressure"
          },
          {
            genre:"指針式溫度表",
            url:"pointer_thermometer"
          },
          {
            genre:"機械式溫度開關",
            url:"temperature_switch"
          },
          {
            genre:"數位溫度表",
            url:"digit_thermometer"
          },
          {
            genre:"TC熱電偶",
            url:"TC_dipole"
          },
          {
            genre:"RTD熱電阻",
            url:"RTD_resistance"
          },
          {
            genre:"玻璃管溫度計",
            url:"glass_thermometer"
          },
          {
            genre:"隔膜",
            url:"septum"
          },
          {
            genre:"校驗儀器",
            url: "vertify"
          },
          {
            genre:"配件",
            url: "accessory"
          }
          ]
        },
        {
          genre: "衍生類別",
          url:"derivative",
          sub_genre:[{
          genre:"衍生產品",
          url:"product"
          },
          {
            genre:"品牌衍生",
            url:"brands"
          }]
        },
        {
          genre: "應用產業",
          url:"industry",
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
          url:"news",
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
            genre:"特價品",
            url:"on_sale"
            },
            {
            genre:"新品",
            url:"new"
            }]
        },
        {
          genre:"技術園地",
          url:"technology",
          sub_genre:[
            {
              genre:"產品操作說明",
              url:"instruction"
            },
            {
              genre:"產品維護手冊",
              url:"maintain"
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
          genre:"產品應用現場",
          url:"scene",
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
          url:"link",
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
          genre:"Q&A",
          url:"Q&A"
        },
        {
          genre:"聯絡我們",
          url:"contact",
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
  methods: {
    changeroute () {
      this.$router.push('/')
    },
    changeroute2(url){
      this.$router.push('/home/' + url)
    }
  }
}
</script>

<style>

</style>
