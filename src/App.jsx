import { CartProvider } from './context/CartContext';
import HeroCarousel from './components/HeroCarousel';
import Categories from './components/Categories';
import BuildYourBox from './components/BuildYourBox';
import KnowYourSnack from './components/KnowYourSnack';
import Bestsellers from './components/Bestsellers';
import VideoTestimonials from './components/VideoTestimonials';
import FoodGallery from './components/FoodGallery';
import Partnerships from './components/Partnerships';
import QuickRecipes from './components/QuickRecipes';
import OurStory from './components/OurStory';
import WhyChooseUs from './components/WhyChooseUs';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <main>
          <HeroCarousel />
          <Categories />
          <BuildYourBox />
          <KnowYourSnack />
          <Bestsellers />
          <VideoTestimonials />
          <FoodGallery />
          <Partnerships />
          <QuickRecipes />
          <OurStory />
          <WhyChooseUs />
        </main>
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
