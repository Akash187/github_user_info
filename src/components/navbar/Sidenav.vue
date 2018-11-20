<template>
  <v-layout
      wrap
      style="height: 200px;"
  >
    <v-navigation-drawer
        v-model="sidenav"
        absolute
        temporary
        width=240
    >
      <v-list class="pa-1">
        <v-list-tile  @click="">
          <v-list-tile-content>
            <v-list-tile-title >
              Repositories
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="">
          <v-list-tile-content>
            <v-list-tile-title >
              User
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    name: "Sidenav",
    props: ['drawer'],
    data () {
      return {
        sidenav: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
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

</style>