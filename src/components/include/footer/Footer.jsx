import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2">
          
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">Email: info@example.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">Email: info@example.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">Email: info@example.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4"><Link to="/">Facebook</Link></li>
              <li className="mr-4"><Link to="/">Twitter</Link></li>
              <li className="mr-4"><Link to="/">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
