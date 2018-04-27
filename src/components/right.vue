<template>
  <v-container>
      <v-layout align-content-center="">
        <v-flex align-start="">
          <v-card height="30px" align="center">商品搜尋</v-card>
          <v-card height="80px"><v-flex offset-xs1><br><input type="text" v-model="message" placeholder="" small="" ></v-flex>
          <v-flex align-content-center="" text-xs-center><v-btn ripple="" small>搜尋</v-btn></v-flex></v-card>
          <v-btn ripple="" block="">詢價單</v-btn>
          <v-btn ripple="" block="">我要留言</v-btn>
          <v-card height="30px" align="center">會員專區</v-card>
          <v-card height="100px">
              <v-card-text height="30px">帳號:<input type="text" v-model="message" placeholder="">
              <br>密碼:<input type="text" v-model="message" placeholder=""></v-card-text>
          </v-card>
          <v-card><v-btn block="" small>登入</v-btn></v-card>
          <br>
          <v-card height="30px" align="center">訂閱電子報</v-card>
          <br>
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
}
</script>

<style>

</style>
