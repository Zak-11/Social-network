import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ca7868e1-6346-4bce-8094-16176a8ce55a"
    }
})

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}



export const profileAPI = {

  getProfile( userId : string ){
    return instance.get(`profile/` + userId)
        .then(response => {
            return response.data

        })
}
}
