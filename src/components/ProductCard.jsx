import { useState } from "react";

const ProductCard = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg shadow-lg cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      <div
        className={`w-full h-full rounded-lg transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
      className="absolute inset-0 flex flex-col items-center justify-center  rounded-lg bg-opacity-50"
      style={{
        backfaceVisibility: "hidden",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-90 p-4 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      {/* <span className="mt-4 text-white text-xl font-bold">{product.title}</span> */}
    </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#1D2130] text-white p-4 rounded-lg flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-300">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;