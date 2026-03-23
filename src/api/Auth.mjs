import api from './api.mjs'

export async function postLogin(event) {

    const form = new FormData(event.target)

    form.get("password")

    return await api.postForm(form)
}