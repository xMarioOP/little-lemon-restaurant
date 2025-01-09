import { Routes, Route } from 'react-router-dom';
import HomePage from '../page/HomePage';
import BookingPage from '../page/BookingPage';
import Confirmed from '../page/Confirmed';
import React, { useReducer} from "react";
import { useNavigate } from "react-router-dom";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    if (action.type === "update") {
      return fetchAPI(action.payload); // Global function
    }
    return state;
  };

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [],initializeTimes);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />} />
            <Route path="/confirmed" element={<Confirmed/>} />
        </Routes>
    );
}

export default Main;