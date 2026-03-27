import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import RoleSelector from './components/RoleSelector';
import RoleView from './components/RoleView';
import CTASection from './components/CTASection';

function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const goHome = () => setSelectedRole(null);

  return (
    <div className="min-h-screen">
      <Header
        showBack={Boolean(selectedRole)}
        showSectionNav={!selectedRole}
        onBack={goHome}
        onLogoClick={() => {
          if (selectedRole) goHome();
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <AnimatePresence mode="wait">
        {selectedRole ? (
          <motion.div
            key="role-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <RoleView roleId={selectedRole} onBack={goHome} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Hero />
            <FeaturesSection />
            <HowItWorks />
            <RoleSelector onSelect={setSelectedRole} />
            <CTASection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
