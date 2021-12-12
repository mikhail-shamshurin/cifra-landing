<template>
    <div class="app-spoiler" @click="toggle">
        <div class="app-spoiler__header">
            <slot
                name="header"
                v-bind="{
                    isOpen
                }"
            />
        </div>
        <div
            ref="content"
            :class="{
                'app-spoiler__content': true,
                'app-spoiler__content--open': isOpen
            }"
            :style="contentStyle"
        >
            <slot name="content" />
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            isOpen: false,
            height: 0
        }),
        methods: {
            toggle () {
                if (!this.isOpen) {
                    this.height = this.$refs.content.scrollHeight
                }

                this.isOpen = !this.isOpen
            }
        },
        computed: {
            contentStyle () {
                return {
                    height: `${this.isOpen ? this.height : 0}px`
                }
            }
        }
    }
</script>

<style lang="scss">
    .app-spoiler {
        cursor: pointer;

        &__content {
            overflow: hidden;
            transition: all 0.3s ease 0s;
        }
    }
</style>
