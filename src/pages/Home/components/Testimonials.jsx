import { testimonials } from "../../../constant"

const Testimonials = () => {
  return (
    <section className="bg-[#E0F2F1] flex flex-col items-center justify-center py-16 px-4 font-roboto transition">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#004D40] opacity-90 mb-4">
            Real Stories. Real Impact.
        </h2>
        <p className="text-[#004D40] opacity-70 text-center mb-12 max-w-3xl">
            Hear from our healthcare partners about how SS Medical’s solutions are transforming patient care.
        </p>
        <div className="w-full flex flex-col gap-8 md:flex-row md:gap-6 justify-center items-center">
            {testimonials.map((t, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col items-center max-w-sm w-full group"
                >
                    <div className="relative mb-4">
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                        />
                        <span className="absolute top-0 right-0 bg-[#00796B] text-[#FFF3CD] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white group-hover:scale-110 transition-transform">
                            &#8220;
                        </span>
                    </div>
                    <p className="text-[#37474F] text-center mb-6">{t.quote}</p>
                    <div className="text-center">
                        <div className="font-bold text-lg text-[#004D40]">{t.name}</div>
                        <div className="text-[#607D8B] text-sm">{t.role}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials
