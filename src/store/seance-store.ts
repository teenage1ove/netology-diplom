import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { Hall, RootInterface, Seance } from '../interfaces/api.interfaces'

interface HallWithSeances extends Hall {
	seances: Seance[]
}

class SeanceStore {
	hallsWithSeances: HallWithSeances[] = []
	loading = false
	error: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	getSeances = async () => {
		this.loading = true
		this.error = null
		try {
			const response = await axios.get<RootInterface>(
				'https://shfe-diplom.neto-server.ru/alldata'
			)
			if (!response.data.success) {
				throw new Error(
					`API request failed: ${
						response.status.toLocaleString() || 'Unknown error'
					}`
				)
			}
			const curSeances = response.data.result.seances
			const curHalls = response.data.result.halls

			runInAction(() => {
				const cur = curHalls.map(hall => {
					return {
						...hall,
						seances: curSeances.filter(
							seance => seance.seance_hallid === hall.id
						),
					}
				})

				this.hallsWithSeances = cur
			})
		} catch (error: unknown) {
			if (error instanceof Error) {
				this.error = error.message
			}
			console.error('Error fetching seances:', error)
		} finally {
			runInAction(() => {
				this.loading = false
			})
		}
	}

	getHallsWithSeancesForFilm = (filmId: number) => {
		return this.hallsWithSeances
			.map(hall => ({
				...hall,
				seances: hall.seances.filter(seance => seance.seance_filmid === filmId),
			}))
			.filter(hall => hall.seances.length > 0)
	}
}

export default new SeanceStore()
