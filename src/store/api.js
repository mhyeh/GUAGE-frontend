import axios from 'axios'

let client = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'http://210.61.46.101:8787',
    timeout: 60000
})


export default {
    login: function(account,password) {
        return client.post('/account/login', {account: account, password: password})
    },
    search: function(productName) {
        return client.get('/product/search/' + productName)
    },
    introduction:function(data){//人才自薦
        return client.post('/introduction',{data:data})
        
    },
    message:function(data){//我要留言
        return client.post('/message',{data:data})
    },
    inquiry:function(token, data){//詢價單
        return client.post('/inquiry',{data:data},{headers:{'Auth': token}})
    },
    getProducBytypet:function(type){
        return client.get('/product',{type:type})
    },
    getArticleByClass:function(classID){
        return client.get('/article/class/' + classID)
    },
    getArticle:function(id){
        return client.get('/article/'+id);
    },
    getProduct:function(id){
        return client.get('/product/product/'+id)
    },
    sendEmail:function(data){
        return client.post('/mail',{data:data})
    },
    getArticleByName(name){
        return client.get('/article/name/'+name)
    },
    register(data){
        return client.post('./accountcheck',{data:data})
    },
    getLastestArticle(){
        return client.get('./article/lastest')
    },
    getLastestProduct(number){
        console.log(number)
        return client.get('./product/lastest/'+number)
    },
    getAccount(token){
        return client.get('/account/token',{headers:{'Auth': token}})
    },
    sendAsk(token,data){
        return client.post('/inquiry/create',{data:data},{headers:{'Auth':token}})
    },
    accountUpdate:function(token,id,data){
        return client.put('/account/'+id,data,{headers:{'Auth':token}})
    },
    getAsksByID:function(token,id){
        return client.get('/inquiry/'+id,{headers:{'Auth':token}})
    }
}
