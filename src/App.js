import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import SocialMediaMarketing from './pages/service-pages/social-media-marketing/SocialMediaMarketing';
import SocialMediaAds from './pages/service-pages/social-media-ads/SocialMediaAds';
import PayPerClick from './pages/service-pages/pay-per-click/PayPerClick';
import EmailMarketing from './pages/service-pages/email-marketing/EmailMarketing';
import SeoService from './pages/service-pages/seo-service/SeoService';
import WebDesign from './pages/service-pages/web-design/WebDesign';
import ServicesPage from './pages/ServicesPage/ServicesPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='services' element={<ServicesPage />}></Route>
        <Route path='services/social-media-marketing' element={<SocialMediaMarketing />}></Route>
        <Route path='services/social-media-ads' element={<SocialMediaAds />}></Route>
        <Route path='services/pay-per-click' element={<PayPerClick />}></Route>
        <Route path='services/email-marketing' element={<EmailMarketing />}></Route>
        <Route path='services/seo-service' element={<SeoService />}></Route>
        <Route path='services/web-design' element={<WebDesign />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
