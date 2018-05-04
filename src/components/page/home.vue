<template>
  <v-container>
    <top></top>
    <v-layout row="">
        <v-flex xs10>
          <br>
          <center>
            <p>最新商品</p>
          </center>
          <v-card height="200px"></v-card>
          <br>
          <center>
            <p>最新消息</p>
          </center>
          <v-card height="200px"></v-card>
          <br>
          <center>
            <p>關於亞帝</p>
          </center>
          <v-card height="200px"></v-card>
          <v-btn @click="changeroute">click</v-btn>
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
  methods: {
    changeroute () {
      this.$router.push('/home')
    }
  }
}
</script>
