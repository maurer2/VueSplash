<template lang="html">
  <div class="photo-element" :class="{ 'photo-element--is-favourite': isFavourite }">
    <img :src="src" :alt="alt" @click="onImgClick">
    <button type="button" @click="onBtnClick">
      {{ isFavourite ? 'unlike' : 'like' }} &#9733;
    </button>
  </div>
</template>

<script>
    export default {
        name: 'PhotoElement',

        props: {
            photo: {
                type: Object,
                required: true
            },

            size: {
                type: String,
                default: 'regular'
            }
        },

        computed: {
            src() {
                return this.photo.urls[this.size]
            },
            alt() {
                return this.photo.description
            },
            isFavourite() {
                const { id } = this.photo;

                return this.$store.getters.isFavourite(id);
            },
        },

        methods: {
            onImgClick() {
                this.$router.push({name: 'Photo', params: { id: this.photo.id }})
            },

            onBtnClick() {
                const { id } = this.photo;

                if (this.isFavourite) {
                    this.$store.commit('removeFavourite', id);
                    console.log('Unmark photo as fave')
                } else {
                    this.$store.commit('addFavourite', id);
                    console.log('Mark photo as fave')
                }
            }
        }

    }
</script>

<style lang="css" scoped>
    .photo-element {
        position: relative;
    }

    .photo-element:before {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        font-size: 4rem;
        content: '\2605';
        color: whitesmoke;
    }

    .photo-element--is-favourite:before {
        color: yellow;
    }
</style>
