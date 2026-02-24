import React from "react";

const FolderCard = ({ folder, onClick }) => {
  if (!folder) return null; // safety guard

  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer relative
        rounded-3xl overflow-hidden
        bg-[#112a4a]
        transition-all duration-500
        hover:-translate-y-4
        hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)]
      "
    >
      <img
        src={folder.coverImage?.url}
        alt={folder.name}
        loading="lazy"
        className="w-full h-[300px] object-fill transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold text-white">
          {folder.name}
        </h3>
      </div>
    </div>
  );
};

export default FolderCard;