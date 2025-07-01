import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Home from './home';
import NewLaunch from './newlaunch';
import CategoryWindow from './aero';
import OutfitCarousel from './outfits';
import DarpanSection from './wed';
import SeasonsCollection from './season';
import CareerSection from './careers';
import ReviewSection from './testimonial';
import DigitalWardrobe from './wardrobe';
import FAQSection from './FAQs';
import ContactForm from './contact';
import Footer from './footer';

// Import your category pages
import Men from './men';
import WomensSection from './women';
import ProductPage from './tops';
import BottomPage from './bottoms';
import FootwearPage from './shoes';
import AccessoriesPage from './accessories';
import DarpanShowcase from './darpan';
import Checkout from './checkout';
import Collection from './collection';


function App() {
  return (
    <Routes>
      {/* Homepage */}
      <Route
        path="/"
        element={
          <div>
            <Home />
            <NewLaunch />
            <CategoryWindow />
            <OutfitCarousel />
            <DarpanSection />
            <SeasonsCollection />
            <CareerSection />
            <ReviewSection />
            <DigitalWardrobe />
            <FAQSection />
            <ContactForm />
            <Footer />
          </div>
        }
      />

      {/* Category Pages */}
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<WomensSection />} />
      <Route path="/tops" element={<ProductPage />} />
      <Route path="/bottoms" element={<BottomPage />} />
      <Route path="/shoes" element={<FootwearPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/darpan" element={<DarpanShowcase />} />
      <Route path="/collection" element={<Collection />} />







      
    </Routes>
  );
}

export default App;
