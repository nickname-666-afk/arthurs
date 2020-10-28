import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const Calendar = () => {
	const [selectedDayStart, setSelectedDayStart] = useState(null);
	const [selectedDayEnd, setSelectedDayEnd] = useState(null);
	return (
		<div className="datepickers">
			<DatePicker
				value={selectedDayStart}
				onChange={setSelectedDayStart}
				inputPlaceholder="Выберите число"
				shouldHighlightWeekends
			/>
			<DatePicker
				value={selectedDayEnd}
				onChange={setSelectedDayEnd}
				inputPlaceholder="Выберите число"
				shouldHighlightWeekends
			/>
		</div>
	);
};

export default Calendar;