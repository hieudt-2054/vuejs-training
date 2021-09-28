<template>
    <auth-content>
        <template #content>
            <transition name="switch" mode="out-in">
                <component v-bind:is="'auth-sign-up-' + step" @changeStep="onChangeStep"/>
            </transition>
        </template>
    </auth-content>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthContent from '../AuthContent.vue'
import AuthSignUpFirst from './AuthSignUpFirst.vue'
import AuthSignUpSecond from './AuthSignUpSecond.vue'

type Step = 'first' | 'second'

export default Vue.extend({
    name: "AuthSignUp",
    components: { AuthContent, AuthSignUpFirst, AuthSignUpSecond },
    data() {
        return {
            step: 'first' as Step
        }
    },
    methods: {
        onChangeStep(newStep: Step) {
            this.step = newStep
        }
    }
})
</script>

<style lang="scss">

</style>