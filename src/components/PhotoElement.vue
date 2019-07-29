<template lang="html">
  <div class="photo-element">
    <img class="image" :src="src" :alt="alt" @click="onImgClick">
    <button class="button" :class="{ 'button--is-favourite': isFavourite }" type="button" @click="onBtnClick">
      <span class="text">{{ isFavourite ? 'unlike' : 'like' }}</span>
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
        margin-bottom: 2rem;
    }

    .image {
        display: block;
        width: 100%;
        height: auto;
    }

    .button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: block;
        padding: 0;
        appearance: none;
        background: none;
        border: 0;
        box-shadow: 0;
        outline: 0;
        cursor: pointer;
        overflow: hidden;
    }

    .button:before {
        font-size: 5rem;
        content: '\2605';
        color: whitesmoke;
    }

    .button--is-favourite:before {
        color: yellow;
    }

    .text {
        position: absolute;
        left: -9999px;
    }
</style>
