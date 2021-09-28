<template>
    <!-- Drawer items - module -->
    <v-list dense>
        <!-- Drawer item - module -->
        <v-list-item
          class="py-2"
          v-for="item in items"
          :key="item.title"
          link
          exact
          :to="{name: item.title}"
        >
            <!-- Drawer item icon - atom -->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <!-- Drawer item content - atom -->
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "NavigationBarDrawerItems",
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'Profile', icon: 'mdi-account' },
            ],
        }
    }
})
</script>
