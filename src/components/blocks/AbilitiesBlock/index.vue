<template>
    <div class="abilities-block block">
        <div class="abilities-block__content content">
            <div class="abilities-block__grid">
                <div class="abilities-block__menu">
                    <h2 class="abilities-block__title underlined">
                        Только представьте, вы сможете...
                    </h2>
                    <div class="abilities-block__menu-list">
                        <a
                            v-for="({ id, menuTitle }, index) of menu"
                            v-html="menuTitle"
                            :class="{
                                'abilities-block__menu-item': true,
                                'abilities-block__menu-item--active': id === visibleElement
                            }"
                            :key="index"
                            :href="`#${id}`"
                        />
                    </div>
                </div>
                <div class="abilities-block__abilities" v-if="abilities.length">
                    <AbilityItem
                        class="abilities-block__item"
                        v-bind="ability"
                        v-for="(ability, index) of abilities"
                        :id="setAbilityId(index)"
                        :key="index"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AbilityItem from './AbilityItem'

    const isAbilityItem = (item) => {
        return item.image && item.title && item.text && item.link && item.menuTitle
    }

    export default {
        components: {
            AbilityItem
        },
        computed: {
            menu() {
                return this.abilities.map(({ menuTitle }, index) => ({
                    menuTitle,
                    id: this.setAbilityId(index)
                }))
            }
        },
        props: {
            abilities: {
                type: Array,
                default: () => [],
                validator: (value) => !value.some((item) => !isAbilityItem(item))
            }
        },
        data: () => ({
            visibleElement: null
        }),
        methods: {
            setAbilityId(index) {
                return `ability-${index}`
            },
            isVisible(node) {
                const windowSize = document.documentElement.clientHeight
                const { y: nodeTop, height: nodeHeight } = node.getBoundingClientRect()

                return nodeTop + nodeHeight / 2 >= 0 && nodeTop + nodeHeight / 2 <= windowSize
            },
            onScroll() {
                this.menu.forEach(({ id }) => {
                    const node = document.getElementById(id)

                    if (this.isVisible(node)) {
                        this.visibleElement = id
                    }

                    if (!this.isVisible(node)) {
                        return this.visibleElement
                    }
                })
            }
        },
        mounted() {
            document.addEventListener('scroll', this.onScroll)
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .abilities-block {
        padding-top: to-rem(76);
        padding-bottom: to-rem(60);

        &__grid {
            display: grid;
            grid-template-columns: 1fr;

            @media all and (min-width: 1024px) {
                grid-template-columns: repeat(2, 1fr);
                gap: to-rem(30);
                align-items: start;
            }
        }

        &__menu-list {
            display: none;

            @media all and (min-width: 1024px) {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-top: to-rem(30);
            }
        }

        &__menu {
            position: static;

            @media all and (min-width: 1024px) {
                position: sticky;
                top: to-rem(86);
                align-self: start;
            }
        }

        &__menu-item {
            --color: #bebebe;
            display: block;
            margin-top: to-rem(12);
            transition: all 0.3s ease 0s;
            font-size: to-rem(18);

            &--active {
                color: #131313;
                --color: #131313;
            }
        }

        &__title {
            color: var(--main);
        }

        &__item {
            margin-top: to-rem(30);

            @media all and (min-width: 1024px) {
                &:first-of-type {
                    margin-top: 0;
                }
            }
        }
    }
</style>
