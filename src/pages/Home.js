import React from "react";
import { Link } from "react-router-dom";  

function Home() {
  return (
    <>
      <header className="hero">
        <div className="inner fade-in">
          <h1>HopeBridge Orphanage — Every child deserves a chance.</h1>
          <p>
            Join us in supporting education, nutrition and care for children in need.
          </p>
          
          <Link className="btn" to="/donate">Donate Now</Link>
        </div>
      </header>

      <div className="wave"></div>

      <main className="container">
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Our Values</h1>
        <img src="/assets/handshake.png" alt="Handshake" style={{ display: "block", margin: "18px auto", maxWidth: 120 }} />
        <p style={{ textAlign: "center", maxWidth: 900, margin: "16px auto" }}>
          HopeBridge works to provide safe <strong>shelter</strong>, <strong>education</strong> and <strong>healthcare</strong> to children.
          Your small gift helps create big change.
        </p>

        <div className="cards" style={{ marginTop: 30 }}>
          <div className="card">
            <img src="/assets/children photo.png" alt="Care" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
            <h3>200 Lives in Our Care. Every Child Matters.</h3>
            <p>We provide essential care and support for 200 children.</p>
          </div>

          <div className="card">
            <img src="/assets/children teacher.png" alt="Teacher" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
            <h3>High-Quality Care: 1:10 Teacher Ratio.</h3>
            <p>Low teacher-child ratios for personalized attention.</p>
          </div>

          <div className="card">
            <img src="/assets/children doctor.png" alt="Doctor" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
            <h3>Dedicated Doctors and Counselors for Every Child.</h3>
            <p>Comprehensive physical and emotional care.</p>
          </div>

          <div className="card">
            <img src="/assets/children volunteer.png" alt="Volunteer" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
            <h3>Join our team of compassionate Volunteers.</h3>
            <p>Volunteer and make a real difference.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
