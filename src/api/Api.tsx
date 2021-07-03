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
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    },

}




export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string){
        return instance.put('profile/status/' + userId)
    },
    updateStatus(status:string) {
        return instance.put('profile/status', {status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    },

    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`,{email, password,rememberMe})
    },

    logout () {
        return instance.delete(`auth/login`)
    }
}

