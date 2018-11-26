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
    beforeMount(){
        let self = this;
        api.getArticleByName(this.path).then(res=>{
            self.article = res.data.article;
        }).catch(error=>{
        })
    }
}
</script>


<style>

</style>
