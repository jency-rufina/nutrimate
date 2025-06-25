import React from "react";
import { useNavigate } from "react-router-dom";

const generalFitnessPlan = [
  {
    week: 1,
    meals: [
      { day: "Monday", plan: "Oatmeal with fruit (breakfast), Grilled chicken salad (lunch), Brown rice & veggies (dinner)" },
      { day: "Tuesday", plan: "Greek yogurt & nuts, Quinoa bowl with beans, Baked fish & steamed broccoli" },
      { day: "Wednesday", plan: "Smoothie (spinach, banana, protein), Lentil soup & salad, Grilled turkey & sweet potato" },
      { day: "Thursday", plan: "Egg omelette & toast, Brown rice & chickpeas, Grilled shrimp & mixed greens" },
      { day: "Friday", plan: "Cottage cheese & fruit, Chicken wrap & veggies, Baked salmon & green beans" },
      { day: "Saturday", plan: "Avocado toast, Veggie stir fry & tofu, Grilled chicken & salad" },
      { day: "Sunday", plan: "Protein pancakes, Quinoa salad, Baked fish & roasted veggies" },
    ],
  },
  {
    week: 2,
    meals: [
      { day: "Monday", plan: "Oats & banana, Grilled fish & veggies, Lentil curry & brown rice" },
      { day: "Tuesday", plan: "Boiled eggs & fruit, Chicken salad, Tofu stir fry & greens" },
      { day: "Wednesday", plan: "Smoothie bowl, Turkey sandwich & salad, Baked salmon & broccoli" },
      { day: "Thursday", plan: "Greek yogurt & seeds, Quinoa & beans, Grilled shrimp & veggies" },
      { day: "Friday", plan: "Egg scramble, Veggie wrap, Grilled chicken & asparagus" },
      { day: "Saturday", plan: "Cottage cheese & berries, Lentil soup, Baked fish & salad" },
      { day: "Sunday", plan: "Avocado toast, Chicken bowl & veggies, Tofu curry & brown rice" },
    ],
  },
  {
    week: 3,
    meals: [
      { day: "Monday", plan: "Oats & nuts, Grilled turkey & salad, Veggie stir fry & tofu" },
      { day: "Tuesday", plan: "Protein smoothie, Chicken wrap & greens, Baked salmon & beans" },
      { day: "Wednesday", plan: "Egg omelette, Quinoa salad, Grilled shrimp & veggies" },
      { day: "Thursday", plan: "Greek yogurt & fruit, Lentil curry & rice, Grilled chicken & broccoli" },
      { day: "Friday", plan: "Cottage cheese & seeds, Veggie bowl, Baked fish & salad" },
      { day: "Saturday", plan: "Avocado toast, Chicken salad, Tofu stir fry & greens" },
      { day: "Sunday", plan: "Protein pancakes, Turkey sandwich & salad, Baked salmon & veggies" },
    ],
  },
  {
    week: 4,
    meals: [
      { day: "Monday", plan: "Oats & berries, Grilled fish & salad, Lentil soup & veggies" },
      { day: "Tuesday", plan: "Boiled eggs & fruit, Chicken bowl & greens, Tofu curry & rice" },
      { day: "Wednesday", plan: "Smoothie bowl, Veggie wrap, Grilled shrimp & broccoli" },
      { day: "Thursday", plan: "Greek yogurt & nuts, Quinoa salad, Grilled chicken & beans" },
      { day: "Friday", plan: "Egg scramble, Lentil curry & salad, Baked fish & veggies" },
      { day: "Saturday", plan: "Cottage cheese & fruit, Chicken salad, Tofu stir fry & greens" },
      { day: "Sunday", plan: "Avocado toast, Turkey sandwich & salad, Baked salmon & broccoli" },
    ],
  },
];

function GeneralfitnessPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: "18px",
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(161,196,253,0.18)",
        }}
      >
        <h1 style={{ color: "#3a7bd5", textAlign: "center", marginBottom: "1.5rem" }}>
          1-Month General Fitness Meal Plan
        </h1>
        {generalFitnessPlan.map((week) => (
          <div key={week.week} style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#4b6cb7" }}>Week {week.week}</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      borderBottom: "2px solid #4b6cb7",
                      padding: "0.5rem",
                      background: "#f0f4ff",
                      textAlign: "left",
                    }}
                  >
                    Day
                  </th>
                  <th
                    style={{
                      borderBottom: "2px solid #4b6cb7",
                      padding: "0.5rem",
                      background: "#f0f4ff",
                      textAlign: "left",
                    }}
                  >
                    Meal Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {week.meals.map((meal, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        borderBottom: "1px solid #eee",
                        padding: "0.5rem",
                      }}
                    >
                      {meal.day}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #eee",
                        padding: "0.5rem",
                      }}
                    >
                      {meal.plan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div style={{ textAlign: "center", color: "#3a7bd5", marginTop: "2rem" }}>
          <b>Tip:</b> Stay consistent, hydrate well, and enjoy a variety of foods!
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "0.8rem 2.2rem",
              background: "linear-gradient(90deg,rgb(71, 46, 196) 0%, #00d2ff 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "0px",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(58,123,213,0.10)",
              transition: "background 0.3s, transform 0.2s",
            }}
          >
            ⬅️ Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneralfitnessPage;