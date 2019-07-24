<template>
  <v-container>
      <v-layout align-content-center="" column="" justify-center="">
         <v-layout row>
            <v-flex xs3 sm3 md3 lg2>
              <v-img  @click="changeroute" contain src="http://210.61.46.101:8787/uploadedFile/logo.jpg" class="logo"></v-img>
            </v-flex>
            <v-layout justify-end align-center>
                <font size="4"><p class="pointer"><b class="hidden-lg-and-up" @click="changeroute2('login')" v-if="loginFlag==false">登入/</b><b v-else-if="loginFlag==true" class="hidden-lg-and-up" @click="changeroute2('member')">會員專區/</b><b @click="changeroute2('site_map')">Site Map</b><b class="hidden-sm-and-down" @click="changeroute2('relation')">/關係網頁連結</b></p></font>
            </v-layout>
         </v-layout>
        <v-layout justify-center>
          <v-img class="ad" contain @click="changeroute" src="http://210.61.46.101:8787/uploadedFile/ad.jpg"></v-img>
        </v-layout>
          <v-flex class="hidden-md-and-down">
          <v-card flat>
          
        
         
              <v-layout row justify-center>
                  <div v-bind:key=item.genre v-for="item in toolbar">
                    <v-menu dark open-on-hover transition="scale-transition" attach  offset-y >
                      <v-btn class="btntop" color="grey lighten-3"  @click="changeroute2(item.url)" slot="activator"><b>{{ item.genre }}</b></v-btn>
                      <div v-if="item.sub_genre !== undefined">
                        <v-list>
                          <v-list-tile v-bind:key=sub.genre v-for="sub in item.sub_genre">
                            <v-btn   block  ripple dark @click="changeroute2(sub.url)">
                              <v-list-tile-title><font size="4">{{sub.genre}}</font></v-list-tile-title>
                            </v-btn>
                          </v-list-tile>
                        </v-list>
                      </div>
                    </v-menu>
                  </div>
              </v-layout>
     
      
          
          </v-card>
          </v-flex>
          <v-flex class="hidden-lg-and-up">
            <v-layout row>
              <v-icon large @click.stop="drawer = !drawer">list</v-icon>
              <v-navigation-drawer v-model="drawer" fixed="" dark>
                <v-flex v-bind:key=item.genre v-for="item in leftToolbar">
                  <v-expansion-panel v-model="item.panel">
                      <v-expansion-panel-content>
                        <div slot="header">{{item.genre}}</div>
                      <v-list v-if="item.sub_genre !== undefined">
                        <v-list-tile v-bind:key=sub.genre v-for="sub in item.sub_genre">
                          <v-btn  block  ripple flat @click="changeroute2(sub.url)">
                            <v-list-tile-title>{{sub.genre}}</v-list-tile-title>
                          </v-btn>
                        </v-list-tile>
                      </v-list>
                      </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-navigation-drawer>
              <v-text-field class="input-group--focused" v-model="productName" label="產品搜尋"></v-text-field><v-icon @click="search()" large>search</v-icon>
              <v-icon @click="changeroute2('shopping')" large>shopping_cart</v-icon>
            </v-layout>
          </v-flex>
      </v-layout>
  </v-container>
</template>


<script>
import api from '../store/api'
export default {
  props:['path'],
  data () {
    return {
      loginFlag:false,
      productName:'',
      drawer:null,
      toolbar: [
        {
          genre:"關於亞帝",
          url: "introduction",
          sub_genre:[
            {genre: "公司介紹",url: "introduction"},
            {genre: "公司沿革",url: "history"},
            { genre:"公司環境",url:"envirnoment"},
            {genre: "工程實績",url: "records"},
            {genre:"營利/營業證照",url: "license"},
            {genre: "認證報告",url: "report"},
            {genre: "產品校正報告",url: "product_report"},
            {genre:"關係網頁連結",url: "relation"}
            ]
        },
        {
          genre : "產品目錄",
          url:"newGoods",
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
            {genre:"荷重傳感器及變送器",url:"load_transmitter"}
            ]
        },
        {
          genre: "應用產業",
          url:"construction",
          sub_genre:[{
              genre:"營建工程業",
              url:"construction"
            },
            {genre:"製造業",url:"manufacture"},
            {genre:"水火電力燃氣業",url:"electricity"}
          ]
        },
        {
          genre:"最新消息",
          url:"lastest",
          sub_genre:[
              {genre:"最新公告",url:"lastest"},
              {genre:"各期E-DM",url:"DM"},
              {genre:"新品",url:"newGoods"}
            ]
        },
        {
          genre:"技術園地",
          url:"instruction",
          sub_genre:[
            {genre:"產品操作說明",url:"instruction"},
            {genre:"FAQ",url:"FAQ"},
            {genre:"人員安全衛生作業要點",url:"note"},
            {genre:"理論彙集",url:"theory"},
            {genre:"實作技術",url:"skill"},
            {genre:"單位換算器/表",url:"conversion"},
            {genre:"數據/資料對照表",url:"data"},
            {genre:"技術連結",url:"t_link"},
            {genre:"研究中議題",url:"issue"},
          ]
        },
        {
          genre:"應用現場",
          url:"equipment",
          sub_genre:[
            {genre:"管路/設備儀表照片",url:"equipment"},
            {genre:"影片",url:"film"},
            {genre:"文字圖案",url:"picture"}
          ]
        },
        {
          genre:"相關連結",
          url:"relation",
          sub_genre:[
            {genre:"關係網頁連結",url:"relation"},
            {genre:"友好網頁連結",url:"friend"},
            {genre:"國營事業連結",url:"national"},
            {genre:"工業開發科技園區",url:"develop"},
            {genre:"政府機關連結",url:"governoment"},
            {genre:"砂金源頭",url:"source"},
            {genre:"貿易交通交流",url:"commerce"},
            {genre:"工作/生活百科",url:"work"},
            {genre:"休閒陶冶",url:"rest"},
            {genre:"生活資訊",url:"life"},
            {genre:"企業經營管理連結",url:"enterprise"},
            {genre:"關聯公協會",url:"association"}
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
          sub_genre:[
            {genre:"我要留言",url:"message"},
            {genre:"聯絡資訊",url:"information"}
          ]
        }
      ],
      leftToolbar:[
        {
          genre:"關於亞帝",
          url: "introduction",
          panel:false,
          sub_genre:[
            {genre: "公司介紹",url: "introduction"},
            {genre: "公司沿革",url: "history"},
            { genre:"公司環境",url:"envirnoment"},
            {genre: "工程實績",url: "records"},
            {genre:"營利/營業證照",url: "license"},
            {genre: "認證報告",url: "report"},
            {genre: "產品校正報告",url: "product_report"},
            {genre:"關係網頁連結",url: "relation"}
            ]
        },
        {
          genre : "產品目錄",
          url:"newGoods",
          panel:false,
          sub_genre:[{genre:"新品",url:"newGoods"},
                    {genre:"指針式壓力錶",url:"pointer_pressure"},
                    {genre:"類比輸出壓力開關",url:"pressure_switch"},
                    {genre:"壓力傳感(送)器",url:"pressure_transmitter"},
                     {genre:"機械式壓力開關",url:"mechanical_switch"},
                    {genre:"智能型變送器",url:"transmitter"},
                    {genre:"數位式壓力錶",url:"digit_pressure"},
                    {genre:"指針式溫度表",url:"pointer_thermometer"},
                    {genre:"機械式溫度開關",url:"temperature_switch"},
                    {genre:"溫度傳感(送)器",url:"temperature_transmitter"},
                    {genre:"數位溫度表",url:"digit_thermometer"},
                    {genre:"TC熱電偶",url:"TC_dipole"},
                    {genre:"RTD熱電阻",url:"RTD_resistance"},
                    {genre:"玻璃管溫度計",url:"glass_thermometer"},
                    {genre:"隔膜",url:"septum"},
                    {genre:"校驗儀器",url:"vertify"},
                    {genre:"配件",url: "accessory"},
                    {genre:"型錄總覽下載",url:"download"}
                    ]
        },
        {
          genre: "衍生產品",
          url:"FRL",
          panel:false,
          sub_genre:[
            {genre:"F.R.L 1~3點組合",url:"FRL"},
            {genre:"閥類",url:"valve"},
            {genre:"液位",url:"liquid"},
            {genre:"流量",url:"flow"},
            {genre:"調整器",url:"adjuster"},
            {genre:"荷重傳感器及變送器",url:"load_transmitter"}
            ]
        },
        {
          genre: "應用產業",
          url:"construction",
          panel:false,
          sub_genre:[{
              genre:"營建工程業",
              url:"construction"
            },
            {genre:"製造業",url:"manufacture"},
            {genre:"水火電力燃氣業",url:"electricity"}
          ]
        },
        {
          genre:"最新消息",
          url:"lastest",
          panel:false,
          sub_genre:[
              {genre:"最新公告",url:"lastest"},
              {genre:"各期E-DM",url:"DM"},
              {genre:"新品",url:"newGoods"}
            ]
        },
        {
          genre:"技術園地",
          url:"instruction",
          panel:false,
          sub_genre:[
            {genre:"產品操作說明",url:"instruction"},
            {genre:"FAQ",url:"FAQ"},
            {genre:"人員安全衛生作業要點",url:"note"},
            {genre:"理論彙集",url:"theory"},
            {genre:"實作技術",url:"skill"},
            {genre:"單位換算器/表",url:"conversion"},
            {genre:"數據/資料對照表",url:"data"},
            {genre:"技術連結",url:"t_link"},
            {genre:"研究中議題",url:"issue"},
          ]
        },
        {
          genre:"應用現場",
          url:"equipment",
          panel:false,
          sub_genre:[
            {genre:"管路/設備儀表照片",url:"equipment"},
            {genre:"影片",url:"film"},
            {genre:"文字圖案",url:"picture"}
          ]
        },
        {
          genre:"相關連結",
          url:"relation",
          panel:false,
          sub_genre:[
            {genre:"關係網頁連結",url:"relation"},
            {genre:"友好網頁連結",url:"friend"},
            {genre:"國營事業連結",url:"national"},
            {genre:"工業開發科技園區",url:"develop"},
            {genre:"政府機關連結",url:"governoment"},
            {genre:"砂金源頭",url:"source"},
            {genre:"貿易交通交流",url:"commerce"},
            {genre:"工作/生活百科",url:"work"},
            {genre:"休閒陶冶",url:"rest"},
            {genre:"生活資訊",url:"life"},
            {genre:"企業經營管理連結",url:"enterprise"},
            {genre:"關聯公協會",url:"association"}
          ]
        },
        {
          genre:"衍生品牌",
          url:"brands",
          panel:false,
        },
        {
          genre:"聯絡我們",
          url:"information",
          panel:false,
          sub_genre:[
            {genre:"我要留言",url:"message"},
            {genre:"人才自薦",url:"recommend"},
            {genre:"聯絡資訊",url:"information"}
          ]
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
    },
    search() {
      let self = this
       self.$router.push('/search/'+ self.productName)
    }
  },
  beforeMount() {
    let self = this
    let token = localStorage.getItem('token')
    api.getAccount(token).then(res=>{
        self.loginFlag=true;
      }).catch(error=>{
        self.loginFlag=false;
      })
  }
}
</script>

<style>

.btntop{ 
  position: relative;
  width: 100%;
  z-index: 10;
}

.ad{
  cursor: pointer;
}

.logo{
  cursor: pointer;
}

.pointer {cursor: pointer;}

</style>
