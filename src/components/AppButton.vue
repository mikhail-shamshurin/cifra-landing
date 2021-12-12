<template>
    <component
        :class="{
            'app-button': true,
            'app-button--wide': wide,
            'app-button--stroke': stroke
        }"
        v-bind="$attrs"
        :is="rootType"
        :href="href"
        @click="onClick"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        props: {
            href: {
                type: String,
                default: ''
            },
            wide: {
                type: Boolean,
                default: false
            },
            stroke: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            rootType() {
                return this.href.trim() ? 'a' : 'button'
            }
        },
        methods: {
            onClick(...args) {
                this.$emit('click', ...args)
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/mixins.scss';
    @import '../assets/scss/functions.scss';

    .app-button {
        @include clickable;

        --background: transparent;

        font-style: normal;
        font-weight: bold;
        font-size: to-rem(16);
        line-height: 100%;
        border: none;
        outline: none;
        font-family: 'Comfortaa' !important;
        color: white;
        background: var(--secondary);
        min-width: to-rem(240);
        min-height: to-rem(60);
        border-radius: to-rem(30);
        box-shadow: 0 to-rem(4) to-rem(20) #e32196;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        &:disabled {
            opacity: 0.7;
            pointer-events: none;
        }

        &--wide {
            width: 100%;
        }

        &--stroke {
            border: to-rem(2) solid var(--secondary) !important;
            background: transparent;
            color: var(--secondary);
            box-shadow: 0 to-rem(4) to-rem(20) rgba(227, 33, 150, 0);
            transition: all 0.3s ease 0s;

            &:hover {
                background: var(--secondary);
                color: white;
                box-shadow: 0 to-rem(4) to-rem(20) rgba(227, 33, 150, 1);
            }
        }
    }
</style>
