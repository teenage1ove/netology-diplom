import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useStore } from '../../store/root-store-context'
import './Seance.scss'
import { SeanceTime } from './SeanceTime'

export const Seance = observer(({ filmId }: { filmId: number }) => {
	const {
		seanceStore: { loading, error, getSeances, getHallsWithSeancesForFilm },
	} = useStore()

	const hallsWithSeances = getHallsWithSeancesForFilm(filmId)

	console.log(hallsWithSeances)

	useEffect(() => {
		getSeances()
	}, [getSeances])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className='seance'>
			<>
				{hallsWithSeances &&
					hallsWithSeances.map(hall => {
						console.log(hall)

						return (
							<div className='seance__hall' key={hall.id}>
								<h3 className='seance__hall-name'>{hall.hall_name}</h3>

								<SeanceTime times={hall.seances} />
							</div>
						)
					})}
			</>
		</div>
	)
})
