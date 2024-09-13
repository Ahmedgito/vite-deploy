import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination } from "swiper/modules";
import logo from "./assets/asset 2821b.svg";
import fb from "./assets/fb-logo.svg";
import insta from "./assets/instagram.svg";
import atmImage from "./assets/atmimage.png";
import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";
import Slide3 from "./assets/slide3.png";
import Asset2 from "./assets/asset 2.png";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import './App.css'; 
function App() {
  
  //swiper content
  const images = [Slide1, Slide2, Slide3];
  //swiper captions
  const captions = [
    "Check balances, withdraw, or deposit money effortlessly.",
    "Our SMART ATM offers Crypto, Bill Pay, and more. Enjoy credit and debit card banking functionalities for tasks like cashing checks and paying bills.",
    "Send or receive money worldwide with ease."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex); // Update the current slide index
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Monitor screen width to determine if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change breakpoint if necessary
    };

    // Call the function on component mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center sticky z-50 top-0 text-black py-2 px-8 md:px-32 bg-white drop-shadow-md relative">
        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={toggleDrawer} className="text-black focus:outline-none">
            {isDrawerOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Company Logo" className="w-13 hover:scale-105 transition-all" />
        </a>

        {/* Social Media Icons for Mobile Devices */}
        <div className="flex gap-4 xl:hidden">
          <a href="#" className="hover:scale-110 transition-all">
            <img src={fb} alt="Facebook" className="w-3 me-2" />
          </a>
          <a href="#" className="hover:scale-110 transition-all">
            <img src={insta} alt="Instagram" className="w-6" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex items-center gap-2 font-semibold text-base">
          {["Home", "Our Products", "Our Services", "Merch", "Moo's News", "About Us", "Careers", "Contact Us"].map((item, index) => (
            <li key={index} className="p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
              {item === "Our Services" ? (
                <button onClick={() => { }} className="flex items-center gap-2 focus:outline-none">
                  {item}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden xl:flex gap-4">
          <a href="#" className="hover:scale-110 transition-all">
            <img src={fb} alt="Facebook" className="w-4 me-4" />
          </a>
          <a href="#" className="hover:scale-110 transition-all">
            <img src={insta} alt="Instagram" className="w-8" />
          </a>
        </div>
      </header>

      {/* Drawer Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-75 z-40 transition-transform transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="w-64 h-full bg-white  overflow-y-auto">
          <button onClick={toggleDrawer} className="text-black text-2xl absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col items-start gap-4 font-semibold text-base mt-16">
            {["Home", "Our Products", "Our Services", "Merch", "Moo's News", "About Us", "Careers", "Contact Us"].map((item, index) => (
              <li key={index} className="w-full p-3 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                {item === "Our Services" ? (
                  <button onClick={() => { }} className="flex items-center gap-2 focus:outline-none w-full">
                    {item}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* New Section Below Navbar */}
      <section className="bg-red-600 text-white flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-32">
        {/* Left Side: Image */}
        <div className="relative flex-shrink-0 mb-8 md:mb-0">
          <img src={atmImage} alt="ATM Services" className="w-72 h-72 object-cover rounded-full shadow-lg" />
          <div className="absolute top-0 left-0 w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.656 0 3 1.344 3 3 0 1.657-1.344 3-3 3-1.656 0-3-1.343-3-3 0-1.656 1.344-3 3-3zM4.93 4.93a10.002 10.002 0 0114.142 14.142A10.002 10.002 0 014.93 4.93z" />
            </svg>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="max-w-lg text-center md:text-left md:ml-6">
          <h1 className="text-4xl font-bold mb-4">Money Services</h1>
          <p className="text-xl mb-6">
            Simplify your financial transactions with our range of services, including convenient ATM access, reliable Western Union transfers, and efficient KIRV ATM solutions.
          </p>
          <button className="bg-red-600 text-white border border-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-red-600 transition-all">
            Nearest Store
          </button>
        </div>
      </section>

      <section className={`py-16 ${isMobile ? "" : "flex justify-center items-center"}`}>
  {isMobile ? (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={handleSlideChange} // Attach the handler here
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Centered text, dynamic with the slides */}
            <div className="caption-container mb-5">
              <p className="text-center text-gray-500 bold  text-slider mx-5">{captions[index]}</p> 
            </div>

            {/* Image with fixed size */}
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-72 h-auto" // Fix the size of the image (width: 18rem, height: auto)
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets fixed at the bottom */}
      <div className="swiper-pagination"></div>
    </>
  ) : (
    <>
      <img
        src={Asset2} // large screen image
        alt="Large Screen Image"
        className="h-auto"
        style={{ width: "auto", maxWidth: "100%" }}
      />
    </>
  )}
</section>



    </div>
  );
}

export default App;
