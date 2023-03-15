import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useSelector } from 'react-redux';
import language from './../../../language/language';

const Footer = () => {
  const lg = useSelector((state) => state.language.language);
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2">
          <div className="w-full ml-8">
            <h4 className="font-bold mb-4 uppercase text-xl">
              {lg === 'en' ? language.contact.en : language.contact.vn}
            </h4>
            <p className="mb-2 text-lg">123 Main Street</p>
            <p className="mb-2 text-lg">KIM SINH, VN +84961294993</p>
            <p className="mb-2 text-lg">Email: phankimsinh20@gmail.com</p>
            <p className="mb-2 text-lg">Phone: (84) 456-7890</p>
          </div>
          <div class="w-full ">
            <h4 className="font-bold mb-4 uppercase text-2xl">
              {lg === 'en' ? language.about.en : language.about.vn}
            </h4>
            <p className="text-lg mb-2">
              {lg === 'en' ? language.aboutksshopvn.en : language.aboutksshopvn.vn}
            </p>
            <p className="mb-2 text-lg">
              {lg === 'en' ? language.aboutksshop.en : language.aboutksshop.vn}
            </p>
            <p className="mb-2 text-lg">
              {lg === 'en' ? language.activityRegulations.en : language.activityRegulations.vn}
            </p>
          </div>
          <div class="w-full  ">
            <h4 className="text-2xl font-bold mb-4 uppercase">
              {lg === 'en' ? language.Resolvecomplaints.en : language.Resolvecomplaints.vn}
            </h4>
            <p className="mb-1 text-lg">
              {lg === 'en' ? language.shoppingGuide.en : language.shoppingGuide.vn}
            </p>
            <p className="mb-1 text-lg">
              {lg === 'en' ? language.returnPlicy.en : language.returnPlicy.vn}
            </p>
            <p className="mb-1 text-lg">
              {lg === 'en' ? language.customerCare.en : language.customerCare.vn}
            </p>
            <p className="mb-1 text-lg">
              {lg === 'en' ? language.loadThePhone.en : language.loadThePhone.vn}
            </p>
          </div>
          <div className="w-full ">
            <h4 className="text-2xl font-bold mb- uppercase">
              {lg === 'en' ? language.folow.en : language.folow.vn}
            </h4>
            <ul className="mt-6">
              <li className="mr-4 mb-3">
                <Link
                  className="flex"
                  to="https://www.facebook.com/sinh.kim.7121614/"
                >
                  <BsFacebook />
                  <p className="ml-5 leading-4">Facebook</p>
                </Link>
              </li>
              <li className="mr-4 mb-3">
                <Link
                  className="flex"
                  to="https://www.facebook.com/sinh.kim.7121614/"
                >
                  <BsTwitter />
                  <p className="ml-5 leading-4">Twitter</p>
                </Link>
              </li>
              <li className="mr-4 mb-3">
                <Link
                  className="flex"
                  to="https://www.facebook.com/sinh.kim.7121614/"
                >
                  <BsInstagram />
                  <p className="ml-5 leading-4">Instagram</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
