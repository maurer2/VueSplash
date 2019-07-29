<template lang="html">
  <div class="home-view">
    <h1>Home</h1>
    <nav>
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/search">
        Search
      </RouterLink>
      <RouterLink to="/favourites">
        Favourites
      </RouterLink>
    </nav>
    <PhotoList :photos="photos" />
  </div>
</template>

<script>
    import PhotoList from './PhotoList';
    import * as PhotoService from '../http/PhotoService'

    export default {
        name: 'HomeView',

        components: {
            PhotoList
        },

        data() {
            return {
                photos: []
            }
        },

        created() {
            PhotoService.list({client_id: this.$root.client_id})
                .then(res => {
                    this.photos = res.data
                })
                .catch(console.error)
        }
    }
</script>
