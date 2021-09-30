<template>
    <!-- Drawer user - module -->
    <v-list-item class="pb-2">
        <!-- Drawer user avatar - atom -->
        <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <!-- Drawer user name - atom -->
        <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "NavigationBarDrawerUser"
})
</script>
