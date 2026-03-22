export function fetchClasses() {
    return fetch(`${import.meta.env.VITE_SERVER}/classes`).then(res => res.json())
}

export function fetchClassById(id) {
    return fetch(`${import.meta.env.VITE_SERVER}/classes/${id}`).then(res => res.json())
}