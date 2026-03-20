import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="selection:bg-mi-acento selection:text-mi-fondo">
      {/* 1. Importamos el Header */}
      <Header />
      
      {/* 2. Mostramos la página principal */}
      <Home />
      
      {/* 3. Importamos el Footer */}
      <Footer />
    </div>
  );
}

export default App;