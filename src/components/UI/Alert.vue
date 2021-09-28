<template>
    <v-alert
        v-model="alertState"
        dense
        dismissible
        elevation="5"   
        text
        :type="alertInfo.type"
        transition="scale-transition"
    >{{ alertInfo.message }}</v-alert>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Alert from '@/types/Alert'

export default Vue.extend({
    name: 'Alert',
    props: {
        alertState: {
            required: true  
        },
        alertInfo: {
            required: true,
            type: {} as PropType<Alert>
        }
    },
    methods: {
        close() {
            console.log('HHHHHH')
            this.$emit('closeAlert')
        }
    }
})
</script>

<style lang="scss">

</style>