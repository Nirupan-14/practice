import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { PiCopyrightLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";





import amexImg from "../assects/footer/american-express.png";
import masterImg from "../assects/footer/card.png";
import visaImg from "../assects/footer/visa.png";
import maestoImg from "../assects/footer/card (1).png";

export default function Footer() {



  const [footerLinks, setFooterLink] = useState({
    quickLink: [
      { name: "quick links", link: "www.nothing.com" },
      { name: "About Us", link: "www.nothing.com" },
      { name: "Contact Us", link: "www.nothing.com" },
      { name: "Career", link: "www.nothing.com" },
      { name: "Check-List", link: "www.nothing.com" },
    ],
    ImportantLinks: [
      { name: "Important links", link: "www.nothing.com" },
      { name: "Payment Policy", link: "www.nothing.com" },
      { name: "Privacy Policy", link: "www.nothing.com" },
      { name: "Cookie Policy", link: "www.nothing.com" },
      { name: "Terms & Conditions", link: "www.nothing.com" },
    ],
    quickLink1: [
      { name: "quick links", link: "www.nothing.com" },
      { name: "Visit Example", link: "www.nothing.com" },
      { name: "Visit Example", link: "www.nothing.com" },
      { name: "Visit Example", link: "www.nothing.com" },
      { name: "Visit Example", link: "www.nothing.com" },
    ],
  });
  return (
    <div className='pt-8 '>
      <div className=" w-full bg-black text-white">
      <div className=" w-full bg-[#272727]  border-b border-[#329681] pt-5">
        <div className="  mx-auto flex items-center pb-4 gap-5 sm:gap-0 md:pl-16 md:pr-16 pl-4 pr-4">
          
          <div className=" w-5/12 space-y-2 md:pt-5 pt-0 text-start ">
            <p className=" md:text-5xl text-4xl pb-2 font-bold">Logo</p>
            <div className=" flex gap-2">
              <FaLocationDot className=" pt-1" />
              <p className=" text-sm">
                10-14 Perent Road,
                <br /> Colombo, W11 1EN <br />
                Srilanka.
              </p>
            </div>
            <div className=" flex  gap-2">
              <FaPhone className=" pt-1" />
              <p className=" text-sm">0205 334 3671</p>
            </div>
            <div className=" flex  gap-2">
              <IoMdMail className=" pt-1" />
              <a href="samplemail@gmail.com">
                <p className=" text-sm">samplemail@gmail.com</p>
              </a>
            </div>
          </div>

          <div className=" w-7/12 grid grid-cols-2 md:grid-cols-3 justify-around text-start font-semibold">
            <div className="">
              {footerLinks.quickLink.map((item, index) => {
                if (index === 0) {
                  return (
                    <p key={index} className="  text-sm uppercase">
                      {item.name}
                    </p>
                  );
                } else {
                  return (
                    <a key={index} href={item.link}>
                      <p className=" w-fit text-xs pt-2 hover:text-white text-gray-300 ">
                        {item.name}
                      </p>
                    </a>
                  );
                }
              })}
            </div>
            <div className="">
              {footerLinks.ImportantLinks.map((item, index) => {
                if (index === 0) {
                  return (
                    <p key={index} className=" text-sm  uppercase">
                      {item.name}
                    </p>
                  );
                } else {
                  return (
                    <a key={index} href={item.link}>
                      <p className="w-fit  text-xs pt-2 hover:text-white text-gray-300 ">
                        {item.name}
                      </p>
                    </a>
                  );
                }
              })}
            </div>
            <div className=" sm:hidden"></div>
            <div className=" mt-4 sm:mt-0">
              {footerLinks.quickLink1.map((item, index) => {
                if (index === 0) {
                  return (
                    <p key={index} className=" text-sm  uppercase">
                      {item.name}
                    </p>
                  );
                } else {
                  return (
                    <a key={index} href={item.link}>
                      <p className="w-fit    text-xs mt-2 hover:text-white text-gray-300 ">
                        {item.name}
                      </p>
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full bg-[#000000] ">
        <div className="  mx-auto md:flex md:items-center md:justify-between pb-4 py-5 sm:gap-0 md:pl-16 md:pr-16 pl-4 pr-4">
          <div className="md:w-full w-full">
            <p className=" text-2xl font-semibold pb-2">Join Our Newsletter</p>
            <div className=" flex gap-2">
              <input
                type="text"
                className=" outline-none bg-[#262626] text-sm py-1 rounded-md px-4 w-full"
                placeholder="Enter e-mail address"
              />
              <button className=" bg-white text-black hover:bg-gray-300 duration-200 text-xs font-semibold px-3 rounded-md border-none">
                SUBSCERIBE
              </button>
            </div>
            <p className=" text-justify text-xs pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur beatae dolor, ab possimus fugit eum hic perferendis vel
              veniam quaerat, assumenda veritatis cumque officiis at provident
              deleniti harum saepe sed.Lorem ipsum dolotatis cumque officiis at
              provident deleniti harum saepe sed.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur beatae dolor, ab possimus
              fugit eum hic perferendis vel veniam quaerat, assumenda veritatis
              cumque officiis at provident deleniti harum saepe sed.
            </p>
          </div>
          <div className=" w-full md:mt-5 mt-0 pt-0  md:w-5/12 flex justify-start md:justify-end">
            <div className="">
              <ul className=" flex items-center justify-end gap-3">
                <li>
                  <img className=" w-16" src={visaImg} alt="" />
                </li>
                <li>
                  <img className=" w-16" src={amexImg} alt="" />
                </li>
                <li>
                  <img className=" w-16" src={masterImg} alt="" />
                </li>
                <li>
                  <img className=" w-16" src={maestoImg} alt="" />
                </li>
              </ul>
              <ul className=" flex  items-center justify-end gap-3">
                <li>CONTACT US </li>
                <li>|</li>
                <li>
                  <a href="www.nothing.com">
                    {" "}
                    <FaFacebookF className=" hover:text-gray-500" />
                  </a>
                </li>
                <li>
                  <a href="www.nothing.com">
                    {" "}
                    <RiTwitterXFill className=" hover:text-gray-500" />
                  </a>
                </li>
                <li>
                  <a href="www.nothing.com">
                    {" "}
                    <TfiYoutube className=" hover:text-gray-500" />
                  </a>
                </li>
                <li>
                  <a href="www.nothing.com">
                    {" "}
                    <FaPinterest className=" hover:text-gray-500" />
                  </a>
                </li>
                <li>
                  <a href="www.nothing.com">
                    {" "}
                    <FaWhatsapp className=" hover:text-gray-500" />
                  </a>
                </li>
              </ul>
              <div className=" flex items-center gap-2 mt-2 justify-end">
                <PiCopyrightLight />
                <p className=" text-xs">
                  {" "}
                  2009 - 2023 Sample lorim ipsu. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

