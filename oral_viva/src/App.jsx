import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Toast from './components/Toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AppProvider>
      <Toast />
      {isLoggedIn ? (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </AppProvider>
  );
}
