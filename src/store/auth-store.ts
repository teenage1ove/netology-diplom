import { makeAutoObservable } from 'mobx'

interface User {
    login: string
    password: string
}

class AuthStore {
	user: User | null = null
    // isAuth = localStorage.getItem('user') !== null
    isAuth = false
	constructor() {
		makeAutoObservable(this)
	}

	setUser = async(user: User) => {
		localStorage.setItem('user', JSON.stringify(user))
		this.user = user
        this.isAuth = true
	}

	setLogout = async() => {
		localStorage.removeItem('user')
		this.user = null
        this.isAuth = false
	}
    
}

export default new AuthStore()