<template>
    <div class="faq-block block">
        <div class="faq-block__content content">
            <h2 class="faq-block__title underlined underlined--centered underlined--white">
                Вопросы и ответы
            </h2>
            <div class="faq-block__list" v-if="questions.length">
                <FAQItem
                    class="faq-block__item"
                    v-bind="question"
                    v-for="(question, index) of questions"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import FAQItem from './FAQItem.vue'

    // TODO: Доделать проверку
    const isQuestion = (/* item */) => true

    export default {
        components: {
            FAQItem
        },
        props: {
            questions: {
                type: Array,
                default: () => [],
                validator: (value) => !value.some((item) => !isQuestion(item))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .faq-block {
        background: var(--main);

        &__title {
            text-align: center;
            color: white;
        }

        &__list {
            margin-top: to-rem(30);
        }

        &__item {
            margin-top: to-rem(15);

            max-width: to-rem(570);
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
