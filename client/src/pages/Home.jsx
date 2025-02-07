import Bio from "../components/Bio"
import Bio2 from "../components/Bio2"
import Carousel from "../components/Carousel"
import ContImg from "../components/ContImg"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import VideoBackground from "../components/VideoBackground"
// import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Bio/>
      <Carousel/>
      <ContImg/>
      <Bio2/>
      <VideoBackground/>
      <Footer/>
    </>
  )
}

export default Home