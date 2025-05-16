import { testimonials } from "../../../constant"

const Testimonials = () => {
  return (
    <section className="bg-[#1F78F226] flex flex-col items-center justify-center py-16 px-4 font-roboto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#171717] opacity-80 mb-4">
            Real Stories. Real Impact.
        </h2>
        <p className="text-[#171717] opacity-60 text-center mb-12 max-w-3xl">
            Hear from our healthcare partners about how SS Medical’s solutions are transforming patient care.
        </p>
        <div className="w-full flex flex-col gap-8 md:flex-row md:gap-6 justify-center items-center">
            {testimonials.map((t, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-sm w-full"
                >
                    <div className="relative mb-4">
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                        />
                        <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white">
                            &#8220;
                        </span>
                    </div>
                    <p className="text-gray-600 text-center mb-6">{t.quote}</p>
                    <div className="text-center">
                        <div className="font-bold text-lg text-[#2C3A4B]">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials
