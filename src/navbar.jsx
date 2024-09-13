import React from "react"
import logo from "./assets/asset 2821b.svg";
import fb from "./assets/fb-logo.svg";
import insta from "./assets/instagram.svg";



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