<template>
    <div class="get-started-block block">
        <div class="get-started-block__content content">
            <div class="get-started-block__grid">
                <div class="get-started-block__text-content">
                    <h2 class="get-started-block__title underlined">
                        Оцифровка для стартапера с оборотом до 100 000 руб.
                        <span> бесплатна</span>
                    </h2>
                    <p class="get-started-block__text">
                        На основе нашего основного продукта мы создали продукт, который идеально
                        подойдет для партнера Wildberries c небольшими оборотами. Оставьте заявку и
                        мы вам вышлем эту версию таблицы
                    </p>
                    <AppButton class="get-started-block__button" wide>Получить таблицу</AppButton>
                </div>
                <img src="../../assets/img/image-start.png" class="get-started-block__image" />
            </div>
        </div>
    </div>
</template>

<script>
    import AppButton from '../AppButton.vue'

    export default {
        components: {
            AppButton
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/functions.scss';

    .get-started-block {
        &__image {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: to-rem(290);
            margin-top: to-rem(23);
            align-self: center;

            @media all and (min-width: 1024px) {
                max-width: unset;
            }
        }

        &__text {
            margin-top: to-rem(24);
        }

        &__title {
            color: var(--main) !important;
        }

        &__grid {
            display: grid;
            grid-template-columns: 1fr;

            @media all and (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: to-rem(50);
            }
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
