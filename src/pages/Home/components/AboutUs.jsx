import { useEffect, useRef, useState } from "react";

const carouselImages = [
    "c-1.jpg",
    "c-2.jpg",
    "c-3.jpg",
    "c-4.jpg",
    "c-5.jpg",
    "c-6.JPG",
    "c-7.jpg",
    "c-8.jpg",
];

const AboutUs = () => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <section className="bg-base-100 md:my-20 my-16 px-6 md:px-20 font-roboto">
      <div className="flex flex-col md:flex-row items-center md:gap-36 md:justify-between">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="3"
              viewBox="0 0 72 3"
              fill="none"
            >
              <path d="M0 1.50049H72" stroke="#2F80ED" strokeWidth="2" />
            </svg>
            <h4 className="text-sm font-semibold uppercase text-neutral tracking-wider">
              Know About Us
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2130] mb-2">
            Who We Are
          </h2>
          <p className="text-lg text-[#1D2130] mb-6 font-semibold">
            85+ Years of Medical Excellence
          </p>
          <p className="text-[#525560] mb-6">
            Established in 1941, S.S. Medical Systems (India) Pvt. Ltd. has evolved into a leading manufacturer and importer of high-end medical equipment in India.
          </p>
          <p className="text-[#525560] mb-6">
            With over 55,000 installations nationwide, a dedicated team of 100+ professionals, and a presence across multiple global offices, we are committed to delivering innovative healthcare solutions. Our mission is to enhance brand equity through upmarket technology and customer-centric services.
          </p>
          <button className="btn bg-[#2F80ED] border-[#0059b3] text-primary-content">
            Learn more
          </button>
        </div>

        {/* Right Carousel */}
        <div className="md:w-1/3 w-full mt-8 md:mt-0">
          <div className="carousel w-full rounded-lg shadow-lg relative h-80">
            {carouselImages.map((src, idx) => (
              <div
                key={idx}
                className={`carousel-item absolute w-full h-full transition-opacity duration-700 ${
                  idx === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={src}
                  alt={`About us ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Navigation buttons */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                  <button
                    onClick={() =>
                      setActive((active - 1 + carouselImages.length) % carouselImages.length)
                    }
                    className="btn btn-circle btn-xs"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() =>
                      setActive((active + 1) % carouselImages.length)
                    }
                    className="btn btn-circle btn-xs"
                  >
                    ❯
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;