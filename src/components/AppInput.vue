<template>
    <div class="app-input">
        <label class="app-input__label" :for="id" v-if="title" v-html="title" />
        <input
            v-bind="$attrs"
            class="app-input__core"
            type="text"
            :name="name"
            :value="value"
            :placeholder="placeholder"
            ref="core"
            :id="id"
            @input="onInput"
            @change="onInput"
        />
        <div v-if="error" v-text="error" class="app-input__error" />
    </div>
</template>

<script>
    import { ComponentErrorMixin } from './common/mixins.js'
    import Inputmask from 'inputmask'

    export default {
        mixins: [ComponentErrorMixin],
        props: {
            title: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                required: true
            },
            mask: {
                type: Object,
                default: () => new Object()
            },
            id: {
                type: String,
                default: ''
            }
        },
        methods: {
            onInput($event) {
                this.$emit('input', $event.target.value)
                this.resetError()
            }
        },
        mounted() {
            if (Object.values(this.mask).length) {
                Inputmask(this.mask).mask(this.$refs.core)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/functions.scss';

    .app-input {
        &__core {
            border: to-rem(1) solid #000000;
            box-sizing: border-box;
            border-radius: to-rem(4);
            font-size: to-rem(16);
            text-indent: to-rem(16);
            padding: to-rem(18) 0 to-rem(16);
            display: block;
            width: 100%;
            outline: none;
            appearance: none;
        }

        &__label {
            font-size: to-rem(16);
            margin-bottom: to-rem(12);
            display: block;
        }

        &__error {
            margin-top: to-rem(10);
            color: red;
        }
    }
</style>
