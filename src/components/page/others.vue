<template>
    <v-container>
    <top class="top"></top>
    <v-layout class="mid"  row="">
        <v-flex xs2>
            <left :path="path"></left>
        </v-flex>
        <v-flex xs8>
            <middle :path="path"></middle>
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
    beforeMounted () {
        console.log(this.path);
    }
}
</script>

<style>
.top {
    position: relative;
    z-index: 100;
}

.mid {
    position: relative;
    z-index: 0;
}
</style>
