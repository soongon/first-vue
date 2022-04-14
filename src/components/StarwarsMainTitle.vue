<template>
  <h3>{{ movieTitle }}</h3>
</template>

<script>
export default {
    props: {
        movieTitle: {
            type: String,
            default() {
                return '제목없음';
            }
        }
    }
}
</script>

<style>

</style>