<template lang="html">
  <nav class="nav">
    <RouterLink class="nav-link" active-class="nav-link--is-active" to="/" exact>
      Home
    </RouterLink>
    <RouterLink class="nav-link" active-class="nav-link--is-active" to="/search" exact>
      Search
    </RouterLink>
    <RouterLink class="nav-link" active-class="nav-link--is-active" to="/favourites" exact>
      Favourites
    </RouterLink>
  </nav>
</template>

<script>

    export default {
        name: 'Nav',
    }
</script>

<style lang="css" scoped>
    .nav {
        display: flex;
        padding: 0;
        justify-content: space-around;
        background: whitesmoke;
    }

    .nav-link {
        display: block;
        padding: 1rem;
        flex-grow: 1;
        flex-basis: 0;
        font-weight: bold;
        text-decoration: none;
    }
    
    .nav-link--is-active {
        background: #c3c3c3;
    }
</style>
