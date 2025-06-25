import React from "react";
import { useNavigate } from "react-router-dom";

const muscleGainPlan = [
  {
    week: 1,
    meals: [
      "Breakfast: Scrambled eggs, whole grain toast, avocado, and a banana",
      "Snack: Greek yogurt with honey and granola",
      "Lunch: Grilled chicken breast, brown rice, and steamed broccoli",
      "Snack: Peanut butter sandwich",
      "Dinner: Baked salmon, sweet potato, and green beans",
    ],
  },
  {
    week: 2,
    meals: [
      "Breakfast: Oatmeal with protein powder, berries, and almonds",
      "Snack: Cottage cheese with pineapple",
      "Lunch: Turkey sandwich on whole wheat, spinach salad",
      "Snack: Protein shake and mixed nuts",
      "Dinner: Beef stir-fry with quinoa and mixed vegetables",
    ],
  },
  {
    week: 3,
    meals: [
      "Breakfast: Protein pancakes with maple syrup and strawberries",
      "Snack: Hard-boiled eggs and apple",
      "Lunch: Tuna salad wrap, carrot sticks",
      "Snack: Trail mix and milk",
      "Dinner: Grilled chicken, pasta, and roasted veggies",
    ],
  },
  {
    week: 4,
    meals: [
      "Breakfast: Smoothie with banana, oats, peanut butter, and protein powder",
      "Snack: Cheese cubes and grapes",
      "Lunch: Salmon bowl with brown rice and edamame",
      "Snack: Protein bar",
      "Dinner: Pork chops, mashed potatoes, and peas",
    ],
  },
];

function MuscleGainPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")', // Muscle gain/gym related background
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.13)",
          borderRadius: "18px",
          padding: "2.5rem 2rem",
          maxWidth: 500,
          width: "100%",
          boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80"
          alt="Muscle Gain"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "1.5rem",
            objectFit: "cover",
            maxHeight: "200px",
          }}
        />
        <h2
          style={{
            textAlign: "center",
            color: "#6c3483",
            marginBottom: "1.5rem",
          }}
        >
          1-Month Muscle Gain Diet Plan
        </h2>
        {muscleGainPlan.map((week) => (
          <div key={week.week} style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#af7ac5" }}>Week {week.week}</h4>
            <ul>
              {week.meals.map((meal, idx) => (
                <li key={idx} style={{ marginBottom: "0.4rem" }}>
                  {meal}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "linear-gradient(90deg, #6c3483 0%, #d2b4de 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "0px",
            fontSize: "1.1rem",
            cursor: "pointer",
            marginTop: "1rem",
            boxShadow: "0 2px 8px rgba(108,52,131,0.10)",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default MuscleGainPage;