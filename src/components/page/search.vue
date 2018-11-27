<template>
    <v-container>
    <top class="top"></top>
    <v-layout class="mid" row="">
        <v-flex xs2>
        <v-layout column="">
              <v-btn  class="left" color="light-blue lighten-5" block  ripple=""  align="center" v-bind:key=item.genre v-for="item in toolbar" @click="changeroute(item.url)"><b>{{ item.genre }}</b></v-btn>
      </v-layout>
        </v-flex>
        <v-flex offset-xs1 xs8>
             <v-card-text align="center"><b><font size="6">搜尋結果:{{name}}</font></b></v-card-text>
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<products.length">
                                <v-img contain max-height="100px" @click="changeRouteProduct(products[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:src=products[(page-1)*50+(n-1)*5+(j-1)].picture></v-img>
                                <v-card-text>{{products[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
        </v-flex>
        <v-flex xs2>
          <right></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'


export default {
    props:['name'],
    components:{
        pdf,
    },
    data(){
        return{
            page:1,
            pages:1,
            products:[],
            toolbar:[{genre:"新品",url:"newGoods"},
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
                    {genre:"型錄下載",url:"download"}],
        }
    },
    watch:{
        'name' (newName, oldName) {
             this.page = 1;
             let self = this
             api.search(newName).then(res=>{
            self.products = res.data.products.reverse()
            self.pages = self.products.length / 50
            for(var i=0;i<self.pages+1;i++){
                if(self.pages>i && self.pages<=i+1){
                    self.pages = i+1
                    break
                }
            }
        }).catch(error=>{
            alert('查無此商品')
            this.$router.push('/')
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }) 
         }
    },
    methods: {
         changeroute (url) {
            this.$router.push('/home/'+ url)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
         },
         changeRouteProduct(id){
           this.$router.push('/product_view/'+ id)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        changePage(number){
            page = number
        }
    },
    beforeMount(){
        let self = this;
        api.search(this.name).then(res=>{
            self.products = res.data.products.reverse()
            self.pages = self.products.length / 50
            for(var i=0;i<self.pages+1;i++){
                if(self.pages>i && self.pages<=i+1){
                    self.pages = i+1
                    break
                }
            }
        }).catch(error=>{
            alert('查無此商品')
            this.$router.push('/')
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })
    }
}
</script>

<style>
.top {
    position: relative;
    z-index: 100;
}

.mid {
    position: relative;
    z-index: 0;
}
</style>
