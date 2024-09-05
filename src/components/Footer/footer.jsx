import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Team</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
