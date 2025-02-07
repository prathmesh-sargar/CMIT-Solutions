import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards =[
    {
      "image": "icons/box.png",
      "headline": "Service 1",
      "description": "Reliable packaging and delivery services."
    },
    {
      "image": "icons/heart.png",
      "headline": "Service 2",
      "description": "Premium quality products with great care."
    },
    {
      "image": "icons/service.png",
      "headline": "Service 3",
      "description": "Efficient and fast service for all customers."
    },
    {
      "image": "icons/ds.png",
      "headline": "Service 4",
      "description": "Expert solutions tailored to your needs."
    },
    {
      "image": "icons/customer-service.png",
      "headline": "Service 5",
      "description": "24/7 customer support for any queries."
    },
    {
      "image": "icons/server.png",
      "headline": "Service 6",
      "description": "Secure and high-performance cloud solutions."
    },
    {
      "image": "icons/www.png",
      "headline": "Service 7",
      "description": "Reliable web hosting and domain services."
    },
    {
      "image": "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
      "headline": "Service 8",
      "description": "Professional photography and media solutions."
    },
    {
      "image": "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
      "headline": "Service 9",
      "description": "High-quality visuals and creative solutions."
    },
    {
      "image": "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
      "headline": "Service 10",
      "description": "Exceptional media services for every need."
    }
]


  const prevCard = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const nextCard = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-all duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] p-4">
              <div className="card border rounded-lg shadow-lg bg-slate-100 hover:scale-110 duration-300 ">
                <img src={card.image} alt={card.headline} className="w-[250px] h-48  rounded-t-lg m-auto" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.headline}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevCard}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextCard}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
