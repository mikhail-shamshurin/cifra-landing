<template>
    <div
        :class="{
            'app-side-menu': true,
            'app-side-menu--open': isOpen
        }"
    >
        <div class="app-slide-menu__header">
            <div class="app-side-menu__close-wrapper" @click="toggle">
                <slot name="close" />
            </div>
        </div>
        <div class="app-side-menu__content-wrapper">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppSideMenu',
        data: () => ({
            isOpen: false
        }),
        methods: {
            toggle() {
                this.isOpen = !this.isOpen

                if (this.isOpen) {
                    document.body.style.overflow = 'hidden'
                }

                if (!this.isOpen) {
                    document.body.style.overflow = null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-side-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        transform: translateX(100%);
        background: white;
        transition: all 0.3s ease 0s;

        &--open {
            transform: translateX(0%);
        }

        &__content-wrapper {
            height: 100%;
            width: 100%;
        }
    }
</style>
