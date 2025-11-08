import React from "react";

function Programmes() {
  return (
    <main className="container fade-in" style={{ marginTop: "110px" }}>
      <h2 className="section-title">Our Programmes</h2>
      <div className="cards">
        <div className="card">
          <h3>Education Support</h3>
          <p>School fees, books and tutoring for children.</p>
        </div>
        <div className="card">
          <h3>Nutrition Program</h3>
          <p>Daily meals and nutrition support to ensure healthy growth.</p>
        </div>
        <div className="card">
          <h3>Healthcare</h3>
          <p>Regular checkups and emergency medical care.</p>
        </div>
      </div>
    </main>
  );
}

export default Programmes;
