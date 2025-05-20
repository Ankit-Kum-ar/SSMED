import { useState } from "react";

const ProductCard = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg shadow-lg cursor-pointer"
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
          className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-white text-xl font-bold rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {product.title}
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