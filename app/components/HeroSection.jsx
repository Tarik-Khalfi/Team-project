import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-image  bg-no-repeat md:bg-cover bg-right-top lg:h-[80vh] h-[100vh]">
      <div className="flex flex-row  justify-between container mx-auto px-10 pt-[44px]">
        <div className="font-[600] text-[52px] leading-[52px] text-[#F5F5F5]">
          Team{" "}
          <span className="font-[700] text-[50px] leading-[50px] text-[#5468E7]">
            .
          </span>
        </div>
        <div className="md:flex md:flex-row justify-between space-x-5  items-center hidden">
          <p className="text-[#F5F5F5] underline-offset-2 underline font-[500] text-[16px] leading-[24px]">
            Product
          </p>
          <p className="text-[#F5F5F5] underline-offset-2 underline font-[500] text-[16px] leading-[24px]">
            Blog
          </p>
          <p className="text-[#F5F5F5] underline-offset-2 underline font-[500] text-[16px] leading-[24px]">
            Support
          </p>
          <p className="text-[#F5F5F5] underline-offset-2 underline font-[500] text-[16px] leading-[24px]">
            Log In
          </p>
          <button className="text-[#F5F5F5] font-[400] text-[18px] leading-[27px] py-[10px] px-[44px] bg-[#5468e7] bg-opacity-50 rounded-[4px]">
            Get Access
          </button>
        </div>
      </div>
      <div className="pt-[160px] flex flex-col container mx-auto px-10">
        <div>
          <h1 className="text-[50px] font-[700] text-[#f5f5f5f5] leading-[64px]">
            Instant collaboration <br />
            for remote teams
          </h1>
          <p className="text-[18px] font-[400] leading-[27px] text-[#f5f5f5]">
            All-in-one place for your remote team to <br /> chat, collaborate
            and track project progress.
          </p>
        </div>
        <div className="flex md:flex-row  flex-col md:space-x-10 space-y-5 md:space-y-0  pt-[56px]">
          <input
            type="text"
            className="px-[16px] py-[11px] text-[#7676B2] rounded-[4px]"
            placeholder="Email"
          />
          <button className="text-[#F5F5F5] font-[400] text-[18px] leading-[27px] py-[10px] px-[44px] bg-[#5468e7] rounded-[4px]">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
