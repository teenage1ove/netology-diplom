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

	getFilms = async () => {
		this.loading = true
		this.error = null

		try {
			const response = await axios.get<RootInterface>(
				'https://shfe-diplom.neto-server.ru/alldata'
			)

			if (response.data.result) {
				const { films, halls, seances } = response.data.result

				const hallsWithSeances = halls.map(hall => ({
					...hall,
					seances: seances.filter(seance => seance.seance_hallid === hall.id),
				}))

				runInAction(() => {
					this.films = films.filter(film => {
						return hallsWithSeances.some(hall =>
							hall.seances.some(seance => seance.seance_filmid === film.id)
						)
					})
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
