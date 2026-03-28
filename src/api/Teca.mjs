import api from "./api.mjs"

export async function fetchTecas() {
    const res = await api.get(`/tecas`)
    return res.data
}
export async function fetchPopulatedTecas() {
    const res = await api.get(`/tecas/pop`)
    return res.data
}

export async function fetchTecaById(id) {
    const res = await api.get(`/tecas/id/${id}`)
    return res.data
}

export async function fetchPopulatedTecaById(id) {
    const res = await api.get(`/tecas/id/${id}/pop`)
    return res.data
}

export async function fetchClassTecas(classId) {
    const res = await api.get(`/tecas/class/${classId}`)
    return res.data
}
