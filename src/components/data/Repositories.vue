<template>
  <div>
    <div v-if="loading" class="loading">
      <div class="loader"></div>
    </div>
    <h2 v-if="repository.length === 0" class="mt-5 pt-5 text-xs-center">{{message}}</h2>
    <v-data-table
        :headers="headers"
        :items="repository"
        class="elevation-1 mt-5 pt-3"
        hide-actions
        v-if="repository.length !== 0"
    >
      <template slot="items" slot-scope="props">
        <td><a :href="props.item.html_url" target="_blank">{{ props.item.name }}</a></td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">{{ props.item.stargazers_count }}</td>
        <td class="text-xs-left">{{ props.item.forks}}</td>
        <td class="text-xs-left">{{ props.item.open_issues_count }}</td>
        <td class="text-xs-left">{{ props.item.language }}</td>
        <td class="text-xs-left">{{ props.item.size }}</td>
      </template>
    </v-data-table>
    <div v-if="loader" class="text-xs-center ma-2">
      <v-progress-circular
          indeterminate
          color="primary"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
  import {bus} from '../../main';

  export default {
    name: "Repositories",
    data () {
      return {
        username: '',
        message: '',
        loading: false,
        loader: false,
        total_pages: 0,
        current_page: 1,
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description' },
          { text: 'Number of Stars', value: 'stargazers_count' },
          { text: 'Number of Forks', value: 'forks' },
          { text: 'Number of Open issue', value: 'open_issues_count' },
          { text: 'Language', value: 'language' },
          { text: 'Size(kb)', value: 'size' }
        ],
        repository: [
        ]
      }
    },
    created(){
      bus.$on('searchUser', async (data) => {
        this.username = data;
        try {
          this.loading = true;
          let repositories = [];
          this.current_page = 1;
          this.total_pages = 0;
          const response1 = await fetch(`https://api.github.com/users/${this.username}`);
          const info = await response1.json();
          this.total_pages = Math.ceil(info.public_repos/30);
          const response = await fetch(`https://api.github.com/users/${this.username}/repos`);
          const repos = await response.json();
          repos.forEach((repo) => {
            repositories.push({...repo});
          });
        this.repository = repositories;
        this.message = `${this.username} Not Found`;
        }catch (error){
          this.message = `${this.username} Not Found`;
        }finally {
          this.loading = false;
        }
      });
    },
    mounted(){
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        const repositories = [];
        const fetchRepo = async () => {
          const response = await fetch(`https://api.github.com/users/${this.username}/repos?page=${this.current_page}`);
          const repos = await response.json();
          repos.forEach((repo) => {
            repositories.push({...repo});
          });
          this.loader = false;
        };
        if (bottomOfWindow && this.current_page < this.total_pages) {
          this.current_page += 1;
          this.loader = true;
          fetchRepo().then(() => {
              this.repository = this.repository.concat(repositories);
            }
          );
        }
      };
    }
  }
</script>

<style scoped>
  body{
    font-size: 0.75rem;
  }
  a{
    text-decoration: none;
    font-size: 1rem;
  }
  .loading{
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid blue;
    width: 5rem;
    height: 5rem;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>