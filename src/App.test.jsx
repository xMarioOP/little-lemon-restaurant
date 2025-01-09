import React from "react";
import { render, screen } from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
    render(
        <BookingForm
            availableTimes={[]}
            updateTimes={() => {}}
            submitForm={() => {}}
        />
    );
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

describe("initializeTimes", () => {
    test("Returns available times for the current date", () => {
        const availableTimes = initializeTimes();
        expect(availableTimes).toBeInstanceOf(Array);
        expect(availableTimes.length).toBeGreaterThan(0);
    });
});

describe("updateTimes", () => {
  test("Returns available times for the provided date", () => {
      const initialState = [];
      const action = { type: "update", payload: new Date() };

      const updatedTimes = updateTimes(initialState, action);

      expect(updatedTimes).toBeInstanceOf(Array);
      expect(updatedTimes.length).toBeGreaterThan(0); 
  });

  test("Returns the same state when action type is not 'update'", () => {
      const initialState = ["17:00", "18:00"];
      const action = { type: "unknown", payload: new Date() };

      const updatedTimes = updateTimes(initialState, action);

      expect(updatedTimes).toEqual(initialState);
  });
});

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

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === "update") {
    return fetchAPI(action.payload);
  }
  return state;
};