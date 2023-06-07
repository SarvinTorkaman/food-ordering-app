import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-97bd2-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      let loadedMeals = [];
      for (const item in data) {
        loadedMeals.push({
          id: item,
          description: data[item].description,
          name: data[item].name,
          price: data[item].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
      
    });
  }, []);

  // let content = "";
  if (isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        {" "}
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.mealHasError}>
        {" "}
        <p>{error}</p>
      </section>
    );
  }

  const content = meals.map((meal) => {
    return (
      <ul>
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </ul>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};
export default AvailableMeals;
