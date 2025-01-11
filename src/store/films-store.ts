import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { Film, RootInterface } from '../interfaces/api.interfaces'

class FilmsStore {
	films: Film[] | null = null
	loading = false
	error: string | null = null
	constructor() {
		makeAutoObservable(this)
	}

	getFilms = async (date: Date) => {
		const formatedDate = new Date(date).toISOString().slice(0, 10)
		this.loading = true
		this.error = null
		console.log(formatedDate)
		try {
			const response = await axios.get<RootInterface>(
				'https://shfe-diplom.neto-server.ru/alldata?date=' + formatedDate
			)
			if (response.data && response.data.result.films) {
				runInAction(() => {
					this.films = response.data.result.films
				})
			} else {
				throw new Error('Invalid data format from API')
			}
		} catch (err: unknown) {
			let errmes = 'Failed to fetch films'

			if (err instanceof Error) {
				errmes = err.message
			}

			runInAction(() => {
				this.error = errmes
			})
		} finally {
			runInAction(() => {
				this.loading = false
			})
		}
	}
}

export default new FilmsStore()
