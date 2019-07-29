import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favouriteImages: [],
  },
  mutations: {
    addFavourite(state, image) {
      if (state.favouriteImages.includes(image)) {
        return;
      }

      state.favouriteImages.push(image);
    },
    removeFavourite(state, image) {
      if (!state.favouriteImages.includes(image)) {
        return;
      }

      const newFavouriteImages = state.favouriteImages.filter(favouriteImage => (favouriteImage !== image));
      
      state.favouriteImages = newFavouriteImages;
    }
  },
  getters: {
    isFavourite: (state) => (image) => {
      //find(favouriteImage => (favouriteImage === image));

      return state.favouriteImages.includes(image);
    }
  }
})