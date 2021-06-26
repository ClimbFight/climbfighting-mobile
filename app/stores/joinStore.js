import {isValidEmailAddr} from '../utils'

export const EMAIL_STATUS = {
    NORMAL: 'NORMAL',
    VALID: 'VALID',
    INVALID: 'INVALID',
}

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
})

export {createJoinStore}
