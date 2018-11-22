<template>
  <div>
    <v-toolbar dark color="orange" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <font-awesome-icon :icon="['fab', 'github']" size="2x" class="ml-2 hidden-sm-and-up"></font-awesome-icon>
      <v-toolbar-title class="white--text hidden-xs-only">Github</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
          placeholder="Enter Username and press Enter"
          append-icon="search"
          v-model="username" @keyup.enter="search"
      ></v-text-field>
    </v-toolbar>
    <Sidenav v-bind:drawer="drawer"></Sidenav>
  </div>
</template>

<script>
  import Sidenav from './Sidenav';
  import {bus} from '../../main';

  export default {
    name: "Navbar",
    components: {
      Sidenav
    },
    data() {
      return {
        drawer: null,
        username: ''
      }
    },
    methods: {
      search: function () {
        bus.$emit('searchUser', this.username.trim());
      }
    }
  }
</script>

<style scoped>

</style>