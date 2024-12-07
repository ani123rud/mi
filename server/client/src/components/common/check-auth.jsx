// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);

// //   if (location.pathname === "/") {
// //     if (!isAuthenticated) {
// //       return <Navigate to="/auth/login" />;
// //     } else {
// //       if (user?.role === "admin") {
// //         return <Navigate to="/admin/dashboard" />;
// //       } else {
// //         return <Navigate to="/shop/home" />;
// //       }
// //     }
// //   }

//   if (
//     !isAuthenticated &&
//     !(
//       location.pathname.includes("/login") ||
//       location.pathname.includes("/register")
//     )
//   ) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (
//     isAuthenticated &&
//     (location.pathname.includes("/login") ||
//       location.pathname.includes("/register"))
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   if (
//     isAuthenticated &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   if (
//     isAuthenticated &&
//     user?.role === "admin" &&
//     location.pathname.includes("shop")
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;
import { Navigate, useLocation } from 'react-router-dom';

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // If the user is not authenticated and tries to access a protected route
  if (!isAuthenticated && !(location.pathname.includes('/auth/login') || location.pathname.includes('/auth/signup'))) {
    return <Navigate to="/auth/login" replace />;
  }

  // If the user is authenticated and tries to access login or signup page, redirect to the appropriate page
  if (isAuthenticated && (location.pathname.includes('/auth/login') || location.pathname.includes('/auth/signup'))) {
    return user?.role === 'admin' ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/shop/home" replace />;
  }

  // If the user is authenticated but trying to access an admin route with a non-admin role, redirect to unauthorized page
  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
    return <Navigate to="/unauth-page" replace />;
  }

  // If the user is authenticated and tries to access shop routes but is an admin, redirect to admin dashboard
  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
