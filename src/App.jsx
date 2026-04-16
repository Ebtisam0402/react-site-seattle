import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Card from "./components/Card"

function App() {
  return (
    <>
      <Header />
      <HeroSection />

      <Card title="Fun Fact #1" description="Seattle has an entire wall filled with used gum." />
      <Card title="Fun Fact #2" description="Seattle is built on top of another city." />
      <Card title="Fun Fact #3" description="Seattle was home to the world's first espresso cart." />

      <Card title="Tourist Place #1" description="Space Needle" />
      <Card title="Tourist Place #2" description="Chihuly Garden and Glass" />
      <Card title="Tourist Place #3" description="Pike Place Market" />

      <Card title="Nature & Outdoors #1" description="Discovery Park" />
      <Card title="Nature & Outdoors #2" description="Alki Beach Park" />
      <Card title="Nature & Outdoors #3" description="Gas Works Park" />
    </>
  )
}

export default App
