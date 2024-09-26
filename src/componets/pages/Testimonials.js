import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I never imagined I could start my own business, but BUILD-IN-A-BOX gave me the skills and confidence to launch my venture.",
      name: "Student Name 1",
    },
    {
      quote: "Thanks to the education outreach program, I’m now in college and pursuing my dream of becoming a business leader.",
      name: "Student Name 2",
    },
    {
      quote: "BUILD-IN-A-BOX gave me the opportunity to collaborate with like-minded people and create lasting impact in my community.",
      name: "Student Name 3",
    },
  ];

  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // UseEffect to handle automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlider();
    }, 5000); // Slide every 5 seconds for a slower transition

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const moveSlider = () => {
    setPosition((prevPosition) => prevPosition - 100);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    // Infinite loop logic: Jump to the real first or last testimonial without transition
    if (position === -(testimonials.length * 100)) {
      setIsTransitioning(false);
      setPosition(0); // Reset to the first testimonial (no transition)
    } else if (position === 100) {
      setIsTransitioning(false);
      setPosition(-(testimonials.length - 1) * 100); // Jump to the last testimonial (no transition)
    }
  };

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>

        <div className="relative w-full overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out ${
              !isTransitioning ? "duration-0" : "duration-1000"
            }`}
            style={{ transform: `translateX(${position}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Clone the last testimonial at the beginning */}
            <div className="min-w-full p-4">
              <div className="bg-white rounded-lg shadow-md p-6 mx-4">
                <p className="italic">"{testimonials[testimonials.length - 1].quote}"</p>
                <p className="font-semibold mt-4">— {testimonials[testimonials.length - 1].name}</p>
              </div>
            </div>

            {/* Render the original testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full p-4">
                <div className="bg-white rounded-lg shadow-md p-6 mx-4">
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="font-semibold mt-4">— {testimonial.name}</p>
                </div>
              </div>
            ))}

            {/* Clone the first testimonial at the end */}
            <div className="min-w-full p-4">
              <div className="bg-white rounded-lg shadow-md p-6 mx-4">
                <p className="italic">"{testimonials[0].quote}"</p>
                <p className="font-semibold mt-4">— {testimonials[0].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
