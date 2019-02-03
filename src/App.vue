<template>
  <div id="app">
    <Navbar @updateUser="onUserUpdate"></Navbar>
    <keep-alive>
      <router-view :username="userName"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data(){
    return {
      userName: ''
    }
  },
  methods: {
    onUserUpdate: function (updatedUserName) {
      this.userName = updatedUserName;
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
