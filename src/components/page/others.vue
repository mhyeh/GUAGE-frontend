<template>
    <v-container>
    <top class="top"></top>
    <v-layout row>
        <v-flex class="hidden-md-and-down">
            <left :path="path"></left>
        </v-flex>
        <v-flex>
            <middle :path="path" class="mid"></middle>
        </v-flex>
        <v-flex class="hidden-md-and-down">
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
    }
}
</script>

<style scoped>
.top {
    position: relative;
    z-index: 2;
}
.mid {
    position: relative;
    z-index: 1;
}
</style>
