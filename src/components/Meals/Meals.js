import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
// import Card from "../UI/Card/Card";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <main>
        {" "}
        <AvailableMeals />{" "}
      </main>
    </React.Fragment>
  );
};

export default Meals;
