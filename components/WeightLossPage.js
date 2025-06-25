import React from "react";
import { useNavigate } from "react-router-dom";

const sampleDietPlan = [
  {
    week: 1,
    plan: [
      "Breakfast: Oatmeal with berries and almonds",
      "Snack: Greek yogurt",
      "Lunch: Grilled chicken salad with olive oil dressing",
      "Snack: Apple",
      "Dinner: Steamed fish, quinoa, and broccoli",
    ],
  },
  {
    week: 2,
    plan: [
      "Breakfast: Scrambled eggs with spinach",
      "Snack: Carrot sticks with hummus",
      "Lunch: Turkey wrap with whole wheat tortilla",
      "Snack: Orange",
      "Dinner: Baked salmon, brown rice, and green beans",
    ],
  },
  {
    week: 3,
    plan: [
      "Breakfast: Low-fat cottage cheese with pineapple",
      "Snack: Mixed nuts",
      "Lunch: Lentil soup with whole grain bread",
      "Snack: Pear",
      "Dinner: Grilled tofu, sweet potato, and asparagus",
    ],
  },
  {
    week: 4,
    plan: [
      "Breakfast: Smoothie with spinach, banana, and protein powder",
      "Snack: Boiled egg",
      "Lunch: Quinoa bowl with chickpeas and veggies",
      "Snack: Berries",
      "Dinner: Grilled shrimp, wild rice, and salad",
    ],
  },
];

function WeightLossPage() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')",
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
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          padding: "2.5rem 2rem",
          maxWidth: 500,
          width: "100%",
          boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#2d6a4f", marginBottom: "1.5rem" }}>
          1-Month Weight Loss Diet Plan
        </h2>
        {sampleDietPlan.map((week) => (
          <div key={week.week} style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#40916c" }}>Week {week.week}</h4>
            <ul>
              {week.plan.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "0.4rem" }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={goToDashboard}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "linear-gradient(90deg, #2d6a4f 0%, #95d5b2 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "0px",
            fontSize: "1.1rem",
            cursor: "pointer",
            marginTop: "1rem",
            boxShadow: "0 2px 8px rgba(45,106,79,0.10)",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default WeightLossPage;