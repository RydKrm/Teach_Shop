import React, { useEffect, useState } from "react";

const GallerySection = () => {
    const [reviews, setReviews] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetch('https://thread-zone-server-abu-sahad.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className="my-20">
            <div className="relative w-full max-w-screen-xl mx-auto">
                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-900 shadow-md text-white flex items-center justify-center rounded-full cursor-pointer">
                    &lt;
                </button>
                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-900 shadow-md text-white flex items-center justify-center rounded-full cursor-pointer">
                    &gt;
                </button>
                <div className="flex transition-transform transform ease-in-out duration-300">
                    {reviews.slice(currentImageIndex, currentImageIndex + 3).map((review, index) => (
                        <div
                            key={index}
                            className={`w-full max-w-lg p-4 shadow splide__slide ${index === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        >
                            <img src={review.image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
