<template>
    <v-container>
        <v-card v-if="path=='member'" flat>
            <br>
            <v-flex offset-xs1>
            <font size="4">
            <p>姓名:&nbsp;{{account.name}}</p>
            <p>公司名稱:&nbsp;{{account.company}}</p>
            <p v-if="account.sex==1">性別:&nbsp;男</p>
            <p v-else-if="account.sex==0">性別:&nbsp;女</p>
            <p v-else>性別:</p>
            <p>生日:&nbsp;{{account.birthday}}</p>
            <p>E-mail:&nbsp;{{account.email}}</p>
            <p>電話:&nbsp;{{account.phone}}</p>
            <p>傳真:&nbsp;{{account.fax}}</p>
            <p>line:&nbsp;{{account.line}}</p>
            <p>QQ:&nbsp;{{account.qq}}</p>
            <p>skype:&nbsp;{{account.skype}}</p>
            <br>
            </font>
            </v-flex>
        </v-card>
        <v-card v-else-if="path=='update'" flat>
            <v-flex xs4 offset-xs4>
            <b><font size=4>*姓名</font></b><v-text-field v-model="name" background-color="white"  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*公司</font></b><v-text-field v-model="company" background-color="white"  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex offset-xs4>
                 <p><font size="2">性別:</font></p>
            <v-flex xs3>
            <v-radio-group v-model="sex" row="">
                <v-radio label="男"  value="1"></v-radio>
                <v-radio label="女" value="0"></v-radio>
            </v-radio-group>
            </v-flex>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>*電子郵件</font></b><v-text-field background-color="white" v-model="email" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*密碼</font><font size=2>6~20個字(小寫英文字母或數字)</font></b><v-text-field type='password' counter="20" background-color="white" v-model="password" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4><br>
            <b><font size=4>*密碼再確認</font></b><v-text-field background-color="white" v-model="password2" type='password' label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>出生年月日</font></b><v-text-field  background-color="white" v-model="birthday" counter="10" color="black" persistent-hint></v-text-field>
            <font size=4>(輸入範例:1980/02/29)</font><br><br>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*連絡電話</font></b><v-text-field counter="10" background-color="white" v-model="phone" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                   <v-flex xs4 offset-xs4>
            <b><font size=4>*傳真</font></b><v-text-field background-color="white" label="" v-model="fax" color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>Line</font></b><v-text-field background-color="white" label="" v-model="line" color="black" persistent-hint></v-text-field>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>QQ</font></b><v-text-field background-color="white" label="" v-model="qq" color="black" persistent-hint></v-text-field>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>Skype</font></b><v-text-field background-color="white" label="" v-model="skype" color="black" persistent-hint></v-text-field>
                </v-flex>
                <center>
                <br><v-btn @click="save()">儲存修改</v-btn>
                </center>
                <br>
        </v-card>
        <v-card v-else-if="path=='order'">
            <v-data-table
    :headers="orderHeaders"
    :items="orders"
    :search="search"
    item-key="id"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.prodName }}</td>
      <td class="text-xs-center">{{ props.item.date }}</td>
      <td ><v-btn @click="orderDetail(props.item.id)">詳細</v-btn></td>
    </template>
  </v-data-table>
  <v-card v-if="orderID!=''">
      <font size=4>
        <font size=5>
            <v-flex offset-xs5>
                <b><p>詳細資料</p></b>
            </v-flex>
        </font>
            <v-layout column>
                <v-flex xs2 offset-xs1>
                    <p>商品名稱:{{order.prodName}}</p>
                    <p>商品數量:{{order.number}}</p>
                    <v-flex v-if="order.spec.length !=0">
                        <p>商品規格:</p>
                        <v-flex  v-bind:key=n v-for="n in order.spec.length">
                            <p>{{n}}.&nbsp;{{order.spec[n-1]}}:&nbsp;&nbsp;{{order.specOption[n-1]}}</p>
                        </v-flex>
                    </v-flex>
                </v-flex>
            </v-layout>
            <v-flex>
                <v-flex offset-xs1>
                    <p>流程:</p>
                </v-flex> 
                <v-stepper v-model="order.step">
                    <v-stepper-step color="blue lighten-2" step="1" >配件/材料
                        <small v-if="order.step == 1">完成度:{{order.stepPer}}%</small>
                    </v-stepper-step>
                    <v-stepper-step color="blue lighten-2" step="2" >加工
                        <small v-if="order.step == 2">完成度:{{order.stepPer}}%</small>
                    </v-stepper-step>
                    <v-stepper-step  :rules="[() => false]"  step="3" color = "red">品管
                        <small v-if="order.step == 3">完成度:{{order.stepPer}}%</small>
                    </v-stepper-step>
                    <v-stepper-step color="blue lighten-2" step="4" >包裝
                        <small v-if="order.step == 4">完成度:{{order.stepPer}}%</small>
                    </v-stepper-step>
                    <v-stepper-step color="blue lighten-2" step="5" >已出貨
                        <small v-if="order.step == 5">完成度:{{order.stepPer}}%</small>
                    </v-stepper-step>
                </v-stepper>
            </v-flex>
                               
                
                </font>
  </v-card>
        </v-card>
        <v-card v-else-if="path=='memberAsk'" flat>
            <v-data-table
    :headers="askHeaders"
    :items="asks"
    :search="search"
    item-key="id"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.date }}</td>
        <td ><v-btn @click="askDetail(props.item.id)">詳細</v-btn></td>
    </template>
  </v-data-table>
  <v-card v-if="askID!==''"><br>
  <center><font size="5"><b>詢價詳細</b></font></center><br>
  <v-divider></v-divider>
  <br>
    <v-flex v-bind:key=n v-for="n in askdetail.length">
        <font size="4">
            <v-layout row>
                <v-layout column>
                    <v-flex offset-xs1>
                    <p>{{n}}.&nbsp;商品名稱:{{askdetail[n-1].name}}</p>
                    <p>數量:{{askdetail[n-1].amount}}</p>
                    <p>規格:</p>
                    <p v-bind:key=i v-for="i in askdetail[n-1].spec.length">{{i}}.{{askdetail[n-1].spec[i-1]}}:{{askdetail[n-1].specOption[i-1]}}</p>
                    </v-flex>
                </v-layout>
                <center>
                <p>產品圖片</p>
                <v-img  contain v-bind:src="askdetail[n-1].picture" width="120px" max-height="120px"></v-img>
                <br>
                </center>
            </v-layout>
        </font>
        <v-divider v-if="n!=askdetail.length"></v-divider>
        <br>
    </v-flex>
  </v-card>
        </v-card>
    </v-container>
</template>

<script>
import api from '../../store/api'
export default {
    props:['path'],
    data(){
        return{
            account:null,
            asks:[],
            orders:[],
            order:{
            },
            askdetail:[],
            search:[],
            askHeaders:[
                { text: '日期',align: 'center', value: 'date' ,sortable: false,},
                {text:'詳細',value:'detail',sortable:false}
            ],
            askDetailHeaders:[
                {text: '商品名稱',align: 'center',sortable: false,value: 'name'},
                {text: '商品圖片',align: 'center',sortable: false,value: 'picture'},
                {text: '規格',align: 'center',sortable: false,value: 'detail'},
                {text: '數量',align: 'center',sortable: false,value: 'number'}
            ],
            orderHeaders:[
                {text: '商品名稱',align:'center',value:'prodName',sortable:false},
                { text: '日期',align: 'center', value: 'date' ,sortable: false,},
                {text:'詳細',value:'detail',sortable:false}],
            name:'',
            company:'',
            password:'',
            password2:'',
            sex:'',
            email:'',
            fax:'',
            phone:'',
            skype:'',
            line:'',
            birthday:'',
            qq:'',
            orderID:'',
            askID:'',
        }
    },
    methods:{
        save(){
            if (this.$data.name === '' || this.$data.account === '' || this.$data.company === '' || this.$data.email === '' || this.$data.phone ==='' || this.$data.fax === '') {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    alert('有必填選項未填')
                } else if (this.$data.password!=='' && (this.$data.password.length < 6 || this.$data.password.length > 20)) {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    alert('密碼長度錯誤')
                } else if (this.$data.password!=='' && (this.$data.password !== this.$data.password2)){
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    alert('密碼不相同')
                }  else {
                    let list=['name','company','sex','birthday','phone','email','line','qq','skype','password','fax']
                    let obj ={
                        name:'',
                        company:'',
                        sex:'',
                        birthday:'',
                        phone:'',
                        email:'',
                        line:'',
                        qq:'',
                        skype:'',
                        password:'',
                        fax:''
                    }
                    for(var i of list){
                        obj[i] = this.$data[i]
                    }
                    let token = localStorage.getItem('token')
                    api.accountUpdate(token,this.account.id,obj).then(res=>{
                         document.body.scrollTop = 0
                         document.documentElement.scrollTop = 0
                        alert("更新成功")
                        window.location.reload()
                    }).catch(error=>{
                    })
                }
        },
        orderDetail(id){
            for(var i in this.orders){
                if(id == this.orders[i].id){
                    this.order = this.orders[i]
                    this.orderID = id
                    break;
                }
            }
        },
        askDetail(id){
            for(var i in this.asks){
                if(id == this.asks[i].id){
                    this.askdetail = this.asks[i].detail
                    this.askID = id
                    break;
                }
            }
        }
    },
    beforeMount(){
        let self = this
        let token = localStorage.getItem('token')
        let id;
        let data = []
        if(token==null){
            this.$router.push('/')
            window.location.reload()
        }
        api.getAccount(token).then(res=>{
            self.account = res.data.account
            let list=['name','company','sex','phone','email','birthday','qq','line','skype','fax']
            id = res.data.account.id
            for(var i of list){
                self[i] = self.account[i]
            }
            api.getOrderByAccount(token,id).then(res=>{
                for(var i=0;i<res.data.orders.length;i++){
            let t = {
            account: ""
          }
          t.account = res.data.orders[i].acID + ' ' + res.data.orders[i].acName;
          t.prodName = res.data.orders[i].prodName;
          t.acName = res.data.orders[i].acName
          let s = res.data.orders[i].spec
          let S = res.data.orders[i].specOption      
          s = s.split(',')
          S = S.split(',')
          if(s.length==1 && s[0]==''){
              s = []
          }
          if(S.length==1 && S[0] == ''){
              S = []
          }
          t.spec = s
          t.specOption = S
          let d = res.data.orders[i].state;
          d = d.split(' ');
          if(d[0] == '配件/材料'){
              t.stpe = 1;
          }
          else if(d[0] == '加工'){
              t.step = 2;
          }
          else if(d[0] == '品管'){
              t.step = 3;
          }
          else if(d[0] == '包裝'){
              t.step = 4;
          }
          else if(d[0] == '出貨中'){
              t.step = 5;
          }
          t.stepPer = d[1];
          t.number = res.data.orders[i].number
          t.date = res.data.orders[i].date
          t.id = res.data.orders[i].id
          data.push(t)
        }
        self.orders = data
            }).catch(error=>{
            })
            api.getAsksByID(token,id).then(res=>{
                self.asks = res.data.inquirys
                for(var i=0;i< self.asks.length;i++){
                self.asks[i].detail = JSON.parse(self.asks[i].detail)
                }
                }).catch(error=>{
            })
        }).catch(error=>{
            this.$router.push('/')
            window.location.reload()
        })
    }
}
</script>

<style>
.dialogCard {
    position: absolute;
    z-index:1000;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}


</style>
