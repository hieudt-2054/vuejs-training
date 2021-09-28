import Vue from 'vue';

export default Vue.extend({
    methods: {
        changeAuthType(authType: string) {
            this.$emit('changeAuthType', authType)
        }
    }
})