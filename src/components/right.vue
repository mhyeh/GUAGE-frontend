<template>
  <v-container>
      <v-layout align-content-center="">
        <v-flex align-start="">
          <v-card height="170px">
            <center>
            <v-card-text>商品搜尋</v-card-text>
            </center>
            <v-flex xs10 offset-xs1><v-text-field class="input-group--focused"></v-text-field></v-flex>
          <v-flex align-content-center="" text-xs-center><v-btn ripple="" small>搜尋</v-btn></v-flex>
          </v-card>
          <v-btn ripple="" block="">詢價單</v-btn>
          <v-btn ripple="" block="">我要留言</v-btn>
          <v-card height="250px" align="center">
           <v-card-text>會員專區</v-card-text>
            <v-layout row>
              <v-flex xs10 offset-xs1>
              <v-text-field label="帳號" class="input-group--focused"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
               <v-flex xs10 offset-xs1>
              <v-text-field label="密碼" class="input-group--focused"></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn align="center" small>登入</v-btn>
          </v-card>
          <br>
          <v-btn ripple="" block="">訂閱電子報</v-btn>
          <v-card height="30px" align="center" href="https://www.youtube.com/channel/UCecezHA6evN6Zy2p5uaHVpw/videos">youtube</v-card>
          <br>
          <v-card height="30px" align="center" href="https://www.facebook.com/Reatlantis/?ref=hl">facebook</v-card>
          <br>
          <v-card height="30px" align="center">Line</v-card>
          <br>
          <v-card height="50px" align="center">網站友好聲明</v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>


export default {
  data () {
    return {
      message: ""
    }
  }
}
</script>

<style>

</style>
