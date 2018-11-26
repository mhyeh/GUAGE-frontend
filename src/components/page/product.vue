<template>
    <v-container>
        <v-card v-if="path=='pointer_pressure'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<pointer_pressure.length">
                                <v-card-media height=100 width=50 @click="changeRoute(pointer_pressure[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=pointer_pressure[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{pointer_pressure[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='pressure_switch'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<pressure_switch.length">
                                <v-card-media height=100 width=50 @click="changeRoute(pressure_switch[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=pressure_switch[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{pressure_switch[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='pressure_transmitter'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<pressure_transmitter.length">
                                <v-card-media height=100 width=50 @click="changeRoute(pressure_transmitter[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=pressure_transmitter[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{pressure_transmitter[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='transmitter'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<transmitter.length">
                                <v-card-media height=100 width=50 @click="changeRoute(transmitter[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=transmitter[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{transmitter[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='digit_pressure'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<digit_pressure.length">
                                <v-card-media height=100 width=50 @click="changeRoute(digit_pressure[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=digit_pressure[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{digit_pressure[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='pointer_thermometer'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<pointer_thermometer.length">
                                <v-card-media height=100 width=50 @click="changeRoute(pointer_thermometer[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=pointer_thermometer[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{pointer_thermometer[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='temperature_switch'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<temperature_switch.length">
                                <v-card-media height=100 width=50 @click="changeRoute(temperature_switch[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=temperature_switch[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{temperature_switch[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='digit_thermometer'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<digit_thermometer.length">
                                <v-card-media height=100 width=50 @click="changeRoute(digit_thermometer[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=digit_thermometer[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{digit_thermometer[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='TC_dipole'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<TC_dipole.length">
                                <v-card-media height=100 width=50 @click="changeRoute(TC_dipole[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=TC_dipole[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{TC_dipole[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='RTD_resistance'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<RTD_resistance.length">
                                <v-card-media height=100 width=50 @click="changeRoute(RTD_resistance[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=RTD_resistance[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{RTD_resistance[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='glass_thermometer'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<glass_thermometer.length">
                                <v-card-media height=100 width=50 @click="changeRoute(glass_thermometer[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=glass_thermometer[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{glass_thermometer[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='septum'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<septum.length">
                                <v-card-media height=100 width=50 @click="changeRoute(septum[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=septum[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{septum[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='vertify'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<vertify.length">
                                <v-card-media height=100 width=50 @click="changeRoute(vertify[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=vertify[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{vertify[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='accessory'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<accessory.length">
                                <v-card-media height=100 width=50 @click="changeRoute(accessory[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=accessory[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{accessory[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='FRL'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<FRL.length">
                                <v-card-media height=100 width=50 @click="changeRoute(FRL[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=FRL[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{FRL[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='valve'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<valve.length">
                                <v-card-media height=100 width=50 @click="changeRoute(valve[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=valve[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{valve[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='liquid'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<liquid.length">
                                <v-card-media height=100 width=50 @click="changeRoute(liquid[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=liquid[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{liquid[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='flow'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<flow.length">
                                <v-card-media height=100 width=50 @click="changeRoute(flow[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=flow[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{flow[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='adjuster'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<adjuster.length">
                                <v-card-media height=100 width=50 @click="changeRoute(adjuster[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=adjuster[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{adjuster[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='load_transmitter'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<load_transmitter.length">
                                <v-card-media height=100 width=50 @click="changeRoute(load_transmitter[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:scr=load_transmitter[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{load_transmitter[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else-if="path=='download'">
            <v-data-table color= "white" :headers="headers" :items="download" class="elevation-1" hide-actions light>
                <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <span slot="activator">
                        {{ props.header.text }}
                        </span>
                        <span>
                        {{ props.header.text }}
                        </span>
                    </v-tooltip>
                </template>
                <template slot="items" slot-scope="props">
                <td class="text-xs-center"> {{props.item.title}} </td>
                <td class="text-xs-center"><v-btn small><a :href=props.item.context target="_blank" :download=props.item.title>下載</a></v-btn></td>
                </template>
            </v-data-table>
        </v-card>
        <v-card v-else-if="path=='newGoods'">
            <center>
                <v-flex v-bind:key=n v-for="n in 10">
                    <v-layout row>
                        <v-flex v-bind:key=j v-for="j in 5">
                            <v-layout column v-if="(((page-1)*50)+(n-1)*5+(j-1))<newGoods.length">
                                <v-card-media height=100 width=50 @click="changeRoute(newGoods[(page-1)*50+(n-1)*5+(j-1)].id)" v-bind:src=newGoods[(page-1)*50+(n-1)*5+(j-1)].picture></v-card-media>
                                <v-card-text>{{newGoods[(page-1)*50+(n-1)*5+(j-1)].name}}</v-card-text>
                            </v-layout> 
                        </v-flex>
                    </v-layout>
                </v-flex>
               <v-pagination v-model="page" :length="pages"></v-pagination>
            </center>
            <br>
        </v-card>
        <v-card v-else>
            <center>
            </center>
        </v-card>
    </v-container>
</template>

<script>
import api from '../../store/api'
export default {
    props:['path'],
    data(){
        return {
            page:1,
            pages:1,
            headers:[
                {text:'名稱',value:'title',sortable:false,align:'center'},
                {text:'下載',value:'downlaod',sortable:false,align:'center'},
            ],
            pointer_pressure:[],
            pressure_switch:[],
            pressure_transmitter:[],
            transmitter:[],
            digit_pressure:[],
            pointer_thermometer:[],
            temperature_switch:[],
            digit_thermometer:[],
            TC_dipole:[],
            RTD_resistance:[],
            glass_thermometer:[],
            septum:[],
            vertify:[],
            accessory:[],
            FRL:[],
            valve:[],
            liquid:[],
            flow:[],
            adjuster:[],
            load_transmitter:[],
            download:[],
            newGoods:[],
        }
    },
    watch: {
         'path' (newPath, oldPath) {
             this.page = 1;
             let list = ['pointer_pressure','pressure_switch','pressure_transmitter','transmitter',
            'digit_pressure','pointer_thermometer','temperature_switch','digit_thermometer','TC_dipole','RTD_resistance','glass_thermometer','septum','vertify','accessory','FRL','valve','liquid','flow','adjuster','load_transmitter','download','newGoods']
            for(var i of list){
                if(this.path == i){
                    this.pages = this.$data[i].length / 50
                }
            }
             for(var i=0;i<this.pages+1;i++){
                if(this.pages>i && this.pages<=i+1){
                    this.pages = i+1
                    break
                }
            } 
         }
    },
    methods:{
        changeRoute(id){
            this.$router.push('/product_view/'+ id)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
        changePage(number){
            page = number
        }
    },
    beforeMount(){
        let self = this
        this.page = 1
        console.log(this.path)
        api.getProductByType(1).then(res=>{
            self.pointer_pressure = res.data.products.reverse()
            if(self.path == 'pointer_pressure'){
                self.pages = self.pointer_pressure.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(2).then(res=>{
            self.pressure_switch = res.data.products.reverse()
            if(self.path == 'pressure_switch'){
                self.pages = self.pressure_switch.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(3).then(res=>{
            self.pressure_transmitter = res.data.products.reverse()
             if(self.path == 'pressure_transmitter'){
                self.pages = self.pressure_transmitter.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(4).then(res=>{
            self.transmitter = res.data.products.reverse()
            if(self.path == 'transmitter'){
                self.pages = self.transmitter.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(5).then(res=>{
            self.digit_pressure = res.data.products.reverse()
            if(self.path == 'digit_pressure'){
                self.pages = self.digit_pressure.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(6).then(res=>{
            self.pointer_thermometer = res.data.products.reverse()
            if(self.path == 'pointer_thermometer'){
                self.pages = self.pointer_thermometer.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(7).then(res=>{
            self.temperature_switch = res.data.products.reverse()
            if(self.path == 'temperature_switch'){
                self.pages = self.temperature_switch.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(8).then(res=>{
            self.digit_thermometer = res.data.products.reverse()
            if(self.path == 'digit_thermometer'){
                self.pages = self.digit_thermometer.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(9).then(res=>{
            self.TC_dipole = res.data.products.reverse()
            if(self.path == 'TC_dipole'){
                self.pages = self.TC_dipole.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(10).then(res=>{
            self.RTD_resistance = res.data.products.reverse()
            if(self.path == 'RTD_resistance'){
                self.pages = self.RTD_resistance.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(11).then(res=>{
            self.glass_thermometer = res.data.products.reverse()
            if(self.path == 'glass_thermometer'){
                self.pages = self.glass_thermometer.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })
        
        api.getProductByType(12).then(res=>{
            self.septum = res.data.products.reverse()
            if(self.path == 'septum'){
                self.pages = self.septum.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(13).then(res=>{
            self.vertify = res.data.products.reverse()
            if(self.path == 'vertify'){septum
                self.pages = self.vertify.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(14).then(res=>{
            self.accessory = res.data.products.reverse()
            if(self.path == 'accessory'){
                self.pages = self.accessory.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(15).then(res=>{
            self.FRL = res.data.products.reverse()
            if(self.path == 'FRL'){
                self.pages = self.FRL.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(16).then(res=>{
            self.valve = res.data.products.reverse()
            if(self.path == 'valve'){
                self.pages = self.valve.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(17).then(res=>{
            self.liquid = res.data.products.reverse()
            if(self.path == 'liquid'){
                self.pages = self.liquid.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(18).then(res=>{
            self.flow = res.data.products.reverse()
            if(self.path == 'flow'){
                self.pages = self.flow.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(19).then(res=>{
            self.adjuster = res.data.products.reverse()
            if(self.path == 'adjuster'){
                self.pages = self.adjuster.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        api.getProductByType(20).then(res=>{
            self.load_transmitter = res.data.products.reverse()
            if(self.path == 'load_transmitter'){
                self.pages = self.load_transmitter.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        
        api.getArticleByClass(3).then(res=>{
            self.download  = res.data.articles
        }).catch(error=>{
        })

        api.getLastestProduct(50).then(res=>{
            self.newGoods = res.data.products.reverse()
            if(self.path == 'newGoods'){
                self.pages = self.lastest.length / 50
                for(var i=0;i<self.pages+1;i++){
                    if(self.pages>i && self.pages<=i+1){
                        self.pages = i+1
                        break
                    }
                }
            }
        }).catch(error=>{
        })

        
    }
}
</script>

<style>

</style>
