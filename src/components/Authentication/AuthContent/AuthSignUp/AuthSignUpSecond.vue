<template>
    <div>
        <div class="form_inputs">
            <!-- FIRST LINE -->
            <div class="form_inputs_first-line">
                <text-input :input="username"/>
            </div>
            <!-- SECOND LINE -->
            <v-row class="form_inputs_second-line">
                <v-col class="telephone" cols="3">
                    <text-input :input="telephone"/>
                </v-col>
                <v-col class="type" cols="3">
                    <select-input :input="type"/>
                </v-col>
                <v-col class="working-hours" cols="5">
                    <v-row>
                        <v-col class="working-hours_start" cols="6">
                            <text-input :input="workingStart"/>
                        </v-col>
                        <v-col class="working-hours_end" cols="6">
                            <text-input :input="workingEnd"/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <!-- THIRD LINE -->
            <div class="form_inputs_first-line">
                <text-input :input="address"/>
            </div>
        </div>
        <!-- BUTTONS -->
        <v-btn 
            class="form_btn w-100 text-subtitle pa-2 mt-3 rounded-lg text-bold" 
            large   
            color="warning"
            type="submit">Continue</v-btn>
        <v-btn 
            class="form_btn w-100 text-subtitle pa-2 mt-3 rounded-lg text-bold" 
            large   
            color="orange lighten-5 "
<<<<<<< HEAD
            @click="changeStep('first')">Go back</v-btn>
=======
            @click="changeSignUpStep('first')">Go back</v-btn>
>>>>>>> 68a976a... Authentication page - basic UI + validation.
    </div>
</template>

<script lang="ts">
import SelectInput from '@/components/UI/SelectInput.vue'
import TextInput from '@/components/UI/TextInput.vue'
import AuthContentMixin from '@/mixins/AuthContentMixin'
import Vue from 'vue'

export default Vue.extend({
    name: 'AuthSignUpSecond',
    components: { TextInput, SelectInput },
    computed: {
        username: {
            get() {
                return this.$store.state.auth['username']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        telephone: {
            get() {
                return this.$store.state.auth['telephone']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        type: {
            get() {
                return this.$store.state.auth['type']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        workingStart: {
            get() {
                return this.$store.state.auth['workingStart']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        workingEnd: {
            get() {
                return this.$store.state.auth['workingEnd']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
        address: {
            get() {
                return this.$store.state.auth['address']
            },
            set(value) {
                this.$store.commit('updateMessage', value)
            }
        },
    },
    methods: {
        changeSignUpStep(value: string) {
            this.$emit('changeSignUpStep', value)
        } 
    },
    mixins: [AuthContentMixin]
})
</script>

<style lang="scss">
    .form_inputs {
        &_second-line {
            display: flex;
            align-items: baseline;
            gap: 1rem;
        }
    }
</style>
