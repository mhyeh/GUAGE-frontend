<template>
    <v-container>
    <top class="top"></top>
    <v-layout row>
        <v-flex class="hidden-md-and-down">
        <v-layout column="">
              <v-btn  class="left" color="light-blue lighten-5" block  ripple=""  align="center" v-bind:key=item.genre v-for="item in toolbar" @click="changeroute(item.url)"><b>{{ item.genre }}</b></v-btn>
      </v-layout>
        </v-flex>
        <v-flex class="mid">
            <center>
                <v-card-text align="center"><b><font size="6">搜尋結果:{{name}}</font></b></v-card-text>
            <v-card class="cardMid">
                <br> 
                <v-flex class="productMid">
                <v-card>
            <center>
                <v-layout row wrap>
                    <v-flex v-bind:key=n v-for="n in 50">
                            <v-flex v-if="(((page-1)*50)+n-1)<products.length">
                                <v-card flat max-width="120px" class="cardSize">
                                    <v-layout column>
                                        <v-img class="pointer" contain  width="120px" max-height="120px" @click="changeRouteProduct(products[((page-1)*50)+n-1].id)" v-bind:src=products[((page-1)*50)+n-1].picture></v-img>
                                        <v-card-text>{{products[((page-1)*50)+n-1].name}}</v-card-text>
                                    </v-layout>
                                </v-card>
                            </v-flex>               
                    </v-flex>
                </v-layout>
               <v-pagination dark v-model="page" :length="pages"></v-pagination>
            </center>
                </v-card>
                <br>
                </v-flex>
            </v-card>
            </center>
        </v-flex>
        <v-flex class="hidden-md-and-down">
          <right></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
import api from '../../store/api'


export default {
    props:['name'],
    data(){
        return{
            page:1,
            pages:1,
            products:[],
            toolbar:[{genre:"新品",url:"newGoods"},
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
                    {genre:"型錄總覽下載",url:"download"}],
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
             console.log(id)
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

<style scoped>
.top {
    position: relative;
    z-index: 2;
}

.mid {
    position: relative;
    z-index: 1;
}

.left{
    z-index:0;
    min-height: 20px;
    max-width:150px;
}
.cardSize{
    min-height: 250px;
}
.picSize{
    position:relative;
    vertical-align: middle;
}
.productMid{
    max-width: 700px;
}
.cardMid{
  max-width: 950px;
}
</style>
