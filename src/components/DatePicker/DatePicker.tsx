import { useEffect, useState } from 'react'
import './DatePicker.scss'

interface MovieDate {
	dayOfWeek: string
	day: number
	formattedDate: string // Тип для форматированной даты, например, "2024-08-05"
	date: Date
}

function DatePicker() {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [startDate, setStartDate] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState(new Date())

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
		console.log(date)
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
				<button onClick={handlePrevClick} className='datepicker__prev'>
					&lt;
				</button>
			)}
			<div className='datepicker__dates'>
				{dates.map(day => (
					<div
						key={day.formattedDate}
						className={`datepicker__item ${
							isDateSelected(day) ? 'datepicker__item-selected' : ''
						}`}
						onClick={() => handleDateClick(day.date)}
					>
						<div className='datepicker__today'>
							{isToday(day) ? 'Сегодня' : ''}
						</div>
						<div className='datepicker__dayofweek'>{day.dayOfWeek}</div>
						<div className='datepicker__day'>{day.day}</div>
					</div>
				))}
				<button onClick={handleNextClick} className='datepicker__next'>
					&gt;
				</button>
			</div>
		</div>
	)
}

export default DatePicker
