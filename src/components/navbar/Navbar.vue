<template>
  <v-toolbar dark color="orange">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <font-awesome-icon :icon="['fab', 'github'] " size="2x" class="ml-2 hidden-sm-and-up"></font-awesome-icon>
    <v-toolbar-title class="white--text hidden-xs-only" >Github</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
        placeholder="Enter UserName"
        append-icon="search"
    ></v-text-field>
  </v-toolbar>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>