const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/home-bg.png')", // Replace with your image URL
      }}
    >
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 text-left text-white font-roboto">
        <h1 className="text-5xl md:text-6xl font-bold md:mb-4 mb-8 leading-tight">
          Empowering Healthcare <br /> with Trusted Innovation
        </h1>
        <p className="text-xl md:text-3xl mb-6 text-primary-content md:font-bold hidden md:block">
          India’s leading med-tech manufacturer <br /> delivering quality medical equipment since 1941.
        </p>
        <button className="btn bg-[#2F80ED] border-[#0059b3] text-primary-content">
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default Hero
