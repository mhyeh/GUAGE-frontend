<template>
    <v-layout>
        <pdf :src=article.context  style="width: 100%"></pdf>
    </v-layout>
</template>

<script>
import api from '../../store/api'
import pdf from 'vue-pdf'
export default {
     props: ['path'],
     components: {
        pdf
    },
     data(){
         return {
             article:null,
             articlePath: ""
         }
     },
     watch: {
         'path' (newPath, oldPath) {
             let self = this;
        api.getArticleByName(newPath).then(res=>{
            self.article = res.data.article;
        }).catch(error=>{
        })
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
