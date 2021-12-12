<template>
    <div class="ability-item">
        <div class="ability-item__image-wrapper">
            <img :src="image" class="ability-item__image" />
        </div>
        <h3 class="ability-item__title" v-html="title">{{ title }}</h3>
        <p class="ability-item__text" v-html="text">{{ text }}</p>
        <AppButton
            class="ability-item__button"
            wide
            :href="link"
            v-html="buttonCaption"
        ></AppButton>
    </div>
</template>

<script>
    import AppButton from '../../AppButton'

    export default {
        name: 'AbilityItem',
        components: {
            AppButton
        },
        props: {
            image: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },
            buttonCaption: {
                type: String,
                default: 'Подробнее'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .ability-item {
        &__image-wrapper {
            position: relative;
            padding-top: calc(9 / 16 * 100%);
            box-shadow: 0 to-rem(6) to-rem(40) rgba(133, 80, 246, 0.2);
            border-radius: to-rem(20);
        }

        &__image {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
            display: block;
        }

        &__title {
            margin-top: to-rem(19);
        }

        &__text {
            margin-top: to-rem(10);
        }

        &__button {
            margin-top: to-rem(16);

            @media all and (min-width: 768px) {
                max-width: to-rem(240);
                margin-top: to-rem(30);
            }
        }
    }
</style>
