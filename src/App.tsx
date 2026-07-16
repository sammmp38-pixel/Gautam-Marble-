/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Collections from './components/Collections';
import VisualizerBanner from './components/VisualizerBanner';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import BookingDelivery from './components/BookingDelivery';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white text-gray-900">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Collections />
        <VisualizerBanner />
        <Gallery />
        <VideoSection />
        <BookingDelivery />
        <Stats />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
