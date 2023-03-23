import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useSelector } from 'react-redux';
import language from './../../../language/language';
import x from "../../../img/x.png";
import y from "../../../img/y.png";
import z from "../../../img/z.png";
import t from "../../../img/t.png";

const Footer = () => {
  const lg = useSelector((state) => state.language.language);
  return (
    <footer className="mt-4 pt-2">
      <div className="grid grid-cols-4">
          <div className="flex flex-col items-center">
            <img alt="img" src={x} width={200}></img>
            <span className="text-2xl font-medium py-2 ">siêu sale đến 100%</span>
          </div>
          <div className="flex flex-col items-center">
            <img alt="img" src={y} width={200}></img>
            <span className="text-2xl font-medium py-2 ">siêu sale đến 100%</span>
          </div>
          <div className="flex flex-col items-center">
            <img alt="img" src={z} width={200}></img>
            <span className="text-2xl font-medium py-2 ">siêu sale đến 100%</span>
          </div>
          <div className="flex flex-col items-center">
            <img alt="img" src={t} width={200}></img>
            <span className="text-2xl font-medium py-2 ">siêu sale đến 100%</span>
          </div>
      </div>
      <div className="w-full bg-slate-400">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2">
          <div className="w-full ml-8">
            <h4 className="font-bold mb-4 uppercase text-xl mt-2 pt-1">
              {lg === 'en' ? language.contact.en : language.contact.vn}
            </h4>
            <p className="mb-2 text-lg">123 Main Street</p>
            <p className="mb-2 text-lg">KIM SINH, VN +84961294993</p>
            <p className="mb-2 text-lg">Email: phankimsinh20@gmail.com</p>
            <p className="mb-2 text-lg">Phone: (84) 456-7890</p>
          </div>
          <div className="w-full ">
            <h4 className="font-bold mb-4 uppercase text-2xl mt-2 pt-1">
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
          <div className="w-full  ">
            <h4 className="text-2xl font-bold mb-4 uppercase mt-2 pt-1">
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
            <h4 className="text-2xl font-bold mb- uppercase mt-2 pt-1">
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
