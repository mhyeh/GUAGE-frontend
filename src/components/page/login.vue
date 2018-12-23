<template>
    <v-container>
        <v-card>
            <v-layout row>
              <v-flex xs10 offset-xs1>
              <v-text-field label="帳號" class="input-group--focused" v-model="account"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
               <v-flex xs10 offset-xs1>
              <v-text-field :type="'password'" label="密碼" class="input-group--focused" v-model="password"></v-text-field>
              </v-flex>
            </v-layout>
            <center>
            <v-btn align="center" small @click="login">登入</v-btn>
             <v-btn align="center" small @click="register">加入會員</v-btn>
            </center>
        </v-card>
    </v-container>
</template>

<script>
import api from '../../store/api'

export default {
    data () {
        return {
            account:'',
            password:'',
        }
    },
    methods:{
        login() {
            let self = this;
            api.login(this.account, this.password).then(res => {
                localStorage.setItem('token', res.data.token)
                alert("登入成功")
                this.$router.push('/')
                window.location.reload();
            }).catch(error => {
                alert("密碼錯誤")
            })
         },
         register(){
            this.$router.push('/home/register');
        }
    },
    beforeMount(){
        let self = this
        let token = localStorage.getItem('token')
        api.getAccount(token).then(res=>{
            this.$router.push('/')
        }).catch(error=>{
        })
    }
}
</script>

<style>

</style>
