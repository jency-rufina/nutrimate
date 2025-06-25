import React from "react";

function ExitPage() {
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
          background: "rgba(255,255,255,0.92)",
          borderRadius: "20px",
          padding: "3rem 2.5rem",
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#e17055", marginBottom: "1.5rem", fontWeight: 700 }}>
          Goodbye from NutriMate!
        </h1>
        <p style={{ color: "#555", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Thank you for using NutriMate, your personalized meal planner.<br />
          We hope to see you again soon!
        </p>
        <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>👋</div>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "0.8rem 2.2rem",
            background: "linear-gradient(90deg, #e17055 0%, #f6d365 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            fontSize: "1.1rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(225,112,85,0.10)",
            transition: "background 0.3s, transform 0.2s",
          }}
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export default ExitPage;