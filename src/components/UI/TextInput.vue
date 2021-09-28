<template>
    <div>
        <label 
            class="d-block mt-2 font-weight-medium"
            :for="input.label">{{ input.label }}</label>
        <v-text-field
            v-bind="shortenInput"
            v-model="input.value"
            :id="input.label" 
            color="blue-grey darken-2"
        />
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Input from '@/types/Input'

export default Vue.extend({
    name: 'TextInput',
    props: {
        input: {
            required: true,
            type: {} as PropType<Input>
        }
    },
    computed: {
        shortenInput() {
            const {value, label, ...shortenInput} = this.input
            return shortenInput
        }
    }
})
</script>