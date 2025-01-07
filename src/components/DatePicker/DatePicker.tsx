import { useEffect, useState } from 'react';
import './DatePicker.scss'; 

interface MovieDate {
    dayOfWeek: string;
    day: number;
    formattedDate: string; // Тип для форматированной даты, например, "2024-08-05"
  }

function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    console.log(currentDate)
    const generateDates = () => {
        const days = [];
        for (let i = 0; i < 7; i++) {
          const date = new Date();
            date.setDate(startDate.getDate() + i);
            const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'short' });
            const day = date.getDate();
            const formattedDate = date.toISOString().split('T')[0];
            days.push({ dayOfWeek, day, date, formattedDate });
        }
        return days;
    };

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    }

    const handlePrevClick = () => {
        setStartDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(prevDate.getDate() - 7);
            return newDate
        });
    };

  const handleNextClick = () => {
        setStartDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(prevDate.getDate() + 7);
            return newDate
        });
    };

  const isDateSelected = (date: MovieDate) => {
      return date.formattedDate === selectedDate.toISOString().split('T')[0]
  };

  const isToday = (date: MovieDate) => {
    const today = new Date();
    return date.formattedDate === today.toISOString().split('T')[0];
};

  return (
    <div className="date-picker">
      <div className="date-navigation">
      { currentDate < startDate && <button onClick={handlePrevClick}>&lt;</button>}
        {generateDates().map((day) => (
          <div
            key={day.formattedDate}
            className={`date-item ${isDateSelected(day) ? 'selected' : ''}`}
            onClick={() => handleDateClick(day.date)}
          >
            <div>{
                isToday(day) ? (
                    <span className="today">Сегодня</span>
                ) : ""}
                
            </div>
            <div className="day-of-week">{day.dayOfWeek}</div>
            <div className="day">{day.day}</div>
          </div>
        ))}
         <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
}

export default DatePicker;