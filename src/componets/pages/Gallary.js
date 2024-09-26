import React from "react";
import groupPhoto2024 from "../assets/BIAB2024/groupPhoto.jpg";
import photo1 from "../assets/BIAB2024/photo1.jpg";
import photo2 from "../assets/BIAB2024/photo2.jpg";
import photo3 from "../assets/BIAB2024/photo3.jpg";
import photo4 from "../assets/BIAB2024/photo4.jpg";
import photo5 from "../assets/BIAB2024/photo5.jpg";
import photo6 from "../assets/BIAB2024/photo6.jpg";
import photo7 from "../assets/BIAB2024/photo7.jpg";
import photo8 from "../assets/BIAB2024/photo8.jpg";

// Sample Data for the gallery
const galleryData = [
  {
    year: 2024,
    description:
      " Reflecting on a Transformative Experience: BUILD-IN-A-BOX LIBERIA 2024 Bootcamp, DAY ONE. On Wednesday, July 24, 2024, we launched the BUILD-IN-A-BOX Liberia Bootcamp. Today, we are thrilled to share the success of the BUILD-IN-A-BOX LIBERIA 2024 Bootcamp's first day! Young leaders gathered at the Innoignite Innovative Hub/Space at Matilda Newport Junior High School for an immersive entrepreneurial experience.Employing the design thinking BUILD model – Believe. Understand. Invent. Listen. Deliver. – participants tackled real community challenges with ingenuity and perseverance. This partnership with the African Leadership Academy empowered our young changemakers to cultivate vital entrepreneurial leadership skills and innovative solutions to address the root causes of some of Africa's old-aged problems. Special thanks to Innoignite for their invaluable support in making this event possible.",
    groupPhoto: groupPhoto2024,
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
  },
  {
    year: 2023,
    description:
      " Reflecting on a Transformative Experience: BUILD-IN-A-BOX LIBERIA 2024 Bootcamp, DAY ONE. On Wednesday, July 24, 2024, we launched the BUILD-IN-A-BOX Liberia Bootcamp. Today, we are thrilled to share the success of the BUILD-IN-A-BOX LIBERIA 2024 Bootcamp's first day! Young leaders gathered at the Innoignite Innovative Hub/Space at Matilda Newport Junior High School for an immersive entrepreneurial experience.Employing the design thinking BUILD model – Believe. Understand. Invent. Listen. Deliver. – participants tackled real community challenges with ingenuity and perseverance. This partnership with the African Leadership Academy empowered our young changemakers to cultivate vital entrepreneurial leadership skills and innovative solutions to address the root causes of some of Africa's old-aged problems. Special thanks to Innoignite for their invaluable support in making this event possible.",
    groupPhoto: groupPhoto2024,
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
  },
  {
    year: 2022,
    description:
      " Reflecting on a Transformative Experience: BUILD-IN-A-BOX LIBERIA 2024 Bootcamp, DAY ONE. On Wednesday, July 24, 2024, we launched the BUILD-IN-A-BOX Liberia Bootcamp. Today, we are thrilled to share the success of the BUILD-IN-A-BOX LIBERIA 2024 Bootcamp's first day! Young leaders gathered at the Innoignite Innovative Hub/Space at Matilda Newport Junior High School for an immersive entrepreneurial experience.Employing the design thinking BUILD model – Believe. Understand. Invent. Listen. Deliver. – participants tackled real community challenges with ingenuity and perseverance. This partnership with the African Leadership Academy empowered our young changemakers to cultivate vital entrepreneurial leadership skills and innovative solutions to address the root causes of some of Africa's old-aged problems. Special thanks to Innoignite for their invaluable support in making this event possible.",
    groupPhoto: groupPhoto2024,
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
  },
 
  {
    year: 2021,
    description: "2023 saw expanded collaborations and exciting new projects.",
    groupPhoto: "url-to-group-photo-2023.jpg",
    photos: [
      "url-to-photo-1-2023.jpg",
      "url-to-photo-2-2023.jpg",
      "url-to-photo-3-2023.jpg",
    ],
  },
];

// Gallery Component
const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Annual Camp Photos
      </h1>

      {/* Loop through each year's data */}
      {galleryData.map((yearData, index) => (
        <div key={index} className="mb-16">
          {/* Year and Description */}
          <h2 className="text-3xl font-semibold mb-4">{yearData.year}</h2>
          <p className="mb-4 text-gray-700">{yearData.description}</p>

          {/* Group Photo */}
          <div className="w-full mb-6">
            <img
              src={yearData.groupPhoto}
              alt={`Group photo of ${yearData.year}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Small Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {yearData.photos.map((photo, idx) => (
              <div key={idx} className="w-full h-48 overflow-hidden">
                <img
                  src={photo}
                  alt={`Photo ${idx + 1} of ${yearData.year}`}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
