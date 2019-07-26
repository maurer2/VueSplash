<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
    export default {
        name: 'App',

        mounted() {
            if (!this.$root.client_id) {
                this.$router.push('/auth')
            }
        }
    }
</script>
