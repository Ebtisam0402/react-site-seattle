import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from "./components/Card"
import Section from './components/Section'
import Footer from './components/Footer'
const base = import.meta.env.BASE_URL;

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Section id="funFacts" title= "Fun Facts">
      <Card title="Fun Fact #1" description="Seattle has an entire wall filled with used gum. Known as the Gum Wall, it has become a colorful and quirky tourist attraction." image={`${base}gum_wall.jpg`} alt="Seattle Gum Wall covered in colorfull chewing gum" />
      <Card title="Fun Fact #2" description="Seattle is built on top of another city. Visitors can explore the underground passageways that remain from the original streets." image={`${base}underground_seattle.jpg`} alt="Seattle Underground passageways beneath the city streets" />
      <Card title="Fun Fact #3" description="Seattle was home to the world's first espresso cart. This helped shape the city's strong coffee culture we know today." image={`${base}espresso_cart.jpeg`} alt="Early espresso cart serving coffee in Seattle" />
      </Section>

      <Section id="tourist" title= "Tourist Places">
      <Card title="Space Needle" description="Seattle's most iconic landmark, offering panoramic views of the city skyline, mountains, and Puget Sound from its observation deck." image={`${base}space-needle.jpeg`} alt= "Seattle Space Needle with city skyline in the background"/>
      <Card title="Chihuly Garden and Glass" description="A stunning exhibit featuring vibrant glass sculptures by Dale Chihuly, blending art, light, and nature into a unique experience." image={`${base}chihuly-garden-glass.jpeg`} alt="Colorful glass sculptures inside Chihuly Garden and Glass exhibit"/>
      <Card title="Pike Place Market" description="A lively waterfront market known for fresh seafood, local vendors, and the famous fish-throwing tradition." image={`${base}pike-place-market.jpeg`} alt="Pike Place Market entrance sign with busy street and vendors" />
      </Section>

      <Section id="nature" title= "Nature & Outdoor">
      <Card title="Discovery Park" description="Seattle's largest park, featuring scenic trails, open meadows, and coastal views along Puget Sound, perfect for hiking and relaxing." image={`${base}discovery-park.jpeg`} alt="Scenic view of Discovery Park with lighthouse and Puget Sound" />
      <Card title="Alki Beach Park" description="A popular waterfront spot with sandy shores, walking and biking paths, and beautiful views of the Seattle skyline across Elliott Bay." image={`${base}alki-beach.jpeg`} alt="Alki Beach shoreline with Seattle skyline across the water"/>
      <Card title="Gas Works Park" description="A unique park built on a former gas plant, offering grassy hills, industrial structures, and one of the best skyline views in Seattle." image={`${base}/gas-works-park.jpeg`} alt="Gas Works Park with industrial structures and Seattle skyline view" />
      </Section>

      <Footer />
    </>
  )
}

export default App
