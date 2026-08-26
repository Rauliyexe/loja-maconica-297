import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FloorToMoonScroll } from './components/FloorToMoonScroll';
import { ALoja } from './components/ALoja';
import { HistoriaTimeline } from './components/HistoriaTimeline';
import { Principios } from './components/Principios';
import { Galeria } from './components/Galeria';
import { Eventos } from './components/Eventos';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { MemberLoginModal } from './components/MemberLoginModal';
import { MemberDashboard } from './components/MemberDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { GlobalZodiacConstellationsBackground } from './components/GlobalZodiacConstellationsBackground';
import { GuaranesiaCelestialObservatory } from './components/GuaranesiaCelestialObservatory';
import { GuaranesiaSkyProvider } from './context/GuaranesiaSkyContext';

export function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminView(false);
  };

  return (
    <GuaranesiaSkyProvider>
      <div className="min-h-screen bg-masonic-void text-masonic-ivory relative font-sans selection:bg-masonic-gold selection:text-masonic-void">
        {/* Luxury Discrete Cursor */}
        <CustomCursor />

        {/* Admin Dashboard Overlay (Diretoria & Gestão) */}
        {isLoggedIn && isAdminView && (
          <AdminDashboard
            onLogout={handleLogout}
            onSwitchToMemberView={() => setIsAdminView(false)}
          />
        )}

        {/* Member Private Dashboard Overlay */}
        {isLoggedIn && !isAdminView && (
          <MemberDashboard
            onLogout={handleLogout}
            onOpenAdminDashboard={() => setIsAdminView(true)}
          />
        )}

        {/* Global Background Ecosystem of 12 Zodiac Constellations Synchronized with Guaranésia */}
        <GlobalZodiacConstellationsBackground />

        {/* Header Bar */}
        <Header onOpenLogin={handleOpenLogin} activeSection="hero" />

        {/* Hero Section */}
        <Hero onOpenLogin={handleOpenLogin} />

        {/* Main GSAP Canvas Transformation: Checkerboard Floor to Lunar Surface */}
        <FloorToMoonScroll />

        {/* Institutional Sections */}
        <ALoja />
        <HistoriaTimeline />
        <Principios />
        <Galeria />
        <Eventos />
        <Contato />

        {/* Footer */}
        <Footer onOpenLogin={handleOpenLogin} />

        {/* Guaranésia Celestial Real-Time Observatory Widget & Planisphere Modal */}
        <GuaranesiaCelestialObservatory />

        {/* Member Area Login Portal Modal */}
        <MemberLoginModal
          isOpen={isLoginOpen}
          onClose={handleCloseLogin}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    </GuaranesiaSkyProvider>
  );
}

export default App;
