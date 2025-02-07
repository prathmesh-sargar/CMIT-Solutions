import Navbar from "./Navbar";

const Hero = () => {
    return (
     <>
      <div className="bg-transparent">
      <div className="h-[75px] fixed z-50 w-full">
      <Navbar/>
      </div>
      <section className="relative w-full h-screen flex items-center justify-center text-center">
      
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="un.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay (Dark Gradient for better readability) */}
        <div className="absolute inset-0  bg-opacity-50"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 px-4">
            <p className="text-2xl text-slate-100">IT Services</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold p-4">
          IT for the Anywhere Business
          </h1>
          <button className="text-white border-4 px-[60px] py-2 font-bold rounded-xl mt-3 text-2xl hover:bg-white hover:text-black duration-500">Learn More  </button>
          <p className="text-gray-200 text-lg md:text-2xl mt-4">
            Experience Innovation & Technology Together
          </p>
        </div>
      </section>
      </div>
     </>
    );
  };
  
  export default Hero;
  