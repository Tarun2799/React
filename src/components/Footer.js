import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">jhamb's court</h2>
            <p className="text-sm">
              Delivering delicious food straight to your doorsteps with just a few clicks.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-gray-400">Home</Link></li>
              {/* <li className="mb-2"><Link to="/" className="hover:text-gray-400">Menu</Link></li> */}
              <li className="mb-2"><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-gray-400">Contact Us📞</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2"><a href="tel:+1234567890" className="hover:text-gray-400">+1 234 567 890</a></li>
              <li className="mb-2"><a href="mailto:info@foodie.com" className="hover:text-gray-400">info@foodie.com</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">1234 Foodie St, Suite 100, Food City</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-sm">&copy; 2024 jhamb's court. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
