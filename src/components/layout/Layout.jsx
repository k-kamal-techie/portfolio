import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content with top padding to account for fixed header */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
