import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
    dietaryPreference: "",
    healthGoal: "",
    allergies: "",
    activityLevel: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  // Add user handler
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!form.username || !form.email) return;
    const updatedUsers = [...users, form];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setForm({
      username: "",
      email: "",
      age: "",
      gender: "",
      dietaryPreference: "",
      healthGoal: "",
      allergies: "",
      activityLevel: "",
    });
  };

  // Remove user handler
  const handleRemoveUser = (idx) => {
    const updatedUsers = users.filter((_, i) => i !== idx);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "2rem",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: "22px",
          padding: "2.5rem 2rem",
          maxWidth: "100vw",
          width: "100%",
          boxShadow: "0 8px 32px rgba(161,196,253,0.18)",
          textAlign: "center",
          overflowX: "auto",
        }}
      >
        <h2 style={{ color: "#3a7bd5", marginBottom: "1.5rem" }}>Registered Users</h2>
        <form onSubmit={handleAddUser} style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <input name="username" value={form.username} onChange={handleChange} placeholder="Username" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
          <input name="age" value={form.age} onChange={handleChange} placeholder="Age" style={inputStyle} />
          <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" style={inputStyle} />
          <input name="dietaryPreference" value={form.dietaryPreference} onChange={handleChange} placeholder="Dietary Preference" style={inputStyle} />
          <input name="healthGoal" value={form.healthGoal} onChange={handleChange} placeholder="Health Goal" style={inputStyle} />
          <input name="allergies" value={form.allergies} onChange={handleChange} placeholder="Allergies" style={inputStyle} />
          <input name="activityLevel" value={form.activityLevel} onChange={handleChange} placeholder="Activity Level" style={inputStyle} />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1.5rem",
              background: "#3a7bd5",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "0.5rem",
              height: "40px"
            }}
          >
            Add User
          </button>
        </form>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
            <thead>
              <tr>
                <th style={thStyle}>Username</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Dietary Preference</th>
                <th style={thStyle}>Health Goal</th>
                <th style={thStyle}>Allergies</th>
                <th style={thStyle}>Activity Level</th>
                <th style={thStyle}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={9} style={tdStyle}>No users registered yet.</td>
                </tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={idx}>
                    <td style={tdStyle}>{user.username}</td>
                    <td style={tdStyle}>{user.email}</td>
                    <td style={tdStyle}>{user.age}</td>
                    <td style={tdStyle}>{user.gender}</td>
                    <td style={tdStyle}>{user.dietaryPreference}</td>
                    <td style={tdStyle}>{user.healthGoal}</td>
                    <td style={tdStyle}>{user.allergies}</td>
                    <td style={tdStyle}>{user.activityLevel}</td>
                    <td style={tdStyle}>
                      <button
                        onClick={() => handleRemoveUser(idx)}
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleGoToDashboard}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontSize: "1.1rem",
            cursor: "pointer",
            marginTop: "2rem",
            boxShadow: "0 2px 8px rgba(58,123,213,0.10)",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

const thStyle = {
  borderBottom: "2px solid #3a7bd5",
  padding: "0.5rem",
  background: "#f0f4ff",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "0.5rem",
  wordBreak: "break-word",
};

const inputStyle = {
  padding: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  minWidth: "120px"
  };

export default UsersList;