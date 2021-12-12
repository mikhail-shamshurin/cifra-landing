const ComponentErrorMixin = {
    props: {
        error: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        resetError() {
            return this.$emit('reset-error', this.name)
        }
    }
}

const ValidateMixin = {
    data: () => ({
        errors: [],
        errorMessages: {
            required: 'Это обязательное поле',
            defaultError: 'Это поле заполнено некорректно'
        },
        rules: {},
        required: []
    }),
    methods: {
        resetErrorAndGlobal(name) {
            this.resetError(name)
            this.resetError('global')
        },
        setError(name, message) {
            const errorsMap = new Map(this.errors)

            errorsMap.set(name, message)
            this.errors = Array.from(errorsMap.entries())
        },
        getError(name) {
            const errorsMap = new Map(this.errors)

            return errorsMap.get(name)
        },
        resetError(name) {
            const errorsMap = new Map(this.errors)

            errorsMap.delete(name)
            this.errors = Array.from(errorsMap.entries())
        },
        resetErrors() {
            const errorsMap = new Map(this.errors)

            errorsMap.clear()
            this.errors = Array.from(errorsMap.entries())
        },
        validate(data) {
            const errorsMap = new Map(this.errors)
            const hasRequired = this.required.length

            this.resetErrors()

            Object.entries(data).forEach(([name, value]) => {
                const isRequired = !hasRequired || (hasRequired && this.required.includes(name))

                if (isRequired && !value) {
                    errorsMap.set(name, this.errorMessages.required)
                    return undefined
                }

                if (!value && !isRequired) {
                    return undefined
                }

                const isValid = value.match(this.rules[name]) !== null

                if (!isValid) {
                    errorsMap.set(name, this.errorMessages[name] || this.errorMessages.defaultError)
                }
            })

            this.errors = Array.from(errorsMap.entries())
        },
        hasErrors() {
            return Boolean(this.errors.length)
        }
    }
}

export { ComponentErrorMixin, ValidateMixin }
