import { Building, Handshake, Hospital, Users } from 'lucide-react';

const OurReach = () => {
  return (
    <section className="bg-[#1F78F226] py-10 px-6 md:px-20 font-roboto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
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
                        Our Presence
                    </h4>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D2130] mb-4">
                    Our Reach
                </h2>
                <p className="text-lg text-[#1D2130] mb-16">
                    55,000+ Installations Across India
                </p>
                <ul className="space-y-12">
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 p-2 bg-[#2F80ED] text-[#FFEBB9] flex items-center justify-center rounded-full">
                            <Building />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1D2130]">
                                Global Offices
                            </h4>
                            <p className="text-sm text-[#1D2130]">
                                Established offices across Asia, Europe, Africa, and the Americas.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 p-2  bg-[#2F80ED] text-[#FFEBB9] flex items-center justify-center rounded-full">
                            <Handshake />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1D2130]">
                                 International Partnerships
                            </h4>
                            <p className="text-sm text-[#1D2130]">
                                Collaborating with global distributors and healthcare providers.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 p-2 bg-[#2F80ED] text-[#FFEBB9] flex items-center justify-center rounded-full">
                            <Hospital />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1D2130]">
                                 20+ Countries Served
                            </h4>
                            <p className="text-sm text-[#1D2130]">
                                Delivering trusted medical solutions in over 20 nations worldwide.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-8 h-8 p-2 bg-[#2F80ED] text-[#FFEBB9] flex items-center justify-center rounded-full">
                            <Users />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1D2130]">
                                 Legacy of Trust Since 1941
                            </h4>
                            <p className="text-sm text-[#1D2130]">
                                Backed by decades of innovation and quality in med-tech.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right Image */}
            <div className="md:w-1/3 hidden md:block">
            <img
                src="/young-doctor.png"
                alt="Young Doctor"
                className="rounded-lg shadow-lg"
            />
            </div>
        </div>
    </section>
  )
}

export default OurReach
