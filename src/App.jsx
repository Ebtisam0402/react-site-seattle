import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from "./components/Card"
import Section from './components/Section'
import Footer from './components/Footer'
const base = import.meta.env.BASE_URL;
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

   const matchesSearch = (text) => {
      if (searchTerm.trim() === "") {
      return true;
  }
    return text.toLowerCase().includes(searchTerm.toLowerCase().trim());
  };
  
  return (
    <>
      <Header />
      <HeroSection />

      <div className="search-container">
      <input
        type="text"
        placeholder="Search places, parks, or fun facts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      </div>
      
      <Section id="funFacts" title="Fun Facts">
            {matchesSearch("gum wall seattle fun fact tourist attraction colorful") && (
              <Card
                title="Fun Fact #1"
                description="Seattle has an entire wall filled with used gum..."
                image={`${base}gum_wall.jpg`}
                alt="Seattle Gum Wall"
                address="1428 Post Alley, Seattle, WA 98101"
              />
            )}

            {matchesSearch("underground seattle passageways original city fun fact") && (
              <Card
                title="Fun Fact #2"
                description="Seattle is built on top of another city..."
                image={`${base}underground_seattle.jpg`}
                alt="Seattle Underground"
                address="614 1st Ave, Seattle, WA 98104"
              />
            )}

            {matchesSearch("espresso cart seattle coffee history fun fact") && (
              <Card
                title="Fun Fact #3"
                description="Seattle was home to the world's first espresso cart..."
                image={`${base}espresso_cart.jpeg`}
                alt="Espresso cart"
              />
            )}
          </Section>

                <Section id="tourist" title="Tourist Places">

            {matchesSearch(
              "space needle seattle iconic landmark observation deck skyline mountains puget sound"
            ) && (
              <Card
                title="Space Needle"
                description="Seattle's most iconic landmark, offering panoramic views of the city skyline, mountains, and Puget Sound from its observation deck."
                image={`${base}space-needle.jpeg`}
                alt="Seattle Space Needle with city skyline in the background"
                address="400 Broad St, Seattle, WA 98109"
              />
            )}

            {matchesSearch(
              "chihuly garden glass seattle art sculptures museum exhibit"
            ) && (
              <Card
                title="Chihuly Garden and Glass"
                description="A stunning exhibit featuring vibrant glass sculptures by Dale Chihuly, blending art, light, and nature into a unique experience."
                image={`${base}chihuly-garden-glass.jpeg`}
                alt="Colorful glass sculptures inside Chihuly Garden and Glass exhibit"
                address="305 Harrison St, Seattle, WA 98109"
              />
            )}

            {matchesSearch(
              "pike place market seattle seafood vendors fish waterfront"
            ) && (
              <Card
                title="Pike Place Market"
                description="A lively waterfront market known for fresh seafood, local vendors, and the famous fish-throwing tradition."
                image={`${base}pike-place-market.jpeg`}
                alt="Pike Place Market entrance sign with busy street and vendors"
                address="85 Pike St, Seattle, WA 98101"
              />
            )}

          </Section>

              <Section id="nature" title="Nature & Outdoor">

            {matchesSearch(
              "discovery park seattle trails hiking nature meadows lighthouse puget sound"
            ) && (
              <Card
                title="Discovery Park"
                description="Seattle's largest park, featuring scenic trails, open meadows, and coastal views along Puget Sound, perfect for hiking and relaxing."
                image={`${base}discovery-park.jpeg`}
                alt="Scenic view of Discovery Park with lighthouse and Puget Sound"
                address="3801 Discovery Park Blvd, Seattle, WA 98199"
              />
            )}

            {matchesSearch(
              "alki beach seattle waterfront sand biking skyline elliott bay"
            ) && (
              <Card
                title="Alki Beach Park"
                description="A popular waterfront spot with sandy shores, walking and biking paths, and beautiful views of the Seattle skyline across Elliott Bay."
                image={`${base}alki-beach.jpeg`}
                alt="Alki Beach shoreline with Seattle skyline across the water"
                address="2665 Alki Ave SW, Seattle, WA 98116"
              />
            )}

            {matchesSearch(
              "gas works park seattle skyline industrial hills lake union"
            ) && (
              <Card
                title="Gas Works Park"
                description="A unique park built on a former gas plant, offering grassy hills, industrial structures, and one of the best skyline views in Seattle."
                image={`${base}gas-works-park.jpeg`}
                alt="Gas Works Park with industrial structures and Seattle skyline view"
                address="2101 N Northlake Way, Seattle, WA 98103"
              />
            )}

          </Section>
      <Footer />
    </>
  )
}

export default App
