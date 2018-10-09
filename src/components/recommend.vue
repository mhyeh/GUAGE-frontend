<template>
    <v-container>
        <br>
        <v-layout row>
            <v-flex xs3 offset-xs1>
            <v-text-field v-model="name" label="姓名*" class="input-group--focused"></v-text-field>
            </v-flex>
            <p><font size="2">性別*:</font></p>
            <v-flex xs3>
            <v-radio-group v-model="sex" row="">
                <v-radio label="男"  value="男"></v-radio>
                <v-radio label="女" value="女"></v-radio>
            </v-radio-group>
            </v-flex>
            <v-flex xs3>
            <v-text-field v-model="age"  label="年齡*" class="input-group--focused"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs2 offset-xs1>
            <v-text-field v-model="birthday" label="出生年月日*" class="input-group--focused"></v-text-field>
            </v-flex>
            <v-flex xs3 offset-xs1>
             <v-text-field v-model="birth_country" label="籍貫*" class="input-group--focused"></v-text-field>
            </v-flex>
             <v-flex xs3 offset-xs1>
            <v-text-field v-model="number" label="身分證字號*" class="input-group--focused"></v-text-field>
             </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs3 offset-xs1>
            <v-text-field v-model="education" label="學歷*" class="input-group--focused"></v-text-field>
            </v-flex>
            <v-flex xs2 offset-xs1>
            <v-text-field v-model="department" label="科系*" class="input-group--focused"></v-text-field>
            </v-flex>
            <v-flex xs3 offset-xs1>
            <v-text-field v-model="graduation" label="畢業時間*" class="input-group--focused"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs6 offset-xs1>
            <v-text-field v-model="address" label="地址" class="input-group--focused"></v-text-field>
            </v-flex>
            <v-flex xs3 offset-xs1>
            <v-text-field v-model="phone" label="連絡電話*" class="input-group--focused"></v-text-field>
            </v-flex>
        </v-layout>
        <v-flex xs10 >
            <v-text-field v-model="email" label="E-mail*" class="input-group--focused"></v-text-field>
        </v-flex>
        <v-flex xs9 offset-xs1>
            <p align="left"><font size="4">學習經歷</font></p>
        <v-textarea auto-grow v-model="study_experience" solo></v-textarea>
        </v-flex>
        <v-flex xs9 offset-xs1>
            <p align="left"><font size="4">工作經歷</font></p>
        <v-textarea auto-grow v-model="work_experience" solo></v-textarea>
        </v-flex>
        <v-flex xs9 offset-xs1>
            <p align="left"><font size="4">個人簡歷</font></p>
        <v-textarea auto-grow v-model="introduction" solo></v-textarea>
        </v-flex>
        <v-btn large @click="send">確認送出</v-btn>
    </v-container>
</template>

<script>
let list =["name","sex","age","birth_country","number","education","department","graduation","phone","email"]
export default {
    data(){
        return {
                name: '',
                sex: '',
                age: '',
                birthday: '',
                number: '',
                birth_country: '',
                graduation: '',
                education: '',
                address: '',
                department: '',
                phone: '',
                email: '',
                study_experience: '',
                work_experience: '',
                introduction: ''
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
            alert("發送成功");
            this.$router.push('/');
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style>

</style>
