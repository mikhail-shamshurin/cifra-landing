<template>
    <div class="get-help-block block">
        <div class="get-help-block__content content">
            <div class="get-help-block__grid">
                <img src="../../assets/img/image-contact.png" class="get-help-block__image" />
                <div class="get-help-block__text-content">
                    <h2 class="get-help-block__title underlined underlined">
                        Остались вопросы? Напишите нам!
                    </h2>
                    <AppButton class="get-help-block__button" href="#" wide stroke>
                        Написать
                    </AppButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppButton from '../AppButton.vue'

    export default {
        components: { AppButton }
    }
</script>

<style lang="scss">
    @import '../../assets/scss/functions.scss';

    .get-help-block {
        padding: to-rem(60) 0;

        &__image {
            margin-left: auto;
            margin-right: auto;
            max-width: to-rem(290);
            display: block;
            align-self: center;

            @media all and (min-width: 1024px) {
                max-width: 100%;
            }
        }

        &__text-content {
            align-self: center;
        }

        &__grid {
            display: grid;
            grid-template-columns: 1fr;

            @media all and (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: to-rem(50);
            }
        }

        &__title {
            color: var(--main);
        }

        &__button {
            margin-top: to-rem(24);

            @media all and (min-width: 768px) {
                max-width: to-rem(240);
            }
        }
    }
</style>
