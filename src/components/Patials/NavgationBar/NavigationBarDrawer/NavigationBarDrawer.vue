<template>
    <!-- Navbar drawer - organism -->
    <v-navigation-drawer
      v-model="isOpen"
      absolute
      temporary>
      <!-- Drawer user - module -->
     <navigation-bar-drawer-user/>

      <!-- Divider - atom -->
      <v-divider></v-divider>

      <!-- Drawer items - module -->
      <navigation-bar-drawer-items/>

      <!-- Drawer appended slot - module -->
      <template v-slot:append>
        <navigation-bar-drawer-actions/>
      </template>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBarDrawerActions from './NavigationBarDrawerActions.vue'
import NavigationBarDrawerItems from './NavigationBarDrawerItems.vue'
import NavigationBarDrawerUser from './NavigationBarDrawerUser.vue'

export default Vue.extend({
  components: { NavigationBarDrawerUser, NavigationBarDrawerItems, NavigationBarDrawerActions },
    name: 'NavigationBarDrawer',
    props: {
        open: {
            required: true,
            type: Boolean
        }
    },
    computed: {
      isOpen: {
        get ():boolean { return this.open },
        set (value: boolean):void { this.$emit('update:open', value) },
      },
    }
})
</script>
