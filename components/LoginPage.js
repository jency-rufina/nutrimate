import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loginType, setLoginType] = useState("user");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();

  // Load users from localStorage when loginType is user
  React.useEffect(() => {
    if (loginType === "user") {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      setUsersData(storedUsers);
    }
  }, [loginType, isLoggedIn]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoToRegister = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginType === "admin") {
      // Simple admin login (replace with real auth in production)
     // Before using, set admin in localStorage once (run this in DevTools console):
// localStorage.setItem("admins", JSON.stringify([{username: "admin", password: "admin"}]));

const admins = JSON.parse(localStorage.getItem("admins") || "[]");
const admin = admins.find(
  (a) => a.username === form.username && a.password === form.password
);
if (form.username === "admin" && form.password === "admin") {
  setIsLoggedIn(true);
} else {
  alert("Invalid admin credentials");
}
    } else {
      // User login: check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.username === form.username && u.password === form.password
      );
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid user credentials");
      }
    }
  };

  // For admin, you can show a static table or manage admin users as needed
  const adminTable = (
    <table style={{ width: "100%", marginBottom: "1.5rem", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={thStyle}>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>admin</td>
        </tr>
      </tbody>
    </table>
  );

  // For user, show all registered users from localStorage
   const userTable = (
    <table style={{ width: "100%", marginBottom: "1.5rem", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={thStyle}>Username</th>
          <th style={thStyle}>Email</th>
        </tr>
      </thead>
      <tbody>
        {(() => {
          const user = usersData.find(
            (u) => u.username === form.username && u.password === form.password
          );
          return user ? (
            <tr>
              <td style={tdStyle}>{user.username}</td>
              <td style={tdStyle}>{user.email}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={2} style={tdStyle}>No user details found.</td>
            </tr>
          );
        })()}
      </tbody>
    </table>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          minWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
       
        {!isLoggedIn ? (
          <>
            <form onSubmit={handleLogin}>
              
              <div style={{ marginBottom: "1rem" }}>
                <label>
                  <input
                    type="radio"
                    name="loginType"
                    value="user"
                    checked={loginType === "user"}
                    onChange={() => setLoginType("user")}
                    style={{ marginRight: "0.5rem" }}
                  />
                  User Login
                </label>
                <label style={{ marginLeft: "1.5rem" }}>
                  <input
                    type="radio"
                    name="loginType"
                    value="admin"
                    checked={loginType === "admin"}
                    onChange={() => setLoginType("admin")}
                    style={{ marginRight: "0.5rem" }}
                  />
                  Admin Login
                </label>
              </div>
              <input
                type="text"
                name="username"
                placeholder={loginType === "admin" ? "Admin Username" : "User Username"}
                value={form.username}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  background: "#6a82fb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                {loginType === "admin" ? "Admin Login" : "User Login"}
              </button>
            </form>
            <button
              onClick={handleGoToRegister}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "1rem",
                background: "#4b6cb7",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Go to Registration Page
            </button>
            <button
              onClick={() => navigate(-1)}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "1rem",
                background: "#888",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Go Back
            </button>
          </>
        ) : (
          <>
            <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
              {loginType === "admin" ? "Admin Table" : "User Table"}
            </h3>
            {loginType === "admin" ? adminTable : userTable}
            <button
              onClick={() => setIsLoggedIn(false)}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "1rem",
                background: "#888",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Go Back
            </button>
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
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  marginBottom: "0.5rem",
  width: "100%",
  padding: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const thStyle = {
  borderBottom: "2px solid #6a82fb",
  padding: "0.5rem",
  textAlign: "left",
  background: "#f0f4ff",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "0.5rem",
};

export default LoginPage;