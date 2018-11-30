<template>
    <v-layout column="">
        <pdf v-for="i in numPages" :key="i" :src="src" :page="i" style="width: 100%"></pdf>
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
             src: null,
             numPages: 1
         }
     },
      methods: {
        loadingTask(url) {
            return pdf.createLoadingTask(url);
        }
     },
    beforeMount(){
       let self = this;
        api.getArticleByName(this.path).then((res) => {
            console.log(res)
            self.article = res.data.article;
            self.src = this.loadingTask(self.article.context);
            return self.src;
        }).then(pdf => {
            self.numPages = pdf.numPages;
        }).catch(error=>{
        })
    }
}
</script>


<style>

</style>
