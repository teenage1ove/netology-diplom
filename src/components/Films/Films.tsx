import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStore } from '../../store/root-store-context'
import { Film } from '../Film/Film'
import './Films.scss'

export const Films = observer(function ({ date }: { date: Date }) {
	const {
		filmsStore: { films, loading, error, getFilms },
	} = useStore()

	useEffect(() => {
		getFilms()
	}, [getFilms, date])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className='films'>
			{films &&
				films.map(film => {
					return <Film key={film.id} curFilm={film} />
				})}
		</div>
	)
})
