<template>
    <AppSpoiler class="faq-item card">
        <template #header="{ isOpen }">
            <div class="faq-item__head">
                <h3 class="faq-item__question" v-html="question" />
                <ArrowIcon
                    :class="{
                        'faq-item__arrow': true,
                        'faq-item__arrow--open': isOpen
                    }"
                />
            </div>
        </template>
        <template #content>
            <p class="faq-item__answer" v-html="answer" />
        </template>
    </AppSpoiler>
</template>

<script>
    import ArrowIcon from '../../../assets/icons/arrow.svg'

    import AppSpoiler from '../../AppSpoiler.vue'

    export default {
        components: {
            AppSpoiler,
            ArrowIcon
        },
        props: {
            question: {
                type: String,
                default: ''
            },
            answer: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .faq-item {
        padding: to-rem(20);

        &__head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        &__question {
            font-size: to-rem(16);
        }

        &__answer {
            margin-top: to-rem(10);
        }

        &__arrow {
            position: relative;
            transition: transform 0.3s ease 0s;
            transform: rotate(0deg);
            flex-shrink: 0;
            fill: #131313;

            &--open {
                transform: rotate(180deg);
                fill: var(--main);
            }
        }

        &__answer {
            margin-top: to-rem(10);
        }
    }
</style>
