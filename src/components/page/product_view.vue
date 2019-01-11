<template>
    <v-container>
    <top class="top"></top>
    <v-layout class="mid" row="">
        <v-flex>
            <v-layout column class="hidden-md-and-down">
                <v-btn  class="left" color="light-blue lighten-5" block  ripple=""  align="center" v-bind:key=item.genre v-for="item in toolbar" @click="changeroute(item.url)"><b>{{ item.genre }}</b></v-btn>
            </v-layout>
        </v-flex>
        <v-flex>
            <br>
            <v-card>
                <center>
                <v-card-text><b><font size=6>{{product.name}}</font></b></v-card-text>
                </center>
                <v-layout row wrap>
                    <v-flex offset-xs1>
                        <v-card flat>
                            <v-img contain  width="200px" max-height="200px" :src="product.picture"></v-img>
                        </v-card>
                    </v-flex>
                    <v-flex>
                    <v-layout column>
                        <b><font size=3>需求數量:</font></b>
                         <v-text-field background-color="white" label="" v-model="amount" color="black" persistent-hint></v-text-field>
                        <v-flex v-bind:key="n" v-for="n in product['spec'].length">
                            <b><font size=3>{{product['spec'][n-1]}}</font></b>
                        <v-select attach :items="product['specOption'][n-1]" label="" offset-y light v-model="specSelect[n-1]"></v-select>
                        <v-text-field v-if="specSelect[n-1]=='其他(自填)'" background-color="white" label="" color="black" persistent-hint v-model="otherSelect[n-1]"></v-text-field>
                        </v-flex>
                        <b><font size=3>備註:</font></b><v-text-field  background-color="white" label="" color="black" persistent-hint v-model="product.message"></v-text-field>
                        <v-btn @click="ask()">加入詢價單</v-btn>
                        <center>
                        <a :href=product.download target="_blank" :download=product.name><v-btn>型錄下載</v-btn></a>
                        </center>
                    </v-layout>
                    </v-flex>
                </v-layout>
                <br>
               <v-layout column="">
                    <pdf v-for="i in numPages" :key="i" :src="src" :page="i" style="width: 100%"></pdf>
                </v-layout>
            </v-card>
        </v-flex>
        <v-flex>
          <right class="hidden-md-and-down"></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'


export default {
    props:['id'],
    components:{
        pdf,
    },
    data(){
        return{
            product:{
                id:'',
                name:'',
                type:'',
                date:'',
                spec:[],
                specOption:[],
                visible:'',
                picture: '',
                introduction:null,
                download:null
            },
            src: null,
            message: null,
            numPages: 1,
            amount:'',
            specSelect:[],
            otherSelect:[],
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
                    {genre:"型錄總覽下載",url:"download"}],
        }
    },
    methods: {
         changeroute (url) {
            this.$router.push('/home/'+ url)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
         },
         ask(){
             let obj={
                 id:'',
                 number:'',
                 name:'',
                 spec:[],
                 specOption:[],
                 picture: null,
                 amount:'',
                 message: null,
             }
             obj.id=this.product.id
             obj.name=this.product.name
             obj.picture=this.product.picture
             obj.amount = this.amount
             obj.message = this.product.message
             for(var n=0;n<this.product['spec'].length;n++){
                 if(this.specSelect[n]=='其他(自填)'){
                     obj.spec[obj.spec.length] =  this.product['spec'][n]
                     obj.specOption[obj.specOption.length] = this.otherSelect[n]
                 }
                 else if(this.specSelect[n]!==''){
                     obj.spec[obj.spec.length] =  this.specSelect[n]
                     obj.specOption[obj.specOption.length] = this.specSelect[n]
                 }
             }
             let objList = [];
             if(localStorage.getItem('ask')!=null){
                  objList = JSON.parse(localStorage.getItem('ask'))
             }
             obj.number = objList.length;
             objList[objList.length] = obj;
             localStorage.setItem('ask',JSON.stringify(objList))
             this.$router.push('/home/shopping')
         },
         loadingTask(url) {
            return pdf.createLoadingTask(url);
        }
    },
    beforeMount(){
        let self = this;
        api.getProduct(this.id).then((res) => {
            //console.log(res.data.product)
            self.product = res.data.product
            var d = self.product.spec;
            d = d.split(',')
            if(d[0]==""){
                self.product['spec'] = []
            }
            else{
                self.product['spec'] = d;
            }
            var D = self.product.specOption;
            D = D.split(',')
            if(D[0]==""){
                self.product['specOption'] = []
            }
            else{
                for(var i in D){
                    var t = D[i].split(' ')
                    D[i] = t
                    D[i][D[i].length] = '其他(自填)'
                }  
                self.product['specOption'] = D
            }
            self.src = this.loadingTask(self.product.introduction);
            console.log(self.product)
            return self.src;
        }).then(pdf => {
            self.numPages = pdf.numPages;
        }).catch(error=>{
            console.log(error);
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
