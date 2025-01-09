import React, { useState } from "react";


export const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
    const today = new Date().toISOString().split("T")[0]; // Format today's date as YYYY-MM-DD

    const [formData, setFormData] = useState({
      date: today,
      time: "",
      guests: 1,
      occasion: "Birthday",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (id === "date") {
        updateTimes(new Date(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
    };

    return (
        <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
        >
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
            id="time"
            value={formData.time}
            onChange={handleChange}
        >
            {availableTimes.map((time) => (
            <option key={time} value={time}>
                {time}
            </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
        >
            <option>Dinner</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className="button form-button" type="submit" value="Make Your Reservation" />
        </form>
    );
};