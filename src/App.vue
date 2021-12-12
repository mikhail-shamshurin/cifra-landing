<template>
    <div class="app">
        <HeaderBlock class="app__header" :menuItems="menuItems" :scrolledSize="20" />
        <main class="app__content">
            <HeroBlock id="hero" />
            <AbilitiesBlock :abilities="abilities" id="abilities" />
            <ForWhoBlock :cards="forWhoBlockCards" id="for-who" />
            <AboutBlock id="about" />
            <FormBlock id="form" v-bind="form" />
            <!-- <GetStartedBlock id="get-started" /> -->
            <FAQBlock id="faq" :questions="questions" />
            <GetHelpBlock id="get-help"/>
        </main>
        <FooterBlock />
    </div>
</template>

<script>
    import HeaderBlock from './components/blocks/HeaderBlock.vue'
    import HeroBlock from './components/blocks/HeroBlock.vue'
    import AbilitiesBlock from './components/blocks/AbilitiesBlock/index.vue'
    import ForWhoBlock from './components/blocks/ForWhoBlock/index.vue'
    import AboutBlock from './components/blocks/AboutBlock.vue'
    import FormBlock from './components/blocks/FormBlock/index.vue'
    // import GetStartedBlock from './components/blocks/GetStartedBlock.vue'
    import FAQBlock from './components/blocks/FAQBlock/index.vue'
    import FooterBlock from './components/blocks/FooterBlock.vue'
    import GetHelpBlock from './components/blocks/GetHelpBlock.vue'

    import AppInput from './components/AppInput.vue'

    export default {
        name: 'App',
        components: {
            HeaderBlock,
            HeroBlock,
            AbilitiesBlock,
            ForWhoBlock,
            AboutBlock,
            FormBlock,
            // GetStartedBlock,
            FAQBlock,
            GetHelpBlock,
            FooterBlock
        },
        data: () => ({
            menuItems: [
                {
                    caption: 'Возможности',
                    href: '#abilities'
                },
                {
                    caption: 'Для кого',
                    href: '#for-who'
                },
                {
                    caption: 'О нас',
                    href: '#about'
                },
                {
                    caption: 'Цены',
                    href: '#form'
                },
                {
                    caption: 'Вопросы и ответы',
                    href: '#faq'
                }
            ],
            abilities: [
                {
                    image: 'img/screen-first.png',
                    title: 'Освободить время от рутины',
                    text: 'Все цифры по бизнесу в одном месте, благодаря чему вы ничего не забудете и не будете их искать по нескольким источникам',
                    link: '#form',
                    menuTitle: 'Освободить время'
                },
                {
                    image: 'img/analitycs.jpg',
                    title: 'Анализировать уникальную статистику',
                    text: 'Благодаря чему у вас есть возможность оперативно реагировать на малейшие изменения, чтобы всегда оставаться в ТОПе',
                    link: '#form',
                    menuTitle: 'Анализировать статистику'
                },
                {
                    image: 'img/screen-3.jpg',
                    title: 'Делать глубокую интеграцию с каталогом',
                    text: 'Точно расчитываете себестоимость каждой продажи с учетом комиссий и логистики Wildberries',
                    link: '#form',
                    menuTitle: 'Делать интеграцию'
                },
                {
                    image: 'img/sklad.png',
                    title: 'Учитывать склад Wildberries',
                    text: 'Точные даты окончания остатков на складе WB, рекомендации дат и количества заказов товара у поставщика на основе скорости продаж, изменение логистических статусов заказов в режиме реального времени',
                    link: '#form',
                    menuTitle: 'Учитывать склад'
                }
            ],
            forWhoBlockCards: [
                {
                    image: 'icons/wallet.svg',
                    title: 'Для начинающих партнёров Wildberries',
                    text: 'Наша система спроектирована так, что даже начинающим партнёрам Wildberries уже на старте видны точки роста продаж'
                },
                {
                    image: 'icons/safe.svg',
                    title: 'Опытным партнёрам Wildberries',
                    text: 'Масштабирование бизнеса становится прогнозируемым с нашей системой оцифровкии управленческого учета'
                }
            ],
            form: {
                formRules: {
                    fullname: /[А-Яа-яËё ]+/g,
                    phone: /^\+79[0-9]{9}$/g
                },
                formErrorMessages: {
                    required: 'Вы не заполнили это поле'
                },
                apiUrl: 'https://script.google.com/macros/s/AKfycbzAEbgU1zCwK7w3w6QXDKNZ5TLdhROmem1FuIIr_d-rFV9KZeqE-pBswCWslMpJYWdDHA/exec',
                fields: {
                    fullname: {
                        type: AppInput,
                        props: {
                            placeholder: 'Александр',
                            title: 'Ваше имя'
                        }
                    },
                    phone: {
                        type: AppInput,
                        props: {
                            placeholder: '+7 999 999 99 99',
                            title: 'Контактный номер телефона',
                            mask: {
                                mask: '+7 999 999 99 99',
                                placeholder: ' ',
                                greedy: false,
                                showMaskOnHover: false
                            }
                        },
                        transform: (value) => value.replace(/[^0-9+]/g, '')
                    }
                }
            },
            questions: [
                {
                    question:
                        'Зачем мне нужна аналитика, ведь Wildberries уже предоставляет статистику?',
                    answer: 'Действительно на wildberries есть статистика, но для работы с ней многие тратят очень много времени на её изучение и невозможность применения данных статистики на практике'
                },
                {
                    question: 'Что входит в базовую настройку аналитики',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis vel iure quae eligendi reprehenderit doloribus dolorum ullam numquam, porro, excepturi voluptatum maiores omnis vitae provident, nemo animi quam corrupti odit accusantium tempora nulla rerum consequatur? Voluptatibus aspernatur nemo accusantium.'
                },
                {
                    question: 'Можно ли интегрировать эту аналитику в мою CRM',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis vel iure quae eligendi reprehenderit doloribus dolorum ullam numquam, porro, excepturi voluptatum maiores omnis vitae provident, nemo animi quam corrupti odit accusantium tempora nulla rerum consequatur? Voluptatibus aspernatur nemo accusantium.'
                }
            ]
        }),
        beforeMount() {
            Object.entries(this.form.fields).forEach(([name]) => {
                if (this.form.fields[name].value) {
                    return undefined
                }

                this.$set(this.form.fields[name], 'value', '')
            })
        }
    }
</script>

<style lang="scss">
    @import './assets/fonts/Comfortaa/index.css';
    @import './assets/scss/global-styles.scss';

    .app {
        &__content {
            min-height: calc(100vh - to-rem(36));
            margin-top: to-rem(36);
            background: white;

            @media all and (min-width: 768px) {
                margin-top: 0;
            }
        }
    }
</style>
