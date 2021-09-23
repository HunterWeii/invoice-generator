import React from 'react';
import Home from 'pages/Home';
import { AuthProvider, useAuthContext } from 'pages/Auth/AuthProvider';
import Auth from 'pages/Auth';
import 'styles/_reset.scss';

function AppContent() {
  const { isAuthenticate }: any = useAuthContext();

  if (!isAuthenticate) return <Auth />

  return <Home />
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
