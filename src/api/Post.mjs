import api from './api.mjs'

export async function fetchPosts() {
    const res = await api.get(`/posts`)
    return res.data
}
export async function fetchPopulatedPosts() {
    const res = await api.get(`/posts/pop`)
    return res.data
}

export async function fetchPostById(id) {
    const res = await api.get(`/posts/id/${id}`)
    return res.data
}
export async function fetchPopulatedPostById(id) {
    const res = await api.get(`/posts/id/${id}/pop`)
    return res.data
}

export async function fetchClassPosts(classId) {
    const res = await api.get(`/posts/class/${classId}`)
    return res.data
}