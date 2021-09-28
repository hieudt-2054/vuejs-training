<template>
    <v-main class="content flex-col-center">
        <!-- FORMS -->
        <v-form 
            class="content_form flex-col-center h-100"
            @submit.prevent="onFormSubmit" 
            v-model="valid"
            ref="authForm">
            <slot name="content" @formSubmit="onFormSubmit"></slot>    
        </v-form>
    </v-main>
</template>

<script lang="ts">
import { authTypes } from '@/views/Authentication.vue'
import Vue, { PropType } from 'vue'

export default Vue.extend({
    name: 'AuthContent',
    props: {
        authType: {
            type: String as PropType<authTypes>
        }
    },
    data() {
        return {
            valid: false
        }
    },
    methods: {
        onFormSubmit() {
            const form = this.$refs['authForm'] as HTMLFormElement
            form.validate()
            if(this.valid) {
                if(this.authType === 'sign-in' || this.authType === 'sign-up') {
                    this.$router.replace('/')
                }
            }
        }
    }
})
</script>

<style lang="scss">
    .content {
        flex-grow: 1;
        margin-top: 2rem;

        &_form { justify-content: space-between; }
    } 
</style>
