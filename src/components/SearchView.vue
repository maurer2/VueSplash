<template lang="html">
  <div class="search-view">
    <h1>Search</h1>
    <form class="form" @submit.prevent="handleSubmit">
      <label class="label" for="field">
        Search
      </label>
      <input class="field" type="search" id="search" name="search" v-model="inputValue">
      <button type="submit" class="button">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'SearchView',
        components: {},
        data() {
            return {
              inputValue: '',
              photos: []
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

            this.fetchImages();
          },
          fetchImages() {
            const response = axios.get(`https://api.unsplash.com/search/photos?page=1&client_id=${this.$root.client_id}&query=${this.inputValue}`);

            response.then((res) => {
              this.photos = res.data.results;
            })
            .catch(console.error)
          }
        },
    }
</script>
