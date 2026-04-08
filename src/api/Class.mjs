import api from './api.mjs'

export async function fetchClasses() {
    const res = await api.get(`/classes`)
    return res.data
}
export async function fetchClassById(id) {
    const res = await api.get(`/classes/${id}`)
    return res.data
}

export async function fetchClassTecas(id) {
    const res = await api.get(`/classes/${id}/tecas`)
    return res.data
}