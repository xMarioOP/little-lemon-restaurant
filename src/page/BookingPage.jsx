import { BookingForm } from "../components/BookingForm";


const BookingPage = ({ availableTimes, dispatch, submitForm }) => {

  return (
    <div className="form-container">
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={(date) => dispatch({ type: "update", payload: date })}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;