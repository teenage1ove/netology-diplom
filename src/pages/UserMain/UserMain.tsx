import DatePicker from '../../components/DatePicker/DatePicker'
import './UserMain.scss'

export function UserMain() {
	return (
		<div className='user'>
			<div className='user__header'>
				<h1>
					Идём<span>в</span>кино
				</h1>
				<a href='/' className='user__login'>
					Войти
				</a>
			</div>
			<div className='user__datepicker'>
                <DatePicker />
            </div>
			<div className='user__films'>
				<div className='film'>
					<div className='film__info'>
						<img src='/' alt='film' className='film__info-img' />
						<div className='film__info-text'>
							<h3 className='film__info-title'>Название</h3>
							<p className='film__info-description'>Описание</p>
							<p className='film__info-duration'>Длительность + страна</p>
						</div>
					</div>

					<div className='film__halls'>
						<div className='film__hall'>
							<p className='film__hall-name'>Зал 1</p>
							<div className='film__hall-times'>
								<p className='film__hall-time'>10:00</p>
								<p className='film__hall-time'>12:00</p>
								<p className='film__hall-time'>13:00</p>
								<p className='film__hall-time'>14:00</p>
							</div>
						</div>

						<div className='film__hall'>
							<p className='film__hall-name'>Зал 2</p>
							<div className='film__hall-times'>
								<p className='film__hall-time'>10:00</p>
								<p className='film__hall-time'>12:00</p>
								<p className='film__hall-time'>13:00</p>
								<p className='film__hall-time'>14:00</p>
								<p className='film__hall-time'>16:00</p>
								<p className='film__hall-time'>19:00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
