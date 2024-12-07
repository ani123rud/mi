// // import { useState } from 'react';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from '/vite.svg';
// // import './App.css';
// // import AuthLayout from './components/auth/layout';
// // import AuthLogin from './pages/auth/login';
// // import AuthRegister from './pages/auth/register';
// // import { Route, Routes } from 'react-router-dom';

// // import ShoppingAccount from './pages/shopping-view/account';
// // import CheckAuth from './components/common/check-auth';
// // import Unauth from './pages/unauth-page';
// // import Home from './pages/home'; // Import the Home component
// // import LoginPage from './pages/auth/LoginPage';
// // import SignUpPage from './pages/auth/SignUpPage';
// // import EmailVerificationPage from './pages/auth/EmailVerificationPage';
// // import DashboardPage from './pages/auth/DashboardPage';
// // import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
// // import ResetPasswordPage from './pages/auth/ResetPasswordPage';
// // function App() {
// //   const isAuthenticated = false;
// //   const user = {
// //     name: "ani",
// //     role: "user",
// //   };

// //   return (
// //     <div className="flex flex-col overflow-hidden bg-white">
// //       <Routes>
// //         <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />} />

// //         <Route path="/auth" element={
// //           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
// //             <AuthLayout />
// //           </CheckAuth>
// //         }>
// //           <Route path="login" element={<LoginPage />} />
// //           <Route path="register" element={<SignUpPage />} />
// //         </Route>

// //         <Route path="/admin" element={
// //           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
// //             <AdminLayout />
// //           </CheckAuth>
// //         }>
// //           <Route path="dashboard" element={<AdminDashboard />} />
// //           <Route path="features" element={<AdminFeatures />} />
// //           <Route path="products" element={<AdminProducts />} />
// //           <Route path="orders" element={<AdminOrders />} />
// //         </Route>

// //         <Route path="/shop" element={
// //           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
// //             <ShoppingLayout />
// //           </CheckAuth>
// //         }>
// //           <Route path="home" element={<ShoppingHome />} />
// //           <Route path="listing" element={<ShoppingListing />} />
// //           <Route path="checkout" element={<ShoppingCheckout />} />
// //           <Route path="account" element={<ShoppingAccount />} />
// //         </Route>

// //         <Route path="*" element={<Notfound />} />
// //         <Route path="/unauth-page" element={<Unauth />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import './App.css';
// import AuthLayout from './components/auth/layout';
// import AdminLayout from './components/admin-view/layout';
// import ShoppingLayout from './components/shopping-view/layout';
// import Notfound from './pages/Not-found';
// import Home from './pages/home';
// import Unauth from './pages/unauth-page';
// import LoginPage from './pages/auth/LoginPage';
// import SignUpPage from './pages/auth/SignUpPage';
// import EmailVerificationPage from './pages/auth/EmailVerificationPage';
// import DashboardPage from './pages/auth/DashboardPage';
// import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
//  import ResetPasswordPage from './pages/auth/ResetPasswordPage';
// //  import AdminLayout from './components/admin-view/layout';
// import AdminDashboard from './pages/admin-view/dashboard';
// import AdminFeatures from './pages/admin-view/features';
// import AdminProducts from './pages/admin-view/products';
// import AdminOrders from './pages/admin-view/orders';
// // import ShoppingLayout from './components/shopping-view/layout';
// // import Notfound from './pages/Not-found';
// import ShoppingHome from './pages/shopping-view/home';
// import ShoppingListing from './pages/shopping-view/listing';
// import ShoppingCheckout from './pages/shopping-view/checkout';
// import ShoppingAccount from './pages/shopping-view/account';
// // Import necessary components
// import { useAuthStore } from './stores/authStore';
// import ShopHome from './pages/shopping-view/home';

// // Protect routes that require authentication
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, isCheckingAuth } = useAuthStore();

//   if (isCheckingAuth) return <div>Loading...</div>;
//   if (!isAuthenticated) return <Navigate to='/auth/login' replace />;

//   return children;
// };

// // Redirect authenticated users away from authentication pages
// const RedirectAuthenticatedUser = ({ children }) => {
//   const { isAuthenticated } = useAuthStore();

//   if (isAuthenticated) return <Navigate to='/' replace />;

//   return children;
// };

// function App() {
//   const { isAuthenticated, user, checkAuth } = useAuthStore();

//   useEffect(() => {
//     checkAuth(); // Check authentication status on load
//   }, [checkAuth]);

//   return (
//     <div className="flex flex-col overflow-hidden bg-white">
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />} />

//         <Route path="/auth" element={
//           <RedirectAuthenticatedUser>
//             <AuthLayout />
//           </RedirectAuthenticatedUser>
//         }>
//           <Route path="login" element={<LoginPage />} />
//           <Route path="signup" element={<SignUpPage />} />
//           <Route path="verify-email" element={<EmailVerificationPage />} />
//           <Route path="forgot-password" element={<ForgotPasswordPage />} />
//           <Route path="reset-password" element={<ResetPasswordPage />} />
//         </Route>

//         <Route path="/unauth-page" element={<Unauth />} />

//         {/* Protected Routes */}
//         <Route path="/admin" element={
//           <ProtectedRoute>
//             <AdminLayout />
//           </ProtectedRoute>
//         }>
//           <Route path="dashboard" element={<DashboardPage />} />
//           <Route path="features" element={<AdminFeatures />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="orders" element={<AdminOrders />} />
//         </Route>

//         <Route path="/shop" element={
//           <ProtectedRoute>
//             <ShoppingLayout />
//           </ProtectedRoute>
//         }>
//           <Route path="home" element={<ShopHome />} />
//           <Route path="listing" element={<ShoppingListing />} />
//           <Route path="checkout" element={<ShoppingCheckout />} />
//           <Route path="account" element={<ShoppingAccount />} />
//         </Route>

//         {/* Catch-all Route */}
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import AuthLayout from './components/auth/layout';
import AdminLayout from './components/admin-view/layout';
import ShoppingLayout from './components/shopping-view/layout';
import Notfound from './pages/Not-found';
import Home from './pages/home';
import Unauth from './pages/unauth-page';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import EmailVerificationPage from './pages/auth/EmailVerificationPage';
import DashboardPage from './pages/auth/DashboardPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import AdminDashboard from './pages/admin-view/dashboard';
import AdminFeatures from './pages/admin-view/features';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/orders';
import ShopHome from './pages/shopping-view/home';
import ShoppingListing from './pages/shopping-view/listing';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingAccount from './pages/shopping-view/account';
import { useAuthStore } from './auth-store/authStore';
import CheckAuth from './components/common/check-auth'; // Import the CheckAuth component

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to='/auth/login' replace />;

  return children;
};

// Redirect authenticated users away from authentication pages
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) return <Navigate to='/' replace />;

  return children;
};

function App() {
  const { isAuthenticated, user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check authentication status on load
  }, [checkAuth]);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />} />

        <Route path="/auth" element={
          <RedirectAuthenticatedUser>
            <AuthLayout />
          </RedirectAuthenticatedUser>
        }>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="verify-email" element={<EmailVerificationPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="/unauth-page" element={<Unauth />} />

        {/* Protected Routes */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
