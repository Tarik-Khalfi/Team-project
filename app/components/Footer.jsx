import React from "react";

const Footer = () => {
  return (
    <div className="mt-[252px] bg-[#232340]">
      <div className="container mx-auto px-10 flex lg:flex-row md:flex-col flex-col gap-[25px] pt-[95px] justify-between">
        <div className="flex flex-col">
          <p className="font-[600] text-[52px] leading-[52px] text-[#F5F5F5]">
            Team
            <span className="font-[700] text-[50px] leading-[50px] text-[#5468E7]">
              .
            </span>
          </p>
          <p className="font-{400] text-[14px] text-[#F5F5F5]">
            Collabortion platform <br /> for modern team
          </p>
        </div>
        <div className="flex lg:flex-row  md:flex-wrap gap-[90px] flex-col">
          <div className="flex flex-col space-y-4">
            <p className="font-[400] text-[24px] leading-[30px] text-[#5468E7]">
              Company
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">Product</p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">Blog</p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">Support</p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-[400] text-[24px] leading-[30px] text-[#5468E7]">
              Features
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              Screen Sharing
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              OS & Android
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              File Sharing
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              User Managmenet
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-[400] text-[24px] leading-[30px] text-[#5468E7]">
              Contact Us
              <p className="font-[400] text-[14px] text-[#F5F5F5]">
                info@teamapp.com
              </p>
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              1-800-200-300
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              1010 Sunset Blv. <br /> Palo Alto, California
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-[400] text-[24px] leading-[30px] text-[#5468E7]">
              Stay up to date
            </p>
            <p className="font-[400] text-[14px] text-[#F5F5F5]">
              Subscribe to our Newseller
            </p>
            <input
              type="text"
              className="px-[16px] py-[11px] text-[#7676B2] rounded-[4px] bg-[#f1f5] bg-opacity-90"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto  px-10 font-[400] text-[14px] text-[#F5F5F5] py-[40px]">
        <p>@copyright Team Inc,</p>
      </div>
    </div>
  );
};

export default Footer;
