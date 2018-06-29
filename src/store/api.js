import axios from 'axios'

let client = axios.create()

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
    inquiry:function(data){//詢價單
        return client.post('/inquiry',{data:data})
    },
    productUpdata:function(type){
        return client.get('/product',{type:type})
    },
    articleUpdate:function(type){
        return client.get('/article',{type:type})
    },
    product:function(id){
        return client.get('/product/'+id,{id:id})
    }
}
