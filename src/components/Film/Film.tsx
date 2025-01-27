import { Film as IFilm } from '../../interfaces/api.interfaces'
import { Seance } from '../Seance/Seance'
import './Film.scss'
export const Film = ({ curFilm }: { curFilm: IFilm }) => {
	return (
		<div className='film'>
			<div className='film__container'>
				<div className='film__poster-container'>
					<img
						src={curFilm.film_poster}
						alt={curFilm.film_name}
						className='film__poster'
					/>
				</div>
				<div className='film__info'>
					<p className='film__info-title'>{curFilm.film_name}</p>
					<p className='film__info-description'>{curFilm.film_description}</p>
					<p className='film__info-sub'>
						{curFilm.film_duration} минут {curFilm.film_origin}
					</p>
				</div>
			</div>

			<Seance filmId={curFilm.id} />
		</div>
	)
}
