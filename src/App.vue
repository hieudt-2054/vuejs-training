<template>
  <v-app>
    <navigation-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationBar from './components/Patials/NavgationBar/NavigationBar.vue';

export default Vue.extend({
  components: { NavigationBar },
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">

</style>
