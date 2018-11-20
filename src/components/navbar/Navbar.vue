<template>
  <div>
  <v-toolbar dark color="orange">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <font-awesome-icon :icon="['fab', 'github']" size="2x" class="ml-2 hidden-sm-and-up"></font-awesome-icon>
    <v-toolbar-title class="white--text hidden-xs-only" >Github</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
        placeholder="Enter UserName"
        append-icon="search"
    ></v-text-field>
  </v-toolbar>
  <Sidenav v-bind:drawer="drawer"></Sidenav>
</div>
</template>

<script>
  import Sidenav from './Sidenav';
  export default {
    name: "Navbar",
    components: {
      Sidenav
    },
    data (){
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>