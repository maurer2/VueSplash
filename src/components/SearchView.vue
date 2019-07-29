<template lang="html">
  <div class="search-view">
    <h1>Search</h1>
    <form class="form" @submit.prevent="handleSubmit">
      <label class="label" for="search">
        Search
      </label>
      <input class="field" type="search" id="search" name="search" v-model="inputValue">
      <button type="submit" class="button">
        Submit
      </button>
    </form>
    <PhotoList :photos="photos" />
  </div>
</template>

<script>
    import axios from 'axios';
    import PhotoList from './PhotoList';

    export default {
        name: 'SearchView',
        components: {
          PhotoList,
        },
        data() {
            return {
              inputValue: 'cat',
              photos: [],
            }
        },
        watch: {
            inputValue(newValue) {
              console.log(newValue);
            }
        },
        methods: {
          handleSubmit(){
            console.log('submit');

            if (this.inputValue.length === 0) {
              return;
            }

            this.fetchImages();
          },
          fetchImages() {
            const request = axios.get(`https://api.unsplash.com/search/photos?page=1&client_id=${this.$root.client_id}&query=${this.inputValue}`);

            request
              .then((response) => {
                this.photos = response.data.results;
              })
              .catch(console.error);
          }
        },
    }
</script>

<style lang="css" scoped>
    .form {
        display: flex;
        margin: 0 auto 2rem auto;
        flex-direction: column;
        width: 100%;
        max-width: 480px;
    }

    .label {
      text-align: left;
    }

    .field {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
    }

    .button {
      padding: 0.5rem 1rem;
      align-self: flex-start;
      background: whitesmoke;
      appearance: none;
    }

</style>
