<template>
    <header
        :class="{
            'header-block': true,
            'header-block--scrolled': isScrolled
        }"
    >
        <div class="header-block__content content">
            <LogoIcon class="header-block__logo" />
            <MenuIcon class="header-block__menu-icon" @click="toggleMenu" />
            <nav v-if="menuItems.length" class="header-block__menu">
                <a
                    class="header-block__menu-item"
                    v-for="({ caption, href }, index) of menuItems"
                    :href="href"
                    :key="index"
                >
                    {{ caption }}
                </a>
            </nav>
            <AppSideMenu ref="$menu">
                <CloseMenuIcon class="header-block__close-menu-icon" slot="close" />
                <template #content>
                    <nav v-if="menuItems.length" class="header-block__side-menu">
                        <a
                            class="header-block__side-menu-item"
                            v-for="({ caption, href }, index) of menuItems"
                            :href="href"
                            :key="index"
                            @click="toggleMenu"
                        >
                            {{ caption }}
                        </a>
                    </nav>
                </template>
            </AppSideMenu>
        </div>
    </header>
</template>

<script>
    import LogoIcon from '../../assets/icons/logo.svg'
    import MenuIcon from '../../assets/icons/icon-menu.svg'
    import CloseMenuIcon from '../../assets/icons/icon-menu-close.svg'

    import AppSideMenu from '../AppSideMenu'

    const isMenuItem = (item) => item.caption && item.href

    export default {
        components: {
            LogoIcon,
            AppSideMenu,
            CloseMenuIcon,
            MenuIcon
        },
        props: {
            menuItems: {
                type: Array,
                default: () => [],
                validator: (value) => {
                    return !value.some((item) => !isMenuItem(item))
                }
            },
            scrolledSize: {
                type: Number,
                default: 0
            }
        },
        computed: {
            isScrolled() {
                return this.scrolled > this.scrolledSize
            }
        },
        data: () => ({
            scrolled: 0
        }),
        methods: {
            toggleMenu() {
                this.$refs.$menu.toggle()
            },
            onScroll() {
                this.scrolled = window.scrollY
            }
        },
        mounted() {
            document.addEventListener('scroll', this.onScroll)
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/mixins.scss';
    @import '../../assets/scss/functions.scss';

    .header-block {
        z-index: 999;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        background: var(--main);
        padding: to-rem(21) 0;
        box-shadow: 0 0 to-rem(10) rgba(0, 0, 0, 0);
        transition: box-shadow 0.3s ease 0s;

        &--scrolled {
            box-shadow: 0 0 to-rem(10) rgba(0, 0, 0, 0.2);
        }

        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__side-menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            height: 100%;
            width: 100%;
            padding: to-rem(15);
        }

        &__side-menu-item {
            font-style: normal;
            font-weight: 500;
            font-size: to-rem(24);
            line-height: 100%;
            letter-spacing: 0.02em;
            color: var(--main);

            &:not(:first-of-type) {
                margin-top: to-rem(40);
            }
        }

        &__side-menu-item {
            --color: var(--main);
            --background: white;
        }

        &__menu-icon {
            @include clickable;

            @media all and (min-width: 768px) {
                display: none;
            }
        }

        &__close-menu-icon {
            @include clickable;

            position: absolute;
            right: to-rem(17);
            top: to-rem(25);
        }

        &__menu {
            display: none;
            justify-content: space-between;

            @media all and (min-width: 768px) {
                display: flex;
            }
        }

        &__menu-item {
            --color: white;
            --background: var(--main);

            margin-left: to-rem(30);
        }
    }
</style>
