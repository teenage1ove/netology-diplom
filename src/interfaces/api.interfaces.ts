export interface RootInterface {
	success: boolean
	result: ResultResponse
}

export interface ResultResponse {
	halls: Hall[]
	films: Film[]
	seances: Seance[]
}

export interface Seance {
	id: number
	seance_hallid: number
	seance_filmid: number
	seance_time: string
}

export interface Film {
	id: number
	film_name: string
	film_duration: number
	film_description: string
	film_origin: string
	film_poster: string
}

export interface Hall {
	id: number
	hall_name: string
	hall_rows: number
	hall_places: number
	hall_config: string[][]
	hall_price_standart: number
	hall_price_vip: number
	hall_open: number
}