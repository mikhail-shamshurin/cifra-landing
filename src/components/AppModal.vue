<template>
    <transition name="fade" @after-leave="afterleave">
        <div v-show="visible" class="app-modal">
            <div class="app-modal__background" @click.self="close" />
            <div class="app-modal__body-wrapper">
                <div class="app-modal__body">
                    <slot :close="close" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data: () => ({
            visible: false
        }),
        methods: {
            afterleave() {
                this.$destroy()
            },
            close() {
                this.toggleVisibility()
            },
            lockBody() {
                const { body } = document

                if (body.style.overflow === 'hidden') {
                    return undefined
                }

                body.style.overflow = 'hidden'
                return undefined
            },
            unlockBody() {
                const { body } = document

                if (body.style.overflow !== 'hidden') {
                    return undefined
                }

                body.style.overflow = null
                return undefined
            },
            toggleVisibility() {
                this.visible = !this.visible
            }
        },
        destroyed() {
            this.unlockBody()
            document.body.removeChild(this.$el)
        },
        mounted() {
            this.lockBody()
            document.body.appendChild(this.$el)
            this.toggleVisibility()
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/transitions.scss';
    @import '../assets/scss/functions.scss';

    .app-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999999;

        &__background {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }

        &__body-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 0 to-rem(15);
            overflow-y: auto;
            pointer-events: none;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            * {
                pointer-events: all;
            }
        }

        &__body {
            position: relative;
            background: white;
            position: relative;
            background: #ffffff;
            box-shadow: 0 to-rem(4) to-rem(14) rgba(0, 0, 0, 0.14);
            border-radius: to-rem(14);
            padding: to-rem(45) to-rem(20);
            max-width: to-rem(600);
            width: 100%;
            max-width: to-rem(500);
            min-height: to-rem(400);
        }
    }
</style>
