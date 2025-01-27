import { Seance } from '../../interfaces/api.interfaces'
import './Seance.scss'

export const SeanceTime = ({ times }: { times: Seance[] }) => {
	return (
		<div className='seance__times'>
			{times.map(time => {
				console.log(time.seance_time)
				return (
					<p className='seance__times-item' key={time.id}>
						{time.seance_time}
					</p>
				)
			})}
		</div>
	)
}
