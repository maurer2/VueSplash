<template>
  <div id="app" class="app">
    <Nav />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script>
    import Nav from './components/Nav.vue';
    import 'normalize.css';

    export default {
        name: 'App',
        components: {
          Nav,
        },
        mounted() {
            if (!this.$root.client_id) {
                this.$router.push('/auth')
            }
        }
    }
</script>

<style lang="css">
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>

<style lang="css" scoped>
    .app {
        text-align: center;
        color: #2c3e50;
        width: 100%;
    }

    .main {
      width: 100%;
      margin: auto;
      padding: 0 2rem;
      max-width: 1024px;
      overflow: hidden;
    }
</style>