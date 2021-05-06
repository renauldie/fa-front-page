import React from 'react';

import Link from 'next/link';

import Instagram from "public/images/instagram.svg";

import Twitter from "public/images/twitter.svg";

import Facebook from "public/images/facebook.svg";

import Youtube from "public/images/youtube.svg";

import Whatsapp from "public/images/whatsapp.svg";

export default function footer() {
	function submit() {}

  return (
    <footer className="container px-8 mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h6 className="text-white">Faculty</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-blue-400 hover:underline">
                  Computer Science
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-blue-400 hover:underline">
                  Economy and Bussiness
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <a className="text-indigo-500 hover:text-blue-400 hover:underline">
                  Sains and Technology
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 sm:w-1/3 mb-8 md:mb-0">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Ringroad Utara <br />
            Basement 4 Block L<br />
            Universitas Amikom Yogyakarta<br />
          </p>
        </div>
        <div className="w-full md:w-2/6 mb-8 md:mb-0 relative">
          <h6 className="text-white text-right">Promotions</h6>
          <p className="mt-4 text-indigo-500 text-right">
            Let's find us for more information
          </p>
          <div className="absolute mt-5 right-0 flex">
            <div className="mx-4 cursor-pointer">
              <Link href="https://www.instagram.com/forumasisten/">
                  <Instagram width={20} height={20} fill={'red'}/>
              </Link>
            </div>
            <div className="mx-4 cursor-pointer">
              <Link href="https://twitter.com/fa_amikom">
                  <Twitter width={20} height={20} />
              </Link>
            </div>
            <div className="mx-4 cursor-pointer">
              <Link href="https://www.youtube.com/channel/UCx4VyiK0AFyx_HNFXyfxz-Q/videos">
                  <Youtube width={20} height={20} />
              </Link>
            </div>
            <div className="mx-4 cursor-pointer">
              <Link href="https://web.facebook.com/forumasisten/?_rdc=1&_rdr">
                  <Facebook width={20} height={20} fill={'#3b5998'} />
              </Link>
            </div>
            <div className="mx-4 cursor-pointer">
              <Link href="https://bit.ly/hubungifa">
                  <Whatsapp width={20} height={20} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2021 Copyright IT Support Team
        </p>
      </div>
    </footer>
  );
}
