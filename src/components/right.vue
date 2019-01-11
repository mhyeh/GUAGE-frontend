<template>
  <v-container class="right">
      <v-layout >
        <v-flex>
          <v-card height="170px">
            <center>
            <v-card color="light-blue lighten-5"><v-card-text><b>產品搜尋</b></v-card-text></v-card>
            </center>
            <v-flex xs10 offset-xs1><v-text-field class="input-group--focused" v-model="productName"></v-text-field></v-flex>
          <v-flex align-content-center="" text-xs-center><v-btn ripple="" small color=#4FC3F7 @click="search()">搜尋</v-btn></v-flex>
          </v-card>
          <br>
          <v-btn ripple="" block="" @click="changeroute('shopping')"  color="light-blue lighten-5"><b>詢價單</b></v-btn>
          <br>
          <v-btn ripple="" block="" @click="changeroute('message')" color="light-blue lighten-5"><b><font color="#EF5350">我要留言</font></b></v-btn>
          <br>
          <v-card v-if="loginFlag==false" align-center>
            <v-card color="light-blue lighten-5">
              <center>
           <v-card-text><b>會員專區</b></v-card-text>
              </center>
            </v-card>
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
          <v-card v-else>
            <v-card color="light-blue lighten-5">
              <center>
           <v-card-text><b>會員專區</b></v-card-text>
              </center>
            </v-card>
            <center>
            <v-btn align="center" small @click="changeroute('member')">會員專區</v-btn>
            <v-btn align="center" small @click="logout()">登出</v-btn>
            </center>
          </v-card>
          <br>
          <v-card>
            <center>
          <v-card color="light-blue lighten-5"><v-card-text><b>電子報</b></v-card-text>
          </v-card>
           </center>
          <v-flex xs10 offset-xs1>
            <v-text-field label="名稱" class="input-group--focused" v-model="name"></v-text-field>
            <v-text-field label="email" class="input-group--focused" v-model="email"></v-text-field>
          </v-flex>
          <center> 
          <v-btn align="center" small ripple @click="subscribe()">訂閱</v-btn>
          </center>
          </v-card>
          <br>
          <a href="https://www.youtube.com/channel/UCecezHA6evN6Zy2p5uaHVpw/videos" target="_blank">
          <v-img  align="center"  src="http://210.61.46.101:8787/uploadedFile/youtube.jpg"></v-img></a>
          <br>
          <a href="https://www.facebook.com/Reatlantis/?ref=hl" target="_blank">
          <v-img align="center"  src="http://210.61.46.101:8787/uploadedFile/facebook.jpg" ></v-img></a>
          <br>
          <a href="https://line.me/R/ti/p/%40ycx6275q" target="_blank"><v-img align="center" src="http://210.61.46.101:8787/uploadedFile/line.jpg"></v-img></a>
          <br>
          <v-img align="center"  src="http://210.61.46.101:8787/uploadedFile/webFriend.jpg" ></v-img>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import api from '../store/api'

export default {
  data () {
    return {
      message:'',
      account:'',
      password:'',
      productName:'',
      email:'',
      loginFlag:false,
      account:[],
      name:'',
    }
  },
  methods: {
    changeroute(url){
      this.$router.push('/home/' + url)
    },
    login() {
      let self = this;
      api.login(this.account, this.password).then(res => {
        localStorage.setItem('token', res.data.token)
        self.loginFlag = true;
        alert("登入成功")
        window.location.reload();
      }).catch(error => {
        alert("密碼錯誤")
      })
    },
    search() {
      let self = this
       self.$router.push('/search/'+ self.productName)
    },
    register(){
      this.$router.push('/home/register');
    },
    logout(){
      localStorage.removeItem('token')
      window.location.reload()
      this.$router.push('/')
    },
    subscribe(){
      if(this.name=='' || this.email==''){
        alert('有資料未填')
      }
      else{
        let data={
        type: 'in',
        mail: this.email,
        name: this.name
      }
        api.subscribe(data).then(()=>{
          alert('訂閱成功')
          window.location.reload()
        }).catch(error=>{

        })
      }
    },
    unsubscribe(){

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
.right {
    
    width: 200px;
}
</style>
