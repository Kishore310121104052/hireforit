import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RequestForm from './components/RequestForm'; // <-- Make sure this exists
import groupImage from './assets/Group111.png'; // ✅ import the image properly

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/try" element={<TryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        {/* Contact Button on the Right */}
        <div className="top-right">
          <a href="mailto:team@hireforit.com" className="contact-btn">Contact</a>
        </div>

        {/* Centered Logo */}
        <div className="centered-logo-section">
          <img src="/logo.jpg" alt="Logo" className="main-logo" />
          <div className="logo-text">
            <h1 className="hire-text">HIRE</h1>
            <p className="subtext">forit.com</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h2>Still booking creators<br />through random DMs?</h2>
        <p>
          We fixed the mess. From verified creators to clear pricing — everything you 
        </p>
        <p>need for a frictionless booking.
        </p>
        <Link to="/try" className="cta-btn">Try it now</Link>
      </main>

      {/* Banner */}
      <section className="banner">
        <img src={groupImage} alt="Custom Symbol" className="custom-symbol" /> {/* ✅ Updated here */}
        <h1>HIREFORIT</h1>
        <p>HiFi — Built for Creators. Loved by Users.</p>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Email: support@forit.com</p>
    </div>
  );
}

function TryPage() {
  return <RequestForm />;
}

export default App;
