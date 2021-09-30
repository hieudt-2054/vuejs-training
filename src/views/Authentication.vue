<template>
    <v-container class="auth" pa-0 fluid>
        <v-row class="h-100" no-gutters>
            <v-col sm="6">
                <auth-image :lazySrc="authImg" :src="authImg"/>
            </v-col>
            <v-col sm="6" class="d-flex w-100 align-center">
                <v-container class="content h-70 mw-70 m-auto flex-col-center">
                    <header class="content_header">
                        <h1 class="text-h3 font-weight-bold text-center">
                            {{ header }}
                        </h1>
                    </header>
                    <transition name="switch" mode="out-in">
                        <component 
                            v-bind:is="'auth-' + authType" 
                            :authType="authType"
                            @changeAuthType="changeAuthTypeComp"/>
                    </transition>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {AUTH_IMG_1, AUTH_IMG_2} from '@/constants/constants'
import AuthImage from '@/components/Authentication/AuthImage.vue'
import Vue from 'vue'
import AuthSignIn from '@/components/Authentication/AuthContent/AuthSignIn.vue'
import AuthSignUp from '@/components/Authentication/AuthContent/AuthSignUp/AuthSignUp.vue'

export type authTypes = 'sign-in' | 'sign-up'

export default Vue.extend({
    name: 'Authentication', 
    components: { AuthImage, AuthSignIn, AuthSignUp },
    data() {
        return {
            authType: 'sign-in' as authTypes
        }
    },
    computed: {
        header():string {
            return this.authType === 'sign-in' ? 'Welcome to PetRescue' : 'Join us'
        },
        authImg() {
            switch(this.authType) {
                case 'sign-in':
                    return AUTH_IMG_1
                case 'sign-up':
                    return AUTH_IMG_2
                default:
                    return 'sign-in'
            }
        }
    },
    methods: {
        changeAuthTypeComp(authType: authTypes) {
            this.authType = authType
        }
    }
})
</script>

<style lang="scss">
    .auth {
        height: 100%;
        padding: 0;
    }

    .switch {
        &-enter-active { transition: all .3s ease-in-out; }

        &-enter {
            opacity: 0;
            transform: translateX(6rem);
        }

        &-leave-active { transition: all .5s ease; }

        &-leave-to {
            opacity: 0;
            transform: scale(.9)
        }
    }
</style>
