<template>
    <v-img 
        class="image h-100 rounded-r-lg"
        :lazy-src="lazySrc"
        :src="src">
        <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
                <v-progress-circular
                indeterminate
                color="grey lighten-5"
                ></v-progress-circular>
            </v-row>
        </template>
    </v-img>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'AuthImage',
    props: {
        src: {
            required: true,
            type: String
        },
        lazySrc: {
            required: true,
            type: String
        }
    }
})
</script>

<style lang="scss">
    .v-image__image { transition: 1.5s ease-in-out; }
</style>
