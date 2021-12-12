<template>
    <AppModal class="form-sended-modal">
        <template slot-scope="{ close }">
            <div class="form-sended-modal__content">
                <img src="../../../assets/img/image-ok.png" class="form-sended-modal__image" />
                <h3 class="form-sended-modal__title">
                    Ваша заявка успешно отправлена! Мы позвоним вам в ближайшее время
                </h3>
                <AppButton @click="close" class="form-sended-modal__button" wide stroke>
                    Спасибо, буду ждать
                </AppButton>
            </div>
        </template>
    </AppModal>
</template>

<script>
    import AppModal from '../../AppModal.vue'
    import AppButton from '../../AppButton.vue'

    export default {
        components: {
            AppModal,
            AppButton
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .form-sended-modal {
        &__content {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        &__title {
            margin-top: to-rem(20);
            text-align: center;

            @media all and (min-width: 768px) {
                margin-top: to-rem(39);
            }
        }

        &__button {
            margin-top: to-rem(16);

            @media all and (min-width: 768px) {
                margin-top: to-rem(28);
            }
        }
    }
</style>
