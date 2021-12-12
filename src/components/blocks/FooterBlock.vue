<template>
    <footer class="footer-block block">
        <div class="footer-block__content content">
            <p class="footer-block__text">
                <a href="mailto:mail@mail.ru">mail@mail.ru</a><br />
                <br />
                <a href="#">Политика конфеденциальности</a><br />
                <span class="gray">МаркетЦифра © 2021. Все права защищены</span>
            </p>
        </div>
    </footer>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/functions.scss';

    .footer-block {
        color: white;
        background: #131313;
        padding: to-rem(40) 0;

        &__text {
            text-align: center;

            a {
                --background: #131313;
                --color: var(--main);
            }
        }
    }
</style>
