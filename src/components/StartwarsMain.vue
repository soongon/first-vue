<template>
  <starwars-main-title></starwars-main-title>
  <starwars-main-list></starwars-main-list>
  {{ PIE }}
</template>

<script>
import StarwarsMainTitle from './StarwarsMainTitle.vue';
import StarwarsMainList from './StarwarsMainList.vue';
import movie from '../mixins/movieMixin';

export default {
  components: { StarwarsMainTitle, StarwarsMainList },
  mixins: [
    movie,
  ],
}
</script>

<style scoped>

</style>
