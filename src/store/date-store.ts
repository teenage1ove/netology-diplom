import { makeAutoObservable } from 'mobx'

class DateStore {
	filmDate: Date | null = null
	constructor() {
		makeAutoObservable(this)
	}

	setFilmDate = (date: Date) => {
		this.filmDate = date
	}
}

export default new DateStore()
