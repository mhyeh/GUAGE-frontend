import axios from 'axios'

let client = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000
})


export default {
    login: function(account,password) {
        return client.post('/account/login', {account: account, password: password})
    },
    register: function(data) {
        return client.post('/account/register', {data: data})
    },
    search: function(productName) {
        return client.post('/product/search', {productName:productName})
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
    getProduct:function(type){
        return client.get('/product',{type:type})
    },
    getArticleByType:function(type){
        return client.get('/article',{type:type})
    },
    getArticle:function(id){
        return client.get('/article/'+id);
    },
    product:function(id){
        return client.get('/product/'+id,{id:id})
    },
    sendEmail:function(data){
        return client.post('/mail',{data:data})
    },
    getArticleByName(name){
        return client.get('/article/name/'+name)
    },
    register(data){
        return client.post('./accountcheck',{data:data})
    }
}
