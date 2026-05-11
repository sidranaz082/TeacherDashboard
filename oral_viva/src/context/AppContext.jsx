import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [currentPage, setCurrentPage] = useState('overview');
  const [currentStep, setCurrentStep] = useState(1);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const navigate = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <AppContext.Provider value={{
      toasts,
      showToast,
      currentPage,
      navigate,
      currentStep,
      setCurrentStep,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
