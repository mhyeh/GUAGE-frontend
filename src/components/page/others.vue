<template>
    <v-container>
    <top></top>
    <v-layout row="">
        <v-flex xs2>
            <left :path="path"></left>
        </v-flex>
        <v-flex xs8>
            <middle></middle>
        </v-flex>
        <v-flex xs2>
          <right></right>
        </v-flex>
    </v-layout>
    <bottom></bottom>
  </v-container>
</template>

<script>
export default {
    props: ['path'],
    mounted () {
        console.log(this.path);
    }
}
</script>

<style>

</style>
