<template>
    <v-container>
        <v-flex xs9 offset-xs1>
        <v-text-field label="公司*"  class="input-group--focused" v-model="company"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="姓名*"  class="input-group--focused" v-model="name"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="連絡電話*"  class="input-group--focused" v-model="phone"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="手機*"  class="input-group--focused" v-model="cellphone"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="傳真"  class="input-group--focused" v-model="fax"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="E-mail*"  class="input-group--focused" v-model="email"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
        <v-text-field label="標題*"  class="input-group--focused" v-model="title"></v-text-field>
        </v-flex>
        <br>
        <v-flex xs10 offset-xs1>
            <p align="left"><font size="3">建議或詢問事項*</font></p>
        <v-textarea solo v-model="message" auto-grow></v-textarea>
        </v-flex>
        <v-btn large @click="send">確認送出</v-btn>
    </v-container>
</template>

<script>
import api from '../store/api'
var list = ["company","name","phone","email","title","message"]
export default {
    data(){
        return {
            company:'',
            name:'',
            phone:'',
            cellphone:'',
            fax:'',
            email:'',
            title:'',
            message:'',
        }
    },
    methods:{
        send(){
            for(var i of list)
            {
                console.log(this[i])
                if(this[i] === '')
                {
                    alert("有必填選項未填")
                     document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    return;
                }
            }
            api.send('message',this.$data).then(res=>{
                alert("發送成功");
                this.$router.push('/');
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }).catch(error=>{
            })
            
        }
    },
    beforeMount(){
        let token = localStorage.getItem('token')
        let self = this
        api.getAccount(token).then(res=>{
            self.company = res.data.account.company
            self.name = res.data.account.name
            self.phone = res.data.account.phone
            self.fax = res.data.account.fax
            self.email = res.data.account.email
        })
    }
}
</script>

<style>

</style>
