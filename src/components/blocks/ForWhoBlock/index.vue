<template>
    <div class="for-who-block block">
        <div class="for-who-block__content content">
            <h2 class="for-who-block__title underlined underlined--centered underlined--white">
                Для кого наш сервис
            </h2>
            <p class="for-who-block__description">
                Мы работаем с любыми юридическими лицами, включая ИП и самозанятых
            </p>
            <div class="for-who-block__grid" v-if="cards.length">
                <ForWhoItem
                    v-bind="card"
                    v-for="(card, index) of cards"
                    class="for-who-block__item"
                    :key="index"
                />
            </div>
            <AppButton class="for-who-block__button" href="#form" wide> Оставить заявку </AppButton>
        </div>
    </div>
</template>

<script>
    import ForWhoItem from './ForWhoItem.vue'
    import AppButton from '../../AppButton.vue'

    const isForWhoCard = (item) => {
        return item.image && item.title && item.text
    }

    export default {
        components: {
            ForWhoItem,
            AppButton
        },
        props: {
            cards: {
                type: Array,
                default: () => [],
                validator: (value) => !value.some((item) => !isForWhoCard(item))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .for-who-block {
        color: white;
        background: var(--main);

        &__title {
            text-align: center;
        }

        &__description {
            text-align: center;
            margin-top: to-rem(16);

            @media all and (min-width: 768px) {
                max-width: to-rem(428);
                margin-left: auto;
                margin-right: auto;
            }
        }

        &__grid {
            display: grid;
            grid-template-columns: 1fr;
            margin-top: to-rem(30);
            gap: to-rem(15);

            @media all and (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: to-rem(30);
                margin-top: to-rem(40);
            }
        }

        &__button {
            margin-top: to-rem(30);

            @media all and (min-width: 768px) {
                margin-left: auto;
                margin-right: auto;
                display: flex;
                max-width: to-rem(240);
                margin-top: to-rem(40);
            }
        }
    }
</style>
