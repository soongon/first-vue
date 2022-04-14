<template>
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
export default {
    props: [ 'films' ]
}
</script>

<style>

</style>