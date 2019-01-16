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
             src: '',
             numPages: undefined,
         }
     },
     methods: {
        loadingTask(url) {
            return pdf.createLoadingTask(url);
        }
     },
     watch: {
         'path' (newPath, oldPath) {
            let self = this;
            this.numPages = 1;
            api.getArticleByName(newPath).then((res) => {
                self.article = res.data.article;
                self.src = this.loadingTask(self.article.context);
                return self.src;
            }).then(pdf => {
                self.numPages = pdf.numPages;
            }).catch(error=>{
            })
         }
     },
    beforeMount(){
        let self = this;
        api.getArticleByName(this.path).then(async (res) => {
            self.article = res.data.article;
            console.log(self.article.context)
            self.src = this.loadingTask(self.article.context);
            return self.src;
        }).then(pdf => {
            self.numPages = pdf.numPages;
        }).catch(error=>{
            console.log(error);
        })
    }
}
</script>


<style scoped>
.pointer {cursor: pointer;}
</style>
