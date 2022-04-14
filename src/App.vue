<template>
  <startwars-header></startwars-header>
  <startwars-main></startwars-main>
  <starwars-footer></starwars-footer>
</template>
<script>

import StartwarsHeader from './components/StartwarsHeader.vue';
import StartwarsMain from './components/StartwarsMain.vue';
import StarwarsFooter from './components/StarwarsFooter.vue';

export default {
  components: { StartwarsHeader, StartwarsMain, StarwarsFooter },
  name: 'App',
}
</script>

<style>

</style>





