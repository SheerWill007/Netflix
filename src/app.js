import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

// Route wrapper for authenticated users - redirects to browse if logged in
function PublicRoute({ user, children }) {
  return user ? <Navigate to={ROUTES.BROWSE} replace /> : children;
}

// Route wrapper for protected routes - redirects to signin if not logged in
function PrivateRoute({ user, children }) {
  return user ? children : <Navigate to={ROUTES.SIGN_IN} replace />;
}

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route 
          path={ROUTES.SIGN_IN} 
          element={
            <PublicRoute user={user}>
              <SignIn />
            </PublicRoute>
          } 
        />
        <Route 
          path={ROUTES.SIGN_UP} 
          element={
            <PublicRoute user={user}>
              <SignUp />
            </PublicRoute>
          } 
        />
        <Route 
          path={ROUTES.BROWSE} 
          element={
            <PrivateRoute user={user}>
              <Browse />
            </PrivateRoute>
          } 
        />
        <Route 
          path={ROUTES.HOME} 
          element={
            <PublicRoute user={user}>
              <Home />
            </PublicRoute>
          } 
        />
      </Routes>
    </Router>
  );
}
