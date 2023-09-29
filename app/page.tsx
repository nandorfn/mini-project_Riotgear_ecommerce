import Body from './components/Body/Body'
import Hero from './components/Hero/Hero'
import HeroContent from './components/Hero/HeroContent'
import ScrollMenuContainer from './components/Menu/ScrollMenuContainer'
import HeroImgDesktop from './assets/Content/HeroImgDesktop.png'

export default function Home() {
  return (
    <>
      <Hero
        childComponent={<HeroContent />}
        img={HeroImgDesktop}
      />
      <ScrollMenuContainer />
      <Body />
    </>
  )
}
