import React from "react";
import { useNavigate } from "react-router-dom";

const fatLossPlan = [
  {
    week: 1,
    meals: [
      { day: "Monday", plan: "Oats + Berries (breakfast), Grilled chicken salad (lunch), Stir-fried veggies + tofu (dinner)" },
      { day: "Tuesday", plan: "Greek yogurt + nuts, Quinoa bowl + veggies, Baked fish + steamed broccoli" },
      { day: "Wednesday", plan: "Smoothie (spinach, banana, protein), Lentil soup + salad, Grilled turkey + asparagus" },
      { day: "Thursday", plan: "Egg white omelette, Brown rice + chickpeas, Grilled shrimp + mixed greens" },
      { day: "Friday", plan: "Cottage cheese + fruit, Chicken wrap + veggies, Baked salmon + green beans" },
      { day: "Saturday", plan: "Avocado toast, Veggie stir fry + tofu, Grilled chicken + salad" },
      { day: "Sunday", plan: "Protein pancakes, Quinoa salad, Baked fish + roasted veggies" },
    ],
  },
  {
    week: 2,
    meals: [
      { day: "Monday", plan: "Oats + banana, Grilled fish + veggies, Lentil curry + brown rice" },
      { day: "Tuesday", plan: "Boiled eggs + fruit, Chicken salad, Tofu stir fry + greens" },
      { day: "Wednesday", plan: "Smoothie bowl, Turkey sandwich + salad, Baked salmon + broccoli" },
      { day: "Thursday", plan: "Greek yogurt + seeds, Quinoa + beans, Grilled shrimp + veggies" },
      { day: "Friday", plan: "Egg white scramble, Veggie wrap, Grilled chicken + asparagus" },
      { day: "Saturday", plan: "Cottage cheese + berries, Lentil soup, Baked fish + salad" },
      { day: "Sunday", plan: "Avocado toast, Chicken bowl + veggies, Tofu curry + brown rice" },
    ],
  },
  {
    week: 3,
    meals: [
      { day: "Monday", plan: "Oats + nuts, Grilled turkey + salad, Veggie stir fry + tofu" },
      { day: "Tuesday", plan: "Protein smoothie, Chicken wrap + greens, Baked salmon + beans" },
      { day: "Wednesday", plan: "Egg white omelette, Quinoa salad, Grilled shrimp + veggies" },
      { day: "Thursday", plan: "Greek yogurt + fruit, Lentil curry + rice, Grilled chicken + broccoli" },
      { day: "Friday", plan: "Cottage cheese + seeds, Veggie bowl, Baked fish + salad" },
      { day: "Saturday", plan: "Avocado toast, Chicken salad, Tofu stir fry + greens" },
      { day: "Sunday", plan: "Protein pancakes, Turkey sandwich + salad, Baked salmon + veggies" },
    ],
  },
  {
    week: 4,
    meals: [
      { day: "Monday", plan: "Oats + berries, Grilled fish + salad, Lentil soup + veggies" },
      { day: "Tuesday", plan: "Boiled eggs + fruit, Chicken bowl + greens, Tofu curry + rice" },
      { day: "Wednesday", plan: "Smoothie bowl, Veggie wrap, Grilled shrimp + broccoli" },
      { day: "Thursday", plan: "Greek yogurt + nuts, Quinoa salad, Grilled chicken + beans" },
      { day: "Friday", plan: "Egg white scramble, Lentil curry + salad, Baked fish + veggies" },
      { day: "Saturday", plan: "Cottage cheese + fruit, Chicken salad, Tofu stir fry + greens" },
      { day: "Sunday", plan: "Avocado toast, Turkey sandwich + salad, Baked salmon + broccoli" },
    ],
  },
];

function FatLossPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
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
          boxShadow: "0 8px 32px rgba(253,160,133,0.18)",
        }}
      >
        <h1 style={{ color: "#e17055", textAlign: "center", marginBottom: "1.5rem" }}>
          1-Month Fat Loss Meal Plan
        </h1>
        {fatLossPlan.map((week, idx) => (
          <div key={week.week} style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#f6b93b" }}>Week {week.week}</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Day</th>
                  <th style={thStyle}>Meal Plan</th>
                </tr>
              </thead>
              <tbody>
                {week.meals.map((meal, i) => (
                  <tr key={i}>
                    <td style={tdStyle}>{meal.day}</td>
                    <td style={tdStyle}>{meal.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div style={{ textAlign: "center", color: "#e17055", marginTop: "2rem" }}>
          <b>Tip:</b> Drink plenty of water, avoid sugary drinks, and stay active!
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "0.8rem 2.2rem",
              background: "linear-gradient(90deg,rgb(212, 117, 85) 0%,rgb(246, 234, 101) 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "0px",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(225,112,85,0.10)",
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


const thStyle = {
  borderBottom: "2px solidrgb(212, 246, 59)",
  padding: "0.5rem",
  background: "#fffbe7",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #fceabb",
  padding: "0.5rem",
};

export default FatLossPage;