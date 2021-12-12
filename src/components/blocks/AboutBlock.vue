<template>
    <div class="about-block block">
        <div class="about-block__content content">
            <div class="about-block__grid">
                <img src="img/image-about.png" alt="" class="about-block__image" />
                <div class="about-block__text-content">
                    <h2 class="about-block__title underlined">О нас</h2>
                    <p class="about-block__text">
                        Больше года мы помогаем бизнесу получить детальную и структурированную
                        информацию (аналитику) по управленческому учету в маркетплейсе Wildberries
                    </p>
                    <p class="about-block__text">
                        За это время мы поняли какие метрики максимально важны бизнесу для роста и
                        собрали их в одном месте, для удобства анализа и принятия решения. Благодаря
                        нам партнёры Wildberries видят в режиме реального времени свои продажи,
                        заказы, прибыль, расход, остатки, АВС-анализ товаров и т.д.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/functions.scss';

    .about-block {
        &__title {
            color: var(--main);
        }

        &__image {
            margin-left: auto;
            margin-right: auto;
            max-width: to-rem(290);
            display: block;
            justify-self: center;

            @media all and (min-width: 1024px) {
                max-width: unset;
            }
        }

        &__text {
            margin-top: to-rem(24);
        }

        &__text-content {
            @media all and (min-width: 1024px) {
                align-self: center;
            }
        }

        &__grid {
            display: grid;
            grid-template-columns: 1fr;

            @media all and (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: to-rem(50);
            }
        }
    }
</style>
