import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", amount: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, amount } = form;
    if (!name || !email || !amount) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      // live backend URL from Render
      const RENDER_URL = "https://hopebridge-backend2.onrender.com";

      const res = await fetch(`${RENDER_URL}/api/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });

      if (!res.ok) throw new Error("Donation failed");

      alert("Thank you for your donation! Data saved to MongoDB.");
      navigate("/thankyou");
    } catch (err) {
      console.error(err);
      alert("A connection error occurred. Please check your server and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form id="donationForm" onSubmit={handleSubmit}>
        <input
  id="name"
  type="text"
  placeholder="Your Name"
  value={form.name}
  onChange={(e) => {
    const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm({ ...form, name: onlyLetters });
  }}
  pattern="[A-Za-z\s]+"
  title="Only alphabets are allowed"
  required
/>

        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          id="amount"
          type="number"
          placeholder="Donation Amount (₹)"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Donate"}
        </button>
      </form>

      <p
        className="donation-intro"
        style={{ marginTop: 20, maxWidth: 800, textAlign: "center" }}
      >
        Change a child's world—every small act builds hope, smiles, and a brighter future.
      </p>
    </main>
  );
}

export default Donate;

