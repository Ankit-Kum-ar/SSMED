import { ProductCard } from "../../../components"
import { products } from "../../../constant"

const OurSolution = () => {
  return (
    <section className="text-[#1D2130] py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="3"
                viewBox="0 0 72 3"
                fill="none"
            >
                <path d="M0 1.50049H72" stroke="#00796B" strokeWidth="2" />
            </svg>
            <h4 className="text-sm font-semibold uppercase text-neutral tracking-wider">
                Our Solutions
            </h4>
        </div>
        <h2 className="text-3xl font-bold text-[#1D2130] md:mb-4 mb-8">
          Innovative Products for Modern Healthcare
        </h2>
        <p className="text-lg text-[#1D2130] mb-8 md:block hidden">
            From ultrasound scanners to oxygen concentrators, discover our range of advanced, certified medical equipment built for performance and reliability.
        </p>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Button to explore all products */}
        <div className="flex justify-center mt-8">
            <button className="btn bg-[#00796B] border-[#0059b3] text-[#E0F2F1] hover:bg-[#004D40] hover:border-[#004D40]">
            Explore All Products
            </button>
        </div>
    </section>
  )
}

export default OurSolution
