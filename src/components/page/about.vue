<template>
    <v-layout>
        <pdf scr=article.context></pdf>
    </v-layout>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'
export default {
     props: ['path'],
     data(){
         return {
             article:null,
         }
     },
     watch: {
         'path' (newPath, oldPath) {
             let self = this;
        api.getArticleByName(newPath).then(res=>{
            self.article = res.data.article;
        }).catch(error=>{
            alert(error)
        })
         }
     },
    beforeMount(){
        let self = this;
        api.getArticleByName(this.path).then(res=>{
            console.log(res.data.article)
            self.article = res.data.article;
            console.log(self.article)
        }).catch(error=>{
            alert(error)
        })
    }
}
</script>


<style>

</style>
