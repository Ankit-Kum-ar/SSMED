import { collaborations } from "../../../constant";

const OurCollaborations = () => (
  <section className="bg-[#F8FAFC] p-12 md:p-20 font-roboto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C3A4B] mb-10">
      Our Collaborations
    </h2>
    <div className="flex md:flex-row flex-col items-center justify-center gap-6">
      {collaborations.map((collab, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-56 transition-transform hover:scale-105"
        >
          <img
            src={collab.logo}
            alt={collab.name}
            className="h-16 object-contain mb-4"
            loading="lazy"
          />
          <p className="text-center text-sm text-[#2C3A4B] font-medium">{collab.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurCollaborations;