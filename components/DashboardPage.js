import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
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
          background: "rgba(255, 255, 255, 0.55)",
          borderRadius: "22px",
          padding: "2.5rem 2rem",
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 8px 32px rgba(161,196,253,0.18)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#3a7bd5", marginBottom: "1rem", fontWeight: 700 }}>
          NutriMate Dashboard
        </h1>
        <p style={{ color: "#555", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Welcome to your personalized meal planner!
        </p>
         <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.2rem",
            marginBottom: "0.5rem",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={buttonStyle}
          >
            🏠 Home Page
          </button>
          <button
            onClick={() => navigate("/register")}
            style={buttonStyle}
          >
            📝 Registration Page
          </button>
          <button
            onClick={() => navigate("/weight-loss")}
            style={buttonStyle}
          >
            🥗 Weight Loss Plans
          </button>
          <button
            onClick={() => navigate("/muscle-gain")}
            style={buttonStyle}
          >
            💪 Muscle Gainer Plan
          </button>
          <button
            onClick={() => navigate("/general-fitness")}
            style={{
              ...buttonStyle,
              background: "linear-gradient(90deg,rgb(26, 158, 195) 0%,rgb(255, 208, 0) 100%)",
            }}
          >
           🏃‍♂️ General Fitness Page
          </button>
          <button
           onClick={() => navigate("/fat-loss")}
            style={{
              ...buttonStyle,
              background: "linear-gradient(90deg,rgb(26, 158, 195) 0%,rgb(255, 208, 0) 100%)",
            }}
          >
              🔥 Fat Loss Plan
          </button>
          <button
            onClick={() => navigate("/exitS")}
            style={{
              ...buttonStyle,
              background: "linear-gradient(90deg,rgb(26, 158, 195) 0%,rgb(255, 208, 0) 100%)",
              gridColumn: "1 / span 2",
            }}
          >
            🚪 Exit
          </button>
        </div>
        <div style={{ marginTop: "2.5rem", color: "#3a7bd5", fontWeight: 500 }}>
          <span role="img" aria-label="motivation">🌱</span> Eat well, live well!
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "0.9rem",
  background: "linear-gradient(90deg,rgb(26, 158, 195) 0%,rgb(255, 208, 0) 100%)",
  color: "#fff",
  border: "none",
  borderRadius: "0px",
  fontSize: "1.15rem",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(58,123,213,0.10)",
  transition: "background 0.3s, transform 0.2s",
};

export default DashboardPage;