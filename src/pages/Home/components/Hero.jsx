const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/headerbg.jpg')", // Replace with your image URL
      }}
    >
       {/* Teal Overlay */}
      <div className="absolute inset-0 bg-[#00796B] opacity-70 z-0"></div>
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 text-left text-white font-roboto">
        <h1 className="text-5xl md:text-6xl font-bold md:mb-4 mb-8 leading-tight text-[ #E0F2F1]">
          Empowering Healthcare <br /> with Trusted Innovation
        </h1>
        <p className="text-xl md:text-3xl mb-6 text-[ #B2DFDB] md:font-bold hidden md:block">
          Future Proof Engineering since 1941.
        </p>
        <button className="btn bg-[rgba(224, 242, 241, 0.2)] hover:bg-[ #80CBC4] text-[ #004D40]">
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default Hero
