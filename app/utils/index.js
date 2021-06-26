const EmailRegex = /([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})/g

export const isValidEmailAddr = (email) => EmailRegex.test(email)
