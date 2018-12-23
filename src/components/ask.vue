<template>
    <v-container>
        <center>
            <v-data-table
            color= "white"
            :headers="headers"
            :items="obj"
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
      <td class="text-xs-center"><v-img v-bind:src="props.item.picture" contain max-height="100px"></v-img></td>
      <td class="text-xs-center"><v-flex v-bind:key=n v-for="n in props.item.spec.length"><p v-if="props.item.spec[n-1]!== null">{{props.item.spec[n-1]}}:{{props.item.specOption[n-1]}}</p></v-flex></td>
      <td class="text-xs-center"><v-text-field v-model="props.item.amount" class="input-group--focused"></v-text-field></td>
      <td class="text-xs-center"><v-btn small @click="deleteAsk(props.item.number-1)">刪除</v-btn></td>
      
    </template>
  </v-data-table>
        </center>
        <v-text-field v-model="company" label="公司*" class="input-group--focused"></v-text-field>
        <v-text-field v-model="name" label="姓名*" class="input-group--focused"></v-text-field>
        <v-text-field v-model="phone" label="連絡電話*" class="input-group--focused"></v-text-field>
        <v-text-field v-model="cellphone" label="手機" class="input-group--focused"></v-text-field>
        <v-text-field v-model="fax" label="傳真" class="input-group--focused"></v-text-field>
        <v-text-field v-model="address" label="聯絡地址" class="input-group--focused"></v-text-field>
        <v-text-field v-model="email" label="e-mail*" class="input-group--focused"></v-text-field>
         <p align="left"><font size="4">備註留言:</font></p>
        <v-textarea auto-grow v-model="message" solo></v-textarea>
        <v-btn large @click="send">確認送出</v-btn>
    </v-container>
</template>

<script>
import api from '../store/api'
let list = ["company","name","phone","email"];


export default {
    data(){
        return {
            headers:[ {text: '商品名稱',align: 'center',sortable: false,value: 'name'},
            {text: '商品圖片',align: 'center',sortable: false,value: 'picture'},
            {text: '規格',align: 'center',sortable: false,value: 'detail'},
            {text: '數量',align: 'center',sortable: false,value: 'number'},
            {text: '刪除',align: 'center',sortable: false,value: 'delete'}],
            company:'',
            name:'',
            phone:'',
            cellphone:'',
            fax:'',
            address:'',
            email:'',
            message:'',
            obj:[],
        }
    },
    methods:{
        send(){
            for(var i of list)
            {
                if(this[i] === '')
                {
                    alert("有必填選項未填")
                     document.body.scrollTop = 0
                     document.documentElement.scrollTop = 0
                    return;
                }
            }
            if(this.obj.length==0){
                alert("無詢價紀錄")
                return 
            }
            let data={
                detail:[],
                company:'',
                name:'',
                phone:'',
                cellphone:'',
                fax:'',
                address:'',
                email:'',
                message:'',
            }
            data.detail = this.obj
            data.company = this.company
            data.name = this.name
            data.phone = this.phone
            data.cellphone = this.cellphone
            data.fax = this.fax
            data.address = this.address
            data.email = this.email
            data.message = this.message

            let token = localStorage.getItem('token')
            console.log(token)
            api.sendAsk(token,data).then(res=>{
                alert("發送成功");
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                localStorage.removeItem('ask')
                this.$router.push('/');
            }).catch(error=>{
            })
            
        },
        deleteAsk(n){
            this.obj.splice(n,1);
            localStorage.setItem('ask',JSON.stringify(this.obj))
        }
    },
    beforeMount(){
        let token = localStorage.getItem('token')
        let self = this
        api.getAccount(token).then(res=>{
            self.company = res.data.account.company;
            self.name = res.data.account.name;
            self.phone = res.data.account.phone;
            self.fax = res.data.account.fax;
            self.email = res.data.account.email;
        }).catch(error=>{
        })
        this.obj = JSON.parse(localStorage.getItem('ask'))
    }
}
</script>

<style>

</style>
