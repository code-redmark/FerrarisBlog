import api from './api.mjs'

export async function postLogin(event) {

    event.preventDefault()

    const form = new FormData(event.target)

    form.get("password")

    return await api.postForm('/auth/login', form)
}