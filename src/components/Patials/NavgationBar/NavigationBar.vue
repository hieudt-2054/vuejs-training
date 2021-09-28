<template>
    <div>
        <!-- App bar - organism -->
        <v-app-bar 
          app 
          :color="bg" 
          elevate-on-scroll
          fixed>
            <!-- App bar icon - atom -->
            <v-app-bar-nav-icon @click.stop="drawerOpen = !drawerOpen"/>
            <!-- App bar logo - item -->
            <v-img 
                class="absolute-center"
                src="@/assets/logo.svg"
                max-height="32"
                max-width="32"
                alt="Logo"
                @click="drawerOpen = !drawerOpen"/>   
        </v-app-bar>
        <!-- Navbar drawer - organism -->
        <navigation-bar-drawer v-bind:open.sync="drawerOpen"/>   
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBarDrawer from './NavigationBarDrawer/NavigationBarDrawer.vue'

export default Vue.extend({
  components: { NavigationBarDrawer },
    name: 'NavigationBar',
    data() {
        return {
            drawerOpen: false as boolean,
            bg:'transparent' as string
        }
    },
    mounted() {
      window.onscroll = () => {
        this.changeColor();
      };
    },
    methods: {
      changeColor() {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          this.bg = 'white';
        } else {
          this.bg = 'transparent';
        }
      },
    },
})
</script>
