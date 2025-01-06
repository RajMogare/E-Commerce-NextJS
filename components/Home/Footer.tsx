import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            wdw shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            fuga repudiandae error blanditiis. Amet expedita reprehenderit
            accusamus sed suscipit quo!
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+00) 1234 5678 90 - info@example.com
          </p>
        </div>

        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About us</p>
          <p className="footer_link">Privacy Policy</p>
          <p className="footer_link">Return Policy</p>
          <p className="footer_link">Drop Shippping</p>
          <p className="footer_link">Shiping Policy</p>
        </div>

        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Orders</p>
          <p className="footer_link">Account Detail</p>
          <p className="footer_link">Track Orders</p>
        </div>

        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Sellers</p>
          <p className="footer_link">Latest Products</p>
          <p className="footer_link">Sale Products</p>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">Copywrite@ 2025</p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
