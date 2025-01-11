import { useEffect, useState } from 'react'
import './DatePicker.scss'
import { observer } from 'mobx-react'
import { useStore } from '../../store/root-store-context'

interface MovieDate {
	dayOfWeek: string
	day: number
	formattedDate: string // Тип для форматированной даты, например, "2024-08-05"
	date: Date
}

const DatePicker = observer(function() {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [startDate, setStartDate] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState(new Date())

	const {dateStore: {setFilmDate, filmDate}} = useStore()

	useEffect(() => {
		setFilmDate(selectedDate)
		console.log(filmDate)
	}, [setFilmDate, selectedDate, filmDate])

	useEffect(() => {
		setCurrentDate(new Date())
	}, [])

	function generateDates() {
		const days = []

		for (let i = 0; i < 7; i++) {
			const date = new Date(startDate)
			date.setDate(startDate.getDate() + i)
			const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'short' })
			const day = date.getDate()
			const formattedDate = date.toISOString().split('T')[0]
			days.push({ dayOfWeek, day, date, formattedDate })
		}

		return days
	}

	const dates = generateDates()

	const handleDateClick = (date: Date) => {
		setFilmDate(date)
		setSelectedDate(date)
	}

	const handlePrevClick = () => {
		setStartDate(prevDate => {
			const newDate = new Date(prevDate)
			newDate.setDate(prevDate.getDate() - 7)
			return newDate
		})
	}

	const handleNextClick = () => {
		setStartDate(prevDate => {
			const newDate = new Date(prevDate)
			newDate.setDate(prevDate.getDate() + 7)
			return newDate
		})
	}

	const isDateSelected = (date: MovieDate) => {
		return date.formattedDate === selectedDate.toISOString().split('T')[0]
	}

	const isToday = (date: MovieDate) => {
		const today = new Date()
		return (
			date.date.getDate() === today.getDate() &&
			date.date.getMonth() === today.getMonth() &&
			date.date.getFullYear() === today.getFullYear()
		)
	}

	return (
		<div className='datepicker'>
			{currentDate < startDate && (
				<button onClick={handlePrevClick} className='datepicker__button'>
					&lt;
				</button>
			)}

			{dates.map(day => (
				<div
					key={day.formattedDate}
					className={`datepicker__item ${
						isDateSelected(day) ? 'datepicker__item_selected' : ''
					}`}
					onClick={() => handleDateClick(day.date)}
				>
					<div className='datepicker__item-date'>
						{isToday(day) ? (
							<div>
								<p>Сегодня</p>
								<p>{day.dayOfWeek}, {day.day}</p>
							</div>
						) : (
							<div className='datepicker__item-day'>
								{day.dayOfWeek},<p>{day.day}</p>
							</div>
						)}
					</div>
				</div>
			))}

			<button onClick={handleNextClick} className='datepicker__button'>
				&gt;
			</button>
		</div>
	)
})

export default DatePicker
