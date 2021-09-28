<template>
    <div class="select">
        <label class="font-weight-medium" :for="input.label">{{ input.label }}</label>
        <v-select
            :id="input.label"
            :items="input.options"
            v-model="input.value"
        ></v-select>
    </div>
</template>

<script lang="ts">
import Input from '@/types/Input'
import Vue, { PropType } from 'vue'
export default Vue.extend({
    name: "SelectInput",
    props: {
        input: {
            required: true,
            type: {} as PropType<Input>
        }
    }
})
</script>