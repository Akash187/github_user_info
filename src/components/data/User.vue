<template>
  <div class="mt-5 pt-5">
    <h2 v-if="username.length === 0" class=" text-xs-center">Enter the Username and press Enter to start Searching.</h2>
    <v-flex xs12 sm8 md6 lg4 v-if="username.length !== 0">
    <v-card class="mx-3 pa-3 mb-5">
      <div class="profile">
        <div class="name">
          <div class="userName">
            {{username}}
          </div>
          <div class="actualName">
            {{name}}
          </div>
        </div>
        <div>
          <img :src="image_url" class="profileImage"/>
        </div>
      </div>
      <div class="bio">{{bio}}</div>
      <div class="location">
        <v-icon class="icon">place</v-icon>
        <div class="info_text">{{location}}</div>
      </div>
      <div class="repos">
        <v-icon class="icon">class</v-icon>
        <div class="info_text">{{public_repos}} public repos</div>
      </div>
      <div class="followers">
        <v-icon class="icon">people</v-icon>
        <div class="info_text">{{followers}} followers</div>
      </div>
      <div class="following">
        <v-icon class="icon">people_outline</v-icon>
        <div class="info_text">{{following}} following</div>
      </div>
      <div class="more_info">
        <a class="github_profile" :href="profile" target="_blank">profile</a>
        <a class="website" :href="website || profile" target="_blank">website</a>
      </div>
    </v-card>
    </v-flex>
  </div>
</template>

<script>
  import {bus} from '../../main';
  export default {
    name: "user",
    data (){
      return {
        username: '',
        name: '',
        image_url: '',
        bio: '',
        public_repos: '0',
        location: '',
        followers: '0',
        following: '0',
        profile: '',
        website: ''
      }
    },
    created(){
      bus.$on('searchUser', async (data) => {
        this.username = data;
        console.log('Username2: ' + this.username);
        try {
          const response = await fetch(`https://api.github.com/users/${data}`);
          const info = await response.json();
          this.username = info.login;
          this.name = info.name;
          this.image_url = info.avatar_url;
          this.bio = info.bio;
          this.location = info.location;
          this.public_repos = info.public_repos;
          this.followers = info.followers;
          this.following = info.following;
          this.profile = info.html_url;
          this.website = info.blog;

        }catch (error){
          console.log(`Error fetching user : ${error}`);
        }
      });
    },
    mounted(){
      console.log('Mounted');
    }
  }
</script>

<style scoped>

  .profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name{
    display: flex;
    flex-direction: column;
  }

  .userName{
    width: 15rem;
    font-weight: 400;
    font-style: italic;
    font-size: 1.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.25rem 0;
  }

  .profileImage{
    width: 5rem;
  }

  .bio{
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .location, .repos, .followers, .following{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
  }

  .icon{
    padding: 0 2rem 0 1rem;
    font-size: 2rem;
  }

  .info_text{
    font-size: 1.25rem;
    font-weight: 400;
  }

  .more_info{
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
    text-transform: uppercase;
  }

  .more_info a{
    text-decoration: none;
    color: orangered;
    font-weight: 400;
    font-size: 1.25rem;
  }

  .github_profile{
    padding: 0 1rem;
  }

</style>