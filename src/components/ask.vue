<template>
    <v-container>
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
let list = ["company","name","phone","email"];


export default {
    data(){
        return {
            company:'',
            name:'',
            phone:'',
            cellphone:'',
            fax:'',
            address:'',
            email:'',
            message:''
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
