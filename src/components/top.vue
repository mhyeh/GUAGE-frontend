<template>
  <v-container>
      <v-layout align-content-center="" column="">
         <v-layout  row="">
            <v-flex xs4>
              <v-card-media height="60px" @click="changeroute">logo</v-card-media>
            </v-flex>
            <v-flex xs8 offset-xs6>
                <p><b @click="changeroute">繁體中文</b>/<b>簡體中文</b>/<b>English</b>/<b @click="changeroute2('site_map')">Site Map</b>/<b  @click="changeroute2('relation')">關係網頁連結</b></p>
            </v-flex>
         </v-layout>
        
        <v-flex>
          <v-card-media height="200px" @click="changeroute">picture</v-card-media>
        </v-flex>
        <center>
          <v-flex xs12>
          <v-card flat>
          <v-toolbar  floating flat>
            <v-toolbar-items flat>
        <v-layout row >
            <v-flex v-bind:key=item.genre v-for="item in toolbar">
              <v-menu class="top" dark open-on-hover transition="scale-transition" attach=""  offset-y="" >
                <v-btn class="btntop" right  color="grey lighten-3"  block @click="changeroute2(item.url)" slot="activator"><b>{{ item.genre }}</b></v-btn>
                <v-list class="top" v-if="item.sub_genre !== undefined">
                  <v-list-tile class="top" v-bind:key=sub.genre v-for="sub in item.sub_genre">
                    <v-btn class="top"  block  ripple flat @click="changeroute2(sub.url)">
                      <v-list-tile-title><font size="4">{{sub.genre}}</font></v-list-tile-title>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-flex>
        </v-layout>
            </v-toolbar-items>
          </v-toolbar>
          </v-card>
          </v-flex>
        </center>
      </v-layout>
  </v-container>
</template>


<script>
import api from '../store/api'
export default {
  props:['path'],
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
          url:"newGoods"
        },
        {
          genre: "衍生產品",
          url:"FRL",
          sub_genre:[{
          genre:"F.R.L 1~3點組合",
          url:"FRL"
          },
          {
            genre:"閥類",
            url:"valve"
          },
          {
            genre:"液位",
            url:"liquid"
          },
          {
            genre:"流量",
            url:"flow"
          },
          {
            genre:"調整器",
            url:"adjuster"
          },
          {
            genre:"荷重傳感器及變送器",
            url:"load_transmitter"
          }]
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
          url:"information",
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
      document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      this.$router.push('/')
    },
    changeroute2(url){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.$router.push('/home/' + url)
    }
  }
}
</script>

<style>

.btntop{ 
  position: relative;
  min-height: 50px;
  z-index: 2;
}

</style>
