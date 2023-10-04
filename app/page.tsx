import Body from './components/Featured/Featured'
import Hero from './components/Hero/Hero'
import HeroContent from './components/Hero/HeroContent'
import ScrollMenuContainer from './components/Menu/ScrollMenuContainer'
import HeroImgDesktop from './assets/Content/HeroImgDesktop.png'
import Footer from './components/Footer/Footer'

export default function Home() {

  return (
    <>
      <Hero
        childComponent={<HeroContent />}
        img={HeroImgDesktop}
      />
      <main className='max-w-6xl mx-auto'>
        <ScrollMenuContainer />
        <Body />
      </main>
      <Footer />
    </>
  )
}
