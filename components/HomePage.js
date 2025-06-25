import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.90)",
          borderRadius: "20px",
          padding: "2.5rem 2rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
          Welcome to NutriMate - Your Personalized Meal Planner
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
          Plan your meals, achieve your health goals, and enjoy a healthier lifestyle!
        </p>
        <button
          onClick={handleLogin}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            background: "#ff6f91",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            marginRight: "1rem"
          }}
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            background: "#6a82fb",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            marginLeft: "1rem"
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default HomePage;