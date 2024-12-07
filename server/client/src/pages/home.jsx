// src/pages/Home.js
import { Routes, Route, Link } from 'react-router-dom';
import DashboardPage from '../pages/auth/DashboardPage'; // Adjust the import path if needed
import ShopHome from '../pages/shopping-view/home'; // Create and adjust the path for ShopHome component

function Home({ isAuthenticated }) {
  return (
    <div className="home-container">
      <h1>Welcome to Our Platform</h1>
      <p>Explore our services:</p>

      <div className="options">
        {isAuthenticated ? (
          <>
            <Link to="/shop/home">Go to Shopping Home</Link>
            <Link to="/dashboard">Go to Dashboard</Link>
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">Register</Link>
          </>
        )}
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/shop/home" element={<ShopHome />} />
        {/* Dashboard is available to all authenticated users */}
        {isAuthenticated && <Route path="/dashboard" element={<DashboardPage />} />}
      </Routes>

      {/* Render Dashboard directly on the main Home page if authenticated */}
      {isAuthenticated && (
        <div className="dashboard-section">
          <h2>Your Dashboard</h2>
          <DashboardPage />
        </div>
      )}
    </div>
  );
}

export default Home;
