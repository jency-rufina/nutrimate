import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    dietaryPreference: "",
    healthGoal: "",
    allergies: "",
    activityLevel: "",
    role: "user", // Added role field
  });

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users") || "[]"));

  const navigate = useNavigate();
  useEffect(() => {
    // Check if an admin is already logged in (for example, from localStorage/session)
    const adminUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (adminUser && adminUser.role === "admin") {
      navigate("/users");
    }
  }, [navigate]);
   const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Password validation
    if (e.target.name === "password") {
      const value = e.target.value;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      if (value.length < 8) {
        setPasswordError("Password must be at least 8 characters.");
      } else if (!specialCharRegex.test(value)) {
        setPasswordError("Password must contain at least one special character.");
      } else {
        setPasswordError("");
      }
    }
  };

  // Remove user (admin only)
  function handleRemoveUser(username) {
    if (!loggedInUser || loggedInUser.role !== "admin") return;
    const updatedUsers = users.filter(u => u.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  const handleGoToUsersList = () => {
    navigate("/users");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password validation before submit
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (form.password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }
    if (!specialCharRegex.test(form.password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    }
    // Save user
    const updatedUsers = [...users, { ...form }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setLoggedInUser(form);
    setUsers(updatedUsers);
    navigate("/dashboard");
  };
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
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
          maxWidth: 700,
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#4b6cb7" }}>
          NutriMate Registration
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Create your personalized meal planner account.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {/* Column 1 */}
            <div style={{ flex: 1, minWidth: 250 }}>
              <div style={{ marginBottom: "1rem" }}>
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  placeholder="Choose a username"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                 <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                  style={inputStyle}
                />
                {passwordError && (
                  <div style={{ color: "red", fontSize: "0.95rem", marginTop: "0.2rem" }}>
                    {passwordError}
                  </div>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  placeholder="Your age"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Gender:</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Role:</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            {/* Column 2 */}
            <div style={{ flex: 1, minWidth: 250 }}>
              <div style={{ marginBottom: "1rem" }}>
                <label>Dietary Preference:</label>
                <select
                  name="dietaryPreference"
                  value={form.dietaryPreference}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="keto">Keto</option>
                  <option value="paleo">Paleo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Health Goal:</label>
                <select
                  name="healthGoal"
                  value={form.healthGoal}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select</option>
                  <option value="weight loss">Weight Loss</option>
                  <option value="muscle gain">Muscle Gain</option>
                  <option value="fat loss">Fat Loss</option>
                  <option value="general fitness">General Fitness</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label>Allergies (if any):</label>
                <input
                  type="text"
                  name="allergies"
                  value={form.allergies}
                  onChange={handleChange}
                  placeholder="e.g. Nuts, Dairy"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label>Activity Level:</label>
                <select
                  name="activityLevel"
                  value={form.activityLevel}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly Active</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Active</option>
                  <option value="very_active">Very Active</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: "0.5rem",
              boxShadow: "0 2px 8px rgba(75,108,183,0.10)",
            }}
          >
            Register & Go to Dashboard
          </button>
        </form>
       
        <button
          onClick={handleGoToUsersList}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontSize: "1.1rem",
            cursor: "pointer",
            marginTop: "1rem",
            boxShadow: "0 2px 8px rgba(58,123,213,0.10)",
          }}
          disabled={form.role !== "admin"}
        >
          View Registered Users
        </button>

        {/* ADMIN/USER TABLE & CONTROLS */}
        {loggedInUser && (
          <div style={{ marginTop: "2rem" }}>
            <h3>Registered Users</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Health Goal</th>
                  {loggedInUser.role === "admin" && <th>Remove</th>}
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx}>
                    <td>{u.username}</td>
                    <td>{u.role}</td>
                    <td>{u.email}</td>
                    <td>{u.healthGoal}</td>
                    {loggedInUser.role === "admin" && (
                      <td>
                        <button
                          onClick={() => handleRemoveUser(u.username)}
                          style={{
                            background: "#e17055",
                            color: "#fff",
                            border: "none",
                            borderRadius: "15px",
                            padding: "0.3rem 1rem",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* WEIGHT LOSS / MUSCLE GAIN ACCESS */}

        {/* WEIGHT LOSS / MUSCLE GAIN ACCESS */}
        {(loggedInUser && loggedInUser.role === "admin") && (
          <>
            <button
              onClick={() => navigate("/weight-loss")}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "#6a82fb",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontSize: "1.1rem",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Go to Weight Loss Page
            </button>
            <button
              onClick={() => navigate("/muscle-gain")}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "#00b894",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                fontSize: "1.1rem",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Go to Muscle Gain Page
            </button>
          </>
        )}

        {(loggedInUser && loggedInUser.role === "user" && loggedInUser.healthGoal &&
          loggedInUser.healthGoal.toLowerCase().includes("weight loss")) && (
          <button
            onClick={() => navigate("/weight-loss")}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "#6a82fb",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Go to Weight Loss Page
          </button>
        )}

        {(loggedInUser && loggedInUser.role === "user" && loggedInUser.healthGoal &&
          loggedInUser.healthGoal.toLowerCase().includes("muscle gain")) && (
          <button
            onClick={() => navigate("/muscle-gain")}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "#00b894",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Go to Muscle Gain Page
          </button>
        )}

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "0.25rem",
  fontSize: "1rem",
};

export default RegistrationPage;