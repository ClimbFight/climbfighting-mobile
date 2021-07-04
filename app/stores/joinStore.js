import {isValidEmailAddr} from '../utils'

export const EMAIL_STATUS = {
    NORMAL: 'NORMAL',
    VALID: 'VALID',
    INVALID: 'INVALID',
}

export const NAME_STATUS = {
    NORMAL: 'NORMAL',
    VALID: 'VALID',
    EXIST: 'EXIST',
    INVALID: 'INVALID',
}

const NameRegex = /[&|*|^|%|$]+/gi

const createJoinStore = () => ({
    email: '',
    setEmail(email) {
        this.email = email
    },
    get status() {
        if (this.email.length === 0) {
            return EMAIL_STATUS.NORMAL
        }
        if (!isValidEmailAddr(this.email)) {
            return EMAIL_STATUS.INVALID
        }
        if (isValidEmailAddr(this.email)) {
            return EMAIL_STATUS.VALID
        }
        return EMAIL_STATUS.NORMAL
    },
    get isValid() {
        return this.status === EMAIL_STATUS.VALID
    },

    name: '',
    setName(name) {
        this.name = name
    },
    get nameStatus() {
        if (this.name.length === 0) {
            return NAME_STATUS.NORMAL
        }
        if (NameRegex.test(this.name)) {
            return NAME_STATUS.INVALID
        }
        if (!NameRegex.test(this.name)) {
            return NAME_STATUS.VALID
        }
        /** [TODO] 이미존재하는 이름인지 검사 필요 */
        return NAME_STATUS.NORMAL
    },
    get isNameValid() {
        return this.nameStatus === EMAIL_STATUS.VALID
    },
    get isAlreadyExist() {
        return this.nameStatus === NAME_STATUS.EXIST
    },
    get isNameInvalid() {
        return this.nameStatus === NAME_STATUS.INVALID
    },
})

export {createJoinStore}
