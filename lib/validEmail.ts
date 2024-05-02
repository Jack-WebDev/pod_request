import validator from "validator"

export const isEmailValid = (email: string) => {
    return validator.isEmail(email)
}
