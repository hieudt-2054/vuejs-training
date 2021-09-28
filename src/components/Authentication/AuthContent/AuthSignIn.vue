<template>
    <auth-content class="content" authType="sign-in">
        <template #content>
            <!-- INPUTS -->
            <div class="form_inputs">
                <div 
                    class="input_container"
                    v-for="input in [email, password]" 
                    :key="input.label">
                    <text-input :input="input"/>
                </div>
            </div>
            <div class="form_others">
                <!-- REMEMBERED -->
                <div class="flex-row-between text-body-2 font-weight-medium ">
                    <v-checkbox
                        v-model="remembered"
                        label="Remember me"
                        color="orange darken-3"
                        :value="true"
                        hide-details
                        class="ma-0"/>
                    <span class="d-block warning--text">Forgot, your password?</span>
                </div>
                <!-- SUBMIT BTN -->
                <v-btn 
                    class="form_btn w-100 text-subtitle pa-2 mt-3 rounded-lg text-bold" 
                    large   
                    color="warning"
                    type="submit">Continue</v-btn>
                <!-- REGISTER -->
                <span 
                    class="d-block m-auto text-center font-weight-medium c-pointer"
                    @click="changeAuthType('sign-up')">Don't have an account?</span>
            </div>
        </template>
    </auth-content>
</template>

<script lang="ts">
import TextInput from '@/components/UI/TextInput.vue'
import AuthContentMixin from '@/mixins/AuthContentMixin'
import Vue from 'vue'
import AuthContent from './AuthContent.vue'

export default Vue.extend({
    name: 'AuthSignIn',
    components: { AuthContent, TextInput },
    data() {
        return {
            valid: false as boolean,
            remembered: false as boolean,
        }
    },
    computed: {
        email: {
            get() {
                return this.$store.state.auth['email']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        password: {
            get() {
                return this.$store.state.auth['password']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        }
    },
    mixins: [AuthContentMixin]
})
</script>

<style lang="scss">
    .content {
        .input_container {
            label { transition: .2s ease-out; }
            &:focus-within {
                label { color: orange; }
            }
        }
        .form_others {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
