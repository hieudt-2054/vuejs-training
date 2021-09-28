<template>
    <div>
        <label 
            class="d-block mt-2 font-weight-medium"
            :for="input.label">{{ input.label }}</label>
        <v-text-field
            :id="input.label" 
            :type="input.type"
            v-model="input.value"
            :placeholder="input.placeholder"
            color="blue-grey darken-2"
            :outlined="input.outlined"
            :required="input.required"
            :rules="input.rules"
            :solo="input.solo"
            :clearable="input.clearable"
            :error="input.error"
            :error-messages="input.errorMessage"
            :suffix="input.suffix"
            :append-icon="input.appendIcon"
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
    }
})
</script>