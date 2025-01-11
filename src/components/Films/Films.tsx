import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStore } from '../../store/root-store-context'
import './Films.scss'
export const Films = observer(function ({date}: {date: Date }) {
	const {
		filmsStore: { films, getFilms, loading, error },
	} = useStore()

	useEffect(() => {
		getFilms(date)
	}, [getFilms, date])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div>
			{films && films.map(film => <div key={film.id}>{film.film_name}</div>)}
		</div>
	)
})
