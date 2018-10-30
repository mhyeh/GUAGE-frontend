<template>
  <v-container>
      <center>
            <v-card-text><b align="center"><font size="7">會員資料填寫</font></b><font size=4 color=red>*為必填</font></v-card-text>
      </center>
        <br>
        <v-flex xs12>
            <v-card color="blue lighten-5" raised="">
                <br><br>
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
                <v-radio label="男"  value="男"></v-radio>
                <v-radio label="女" value="女"></v-radio>
            </v-radio-group>
            </v-flex>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>*帳號</font><font size=2>6~20個字(小寫英文字母或數字)</font></b><v-text-field counter="20" background-color="white" v-model="account" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>*密碼</font><font size=2>6~20個字(小寫英文字母或數字)</font></b><v-text-field counter="20" background-color="white" v-model="password" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4><br>
            <b><font size=4>*密碼再確認</font></b><v-text-field background-color="white" v-model="password2" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                 <v-flex xs4 offset-xs4>
            <b><font size=4>*電子郵件</font></b><v-text-field background-color="white" v-model="email" label=""  color="black" persistent-hint></v-text-field>
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
                <br>
                <v-flex offset-xs5><v-btn color="white" large @click="register"><b>確認送出</b></v-btn></v-flex>
                <br>
            </v-card>
        </v-flex>
  </v-container>
</template>

<script>
import api from '../../store/api'
export default {
    props: ['path'],
  data () {
    return {
      name: '',
      company:'',
      sex: '',
      birthday: '',
      phone: '',
      email: '',
      line: '',
      qq:'',
      skype:'',
      fax:'',
      account:'',
      password: '',
      password2: '',
      member:[{name:'',company:'',sex:'',birthday:'',phone:'',email:'',line:'',qq:'',skype:'',account:'',password:'',fax:''}],
    }
  },
  methods: {
    register () {
      if (this.$data.name === '' || this.$data.password === '' || this.$data.password2 === '' || this.$data.account === '' || this.$data.company === '' || this.$data.email === '' || this.$data.phone ==='' || this.$data.fax === '') {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('有必填選項未填')
      } else if(this.$data.account.length < 6 || this.$data.account.length > 20){
          document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('帳號長度錯誤')
      } else if (this.$data.password.length < 6 || this.$data.password.length > 20) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('密碼長度錯誤')
      } else if (this.$data.password !== this.$data.password2) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('密碼不相同')
      } else {
          let list=['name','company','sex','birthday','phone','email','line','qq','skype','account','password','fax']
          for(var i of list){
              this.member[0][i] = this.$data[i]
          }
          api.register(this.member[0]).then(res=>{
              alert("申請成功請等待審核...(大約3~5天工作天)")
              window.location.reload();
          }).catch(error=>{
              console.log(error)
              alert("此帳號已被使用")
          })
      }
    }
  }
}
</script>
