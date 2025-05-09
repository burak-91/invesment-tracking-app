import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/pages/Auth/Login/Login';
import Register from './components/pages/Auth/Register/Register';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Investments from './components/pages/Investments/Investments';
import AddInvestment from './components/pages/AddInvestment/AddInvestment';
import Prices from './components/pages/Prices/Prices';
import Reports from './components/pages/Reports/Reports';
import Profile from './components/pages/Profile/Profile';
import Settings from './components/pages/Settings/Settings';
// import './App.css';

// Geçici olarak kullanıcının giriş yapmış olup olmadığını kontrol eden fonksiyon
const isAuthenticated = () => {
  // Backend bağlantısı yapıldığında burada token kontrolü yapılacak
  return false;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem('user');

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="investments" element={<Investments />} />
          <Route path="add-investment" element={<AddInvestment />} />
          <Route path="prices" element={<Prices />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 