<template>
    <div class="form-block block">
        <div class="form-block__content content">
            <h2 class="form-block__title underlined underlined--centered underlined--white">
                Сколько это стоит
            </h2>
            <p class="form-block__description">
                Цена зависит от объёма требуемых характеристик в аналитике
            </p>

            <form
                class="form-block__form card"
                action="POST"
                @submit.prevent="send"
                @keydown.enter.prevent
            >
                <h3 class="form-block__form-title">
                    Оставь заявку и получи <span>неделю использования</span> инструмента в подарок
                </h3>
                <component
                    v-for="(field, name, index) in fields"
                    v-bind="field.props"
                    v-model="field.value"
                    class="form-block__field"
                    :disabled="!ready"
                    :name="name"
                    :id="name"
                    :error="getError(name)"
                    :is="field.type"
                    :key="index"
                    @reset-error="resetErrorAndGlobal"
                />
                <ButtonItem class="form-block__submit" :disabled="!ready" type="submit" wide>
                    <template v-if="ready"> Отправить </template>
                    <template v-else-if="busy"> Отправка... </template>
                    <template v-else-if="done"> Отправлено </template>
                    <template v-else-if="error"> Ошибка при отправке </template>
                </ButtonItem>
                <div v-text="globalError" class="form-block__error"></div>
                <p class="form-block__agreement gray">
                    Отправляю заявку, вы даете согласие на обработку ваших персональных данных и
                    соглашаетесь с <a href="#"> политикой конфиденциальности </a>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    import Http from 'axios'
    import Vue from 'vue'

    import { ValidateMixin } from '../../common/mixins.js'

    import ButtonItem from '../../AppButton.vue'
    import FormSendedModal from './SendedModal.vue'

    // TODO: Дописать проверку поля
    const isField = (/* item */) => true

    export default {
        mixins: [ValidateMixin],
        components: {
            ButtonItem
        },
        props: {
            apiUrl: {
                type: String,
                required: true
            },
            fields: {
                type: Object,
                required: true,
                validator: (value) => !Object.values(value).some((item) => !isField(item))
            },
            formRules: {
                type: Object,
                default: () => ({})
            },
            formErrorMessages: {
                type: Object,
                default: () => ({})
            }
        },
        computed: {
            formData() {
                const entries = Object.entries(this.fields)
                return entries.reduce((fields, [name, field]) => {
                    fields[name] = field.transform
                        ? field.transform(field.value)
                        : String(field.value).trim().replace(/ +/g, ' ')

                    return fields
                }, new Object())
            },
            globalError() {
                return this.getError('global')
            },
            ready() {
                return this.status === 'ready'
            },
            busy() {
                return this.status === 'busy'
            },
            error() {
                return this.status === 'error'
            },
            done() {
                return this.status === 'done'
            }
        },
        data: () => ({
            status: 'ready'
        }),
        methods: {
            async send() {
                if (!this.ready) {
                    return undefined
                }

                this.status = 'busy'
                this.validate(this.formData)

                if (this.errors.length) {
                    this.status = 'ready'
                    this.setError('global', 'Проверьте введенные данные')

                    return undefined
                }

                try {
                    const { data } = await Http.post(this.apiUrl, this.formData, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })

                    if (data.result !== 'ok') {
                        throw new Error(data.error)
                    }

                    this.status = 'done'
                    this.openModal()
                } catch (error) {
                    console.warn(error.toString())
                    this.status = 'error'
                    this.setError(
                        'global',
                        'При отправке произошла ошибка. Перезагрузите страницу и попробуйте еще раз.'
                    )
                }
            },
            syncRules() {
                this.rules = Object.assign(this.rules, this.formRules)
                this.errorMessages = Object.assign(this.errorMessages, this.formErrorMessages)
            },
            openModal() {
                Vue.extend()
                const FormSendedModalClass = Vue.extend(FormSendedModal)
                const popup = new FormSendedModalClass()

                popup.$mount()
            }
        },
        watch: {
            formRules() {
                this.syncRules()
            },
            formErrorMessages() {
                this.syncRules()
            }
        },
        mounted() {
            this.syncRules()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/functions.scss';

    .form-block {
        color: white;
        background: var(--main);

        &__title {
            text-align: center;
        }

        &__description {
            margin-top: to-rem(16);
            margin-left: auto;
            margin-right: auto;
            max-width: to-rem(526);
            text-align: center;
        }

        &__form {
            color: #131313;
            padding: to-rem(24) to-rem(20);
            margin-top: to-rem(30);

            @media all and (min-width: 768px) {
                max-width: to-rem(570);
                margin-left: auto;
                margin-right: auto;
                padding: to-rem(60) to-rem(40);
            }
        }

        &__form-title {
            text-align: center;
        }

        &__field {
            margin-top: to-rem(24);
        }

        &__submit {
            margin-top: to-rem(24);
        }

        &__error {
            margin-top: to-rem(15);
            color: red;
            text-align: center;
        }

        &__agreement {
            margin-top: to-rem(20);
            text-align: center;
            font-size: to-rem(14);

            @media all and (min-width: 768px) {
                margin-top: to-rem(30);
            }
        }
    }
</style>
