<template>
    <div class="for-who-item card">
        <img :src="image" class="for-who-item__image" />
        <h3 class="for-who-item__title" v-html="title" />
        <p class="for-who-item__text" v-html="text" />
    </div>
</template>

<script>
    export default {
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .for-who-item {
        color: #131313;
        padding: to-rem(24) to-rem(20);

        @media all and (min-width: 768px) {
            padding: to-rem(30);
        }

        &__title {
            margin-top: to-rem(16);
        }

        &__text {
            margin-top: to-rem(8);
        }
    }
</style>
