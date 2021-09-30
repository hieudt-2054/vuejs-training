<template>
    <div>
        <!-- INPUTS --> 
        <div class="form_inputs">
            <div 
                class="input_container"
                v-for="input in [email, password, retypedPassword]" 
                :key="input.label">
                <text-input :input="input"/>
            </div>
        </div>
        <!-- SUBMIT BTN -->
        <v-btn 
            class="form_btn w-100 text-subtitle pa-2 mt-3 rounded-lg text-bold" 
            large   
            color="warning"
            @click="formSubmit"
            type="submit">Continue</v-btn>
        <!-- REGISTER -->
        <span 
            class="d-block m-auto mt-5 text-center font-weight-medium c-pointer"
            @click="changeAuthType('first')">Already have an account?</span>
    </div>
</template>

<script lang="ts">
import TextInput from '@/components/UI/TextInput.vue'
import Vue from 'vue'
import AuthContentMixin from '@/mixins/AuthContentMixin'

export default Vue.extend({
    name: 'AuthSignUpFirst',
    components: { TextInput },
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
        },
        retypedPassword: {
            get() {
                return this.$store.state.auth['retypedPassword']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        }
    },
    methods: {
        changeAuthType() {
            this.$emit('changeAuthType', 'sign-in')
        },
        formSubmit() {
            const { password, retypedPassword } = this.$store.state.auth
            // Additional check: if the retyped password is the same as password
            if(password.value && retypedPassword.value) {
                if(password.value !== retypedPassword.value) {
                    // Manual set error state for retyped pw
                    this.$store.commit( 'setError', {
                        field: 'retypedPassword', 
                        message: 'Retype password does not match'
                    })
                } else {
                    // Manual clear error state for retyped pw
                    this.$store.commit('setError', { field: 'retypedPassword' })
                    this.$emit('changeSignUpStep', 'second')
                }
            }
        }
    },
    mixins: [AuthContentMixin]
})
</script>
