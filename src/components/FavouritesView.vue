<template lang="html">
  <div class="favourites-view">
    <h1>Favourites</h1>
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
    import axios from 'axios';
    import PhotoList from './PhotoList';

    export default {
        name: 'FavouritesView',
        components: {
          PhotoList,
        },
        data() {
            return {
              photos: [],
            }
        },
        watch: {},
        methods: {
          fetchSingleImage(id) {
            const request = axios.get(`https://api.unsplash.com/photos/${id}?client_id=${this.$root.client_id}`);

            request
              .then((response) => {
                this.photos.push(response.data);
              })
              .catch(console.error);
          }
        },
        mounted() {
          const { favouriteImages } = this.$store.state;

          if (favouriteImages.length === 0) {
            return;
          }

          favouriteImages.forEach((image) => {
            this.fetchSingleImage(image);
          });
        }
    }
</script>
