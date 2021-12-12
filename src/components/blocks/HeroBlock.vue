<template>
    <div class="hero-block block">
        <div class="hero-block__content content">
            <div class="hero-block__grid">
                <div class="hero-block__text">
                    <h1 class="hero-block__title">
                        Увеличивайте продажи на&nbsp;Wildberries с&nbsp;помощью МаркетЦифры
                    </h1>
                    <p class="hero-block__text">
                        Контроль товаров, продаж, финансов — единая система для&nbsp;управления
                        вашим бизнесом в&nbsp;одной вкладке, которая загружается по&nbsp;API
                    </p>
                    <AppButton href="#abilities" class="hero-block__button" wide>
                        Узнать как
                    </AppButton>
                </div>
                <img src="../../assets/img/image-main.png" alt="" class="hero-block__image" />
            </div>
        </div>
        <div class="hero-block__decoration-container">
            <Background class="hero-block__decoration" />
        </div>
    </div>
</template>
<script>
    import AppButton from '../AppButton'
    import Background from '../../assets/img/hero-background.svg'

    export default {
        components: { AppButton, Background }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/functions.scss';

    .hero-block {
        color: white;
        position: relative;
        background: var(--main);
        padding-bottom: 0;

        &__content {
            padding-bottom: to-rem(30);
        }

        &__grid {
            display: grid;
            grid-template-columns: 1fr;

            @media all and (min-width: 768px) {
                grid-template-columns: to-rem(492) 1fr;
                gap: to-rem(11);
            }

            @media all and (min-width: 1024px) {
                grid-template-columns: to-rem(676) 1fr;
                gap: 0;
            }

            @media all and (min-width: 1440px) {
                grid-template-columns: to-rem(676) 1fr;
                gap: to-rem(11);
            }
        }

        &__image {
            display: none;

            @media all and (min-width: 768px) {
                display: block;
                margin-left: auto;
                margin-right: auto;
                max-width: 100%;
            }
        }

        &__text {
            margin-top: to-rem(12);
        }

        &__button {
            position: relative;
            z-index: 2;
            margin-top: to-rem(24);

            @media all and (min-width: 768px) {
                max-width: to-rem(240);
                margin-top: to-rem(30);
            }
        }

        &__decoration-container {
            position: relative;
            overflow: hidden;
            height: to-rem(115);
            background: white;

            @media all and (min-width: 1441px) {
                background: var(--main);
            }
        }

        &__decoration {
            display: block;
            position: absolute;
            left: 0;
            left: 50%;
            transform: translate(-50%);

            @media all and (min-width: 1441px) {
                display: none;
            }
        }
    }
</style>
