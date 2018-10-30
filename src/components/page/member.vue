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
      <td>{{ props.item.id }}</td>
      <td >{{ props.item.date }}</td>
      <td><v-dialog width="800"  color="#FFFFFF" class="dialogTop" hide-overlay="">
            <v-btn  slot="activator">詳細</v-btn>
            <v-card color="white" >
                <br>
                    <font size=4>
                        <font size=5>
                        <v-flex offset-xs5>
                        <b><p>詳細資料</p></b>
                        </v-flex>
                        </font>
                        <v-flex xs10 offset-xs1>
                    <v-data-table
            color= "white"
            :headers="askDetailHeaders"
            :items="props.item.detail"
            class="elevation-1"
            hide-actions
            light
            >
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
      <td class="text-xs-center"> {{props.item.name}} </td>
      <td class="text-xs-center"><v-card-media v-bind:src="props.item.picture"></v-card-media></td>
      <td class="text-xs-center"><v-flex v-bind:key=n v-for="n in props.item.spec.length"><p v-if="props.item.spec[n-1]!== null">{{props.item.spec[n-1]}}:{{props.item.specOption[n-1]}}</p></v-flex></td>
      <td class="text-xs-center">{{props.item.amount}}</td>
    </template>
        </v-data-table>
                        </v-flex>
                     <v-flex xs6 offset-xs1>
                         <br>
                    <p>聯絡資訊:</p>  
                    <p>姓名:&nbsp;{{props.item.name}}</p>
                    <p>連絡電話:&nbsp;{{props.item.phone}}</p>
                    <p>E-mail:&nbsp;{{props.item.email}}</p>
                    <p>備註留言:</p>
                    <v-textarea flat v-model="props.item.message" height="200">
                    </v-textarea>
                </v-flex>
                </font>
             <br>   
            </v-card>
            </v-dialog></td>
    </template>
  </v-data-table>
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
            search:[],
            askHeaders:[
                {text: '編號',align: 'left',sortable: false,value: 'id'},
                { text: '日期', value: 'date' ,sortable: false,},
                {text:'詳細',value:'detail',sortable:false}
            ],
            askDetailHeaders:[
                {text: '商品名稱',align: 'center',sortable: false,value: 'name'},
                {text: '商品圖片',align: 'center',sortable: false,value: 'picture'},
                {text: '規格',align: 'center',sortable: false,value: 'detail'},
                {text: '數量',align: 'center',sortable: false,value: 'number'}
            ],
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
                    console.log(obj)
                    let token = localStorage.getItem('token')
                    api.accountUpdate(token,this.account.id,obj).then(res=>{
                         document.body.scrollTop = 0
                         document.documentElement.scrollTop = 0
                        alert("更新成功")
                        window.location.reload()
                    }).catch(error=>{
                    })
                }
        }
    },
    beforeMount(){
        let self = this
        let token = localStorage.getItem('token')
        let id;
        if(token==null){
            this.$router.push('/')
            window.location.reload()
        }
        api.getAccount(token).then(res=>{
            self.account = res.data.account
            let list=['name','company','sex','phone','email','birthday','qq','line','skype','fax']
            console.log(res.data.account.id)
            id = res.data.account.id
            for(var i of list){
                self[i] = self.account[i]
            }
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
.dialogTop{
    position: relative;
    z-index:10000000;
}
</style>
