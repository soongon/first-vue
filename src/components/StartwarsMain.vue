<template>
  <starwars-main-title :movieTitle="movieTitle"></starwars-main-title>
  <starwars-main-list :films='films'></starwars-main-list>
</template>

<script>
import axios from 'axios';
import StarwarsMainTitle from './StarwarsMainTitle.vue';
import StarwarsMainList from './StarwarsMainList.vue';
export default {
  components: { StarwarsMainTitle, StarwarsMainList },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            axios.get('https://swapi.dev/api/films')
            .then(result => {
                this.films = result.data.results;
                //console.log(result.data.results);
                });
            }
    },
    data() {
        return {
            films: [],
            movieTitle: '영화목록.. 입니다.',
        }
    },
}
</script>

<style scoped>

</style>