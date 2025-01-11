import { observer } from 'mobx-react'
import DatePicker from '../../components/DatePicker/DatePicker'
import { Films } from '../../components/Films/Films'
import { useStore } from '../../store/root-store-context'
import './UserMain.scss'

export const UserMain = observer(function () {
	const {
		dateStore: { filmDate }
	} = useStore()

	return (
		<div className='user'>
			<div className='user__header'>
				<h1 className='user__title'>
					Идём<span className='user__title-accent'>в</span>кино
				</h1>
				<a href='/auth' className='user__login-button'>
					Войти
				</a>
			</div>

			<DatePicker />
			{/* сделал стор, осталось вызывать фильмы по дате */}
			{filmDate && <Films date={filmDate} />}
		</div>
	)
})
