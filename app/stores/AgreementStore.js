import cloneDeep from 'lodash/cloneDeep'
import {agreements} from '../static/agreement.data'

const createAgreementStore = () => ({
    list: [],
    init() {
        const agreementWithChecked = agreements.map((agreement) => ({
            ...agreement,
            isChecked: false,
        }))
        this.list = cloneDeep(agreementWithChecked)
    },
    toggle(id) {
        const target = this.list.find((agreement) => agreement.id === id)
        const {isChecked: prevChecked} = target
        target.isChecked = !prevChecked
        this.list = cloneDeep(this.list)
    },
    clear() {
        this.list = []
    },
    get isAllChecked() {
        return this.list.every(({isChecked}) => isChecked)
    },
    toggleAll(isChecked) {
        const nextList = this.list.map((item) => ({
            ...item,
            isChecked,
        }))

        this.list = cloneDeep(nextList)
    },
    get isActive() {
        return this.list.every(
            ({isChecked, isRequired}) => !isRequired || isChecked,
        )
    },
})

export {createAgreementStore}
