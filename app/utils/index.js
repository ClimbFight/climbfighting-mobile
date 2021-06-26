const EmailRegex = /([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})/gi

export const isValidEmailAddr = (email) => {
    const matches = email.match(EmailRegex)
    if (!matches) {
        return false
    }

    return matches[0] === email
}
