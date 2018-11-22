<template>
  <v-navigation-drawer
      v-model="sidenav"
      fixed
      temporary
      width=240
  >
    <v-list class="pa-1">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/" exact>Repositories</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile >
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/user" exact>User</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Sidenav",
    props: ['drawer'],
    data() {
      return {
        sidenav: null
      }
    },
    watch: {
      drawer: function () {
        this.sidenav = true
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    color: black;
  }
  .router-link-active{
    color: orangered;
  }
</style>