<template>
  <h3>영화목록</h3>
  <p>
    <button @click="buttonClicked()">최신 글 가져오기</button>
  </p>
  <ul>
    <li v-for="film in films" :key="film.episode_id">
      에피소드 아이디: {{ film.episode_id }} | 
      제목: {{ film.title }}
      <p>감독 : {{ film.director }}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
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
        }
    },
}
</script>

<style scoped>

</style>