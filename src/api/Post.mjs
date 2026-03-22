export function fetchPosts() {
    return fetch(`${import.meta.env.VITE_SERVER}/posts`)
        .then(res => res.json());
}
export function fetchPopulatedPosts() {
    return fetch(`${import.meta.env.VITE_SERVER}/posts/pop`)
        .then(res => res.json());
}

export function fetchPostById(id) {
    return fetch(`${import.meta.env.VITE_SERVER}/posts/id/${id}`)
        .then(res => res.json());
}
export function fetchPopulatedPostById(id) {
    return fetch(`${import.meta.env.VITE_SERVER}/posts/id/${id}/pop`)
        .then(res => res.json());
}

export function fetchClassPosts(classId) {
    return fetch(`${import.meta.env.VITE_SERVER}/posts/class/${classId}`)
        .then(res => res.json());
}