import { useState } from "react";
import { X } from "lucide-react";
import images from "@/assets";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[1440px] mx-auto">
        {Object.values(images).map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-black/80 z-40" />

          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="z-50" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full Size"
              className="max-w-full max-h-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
