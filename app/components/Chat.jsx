import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <div className="flex lg:flex-row  flex-col-reverse md:flex-col-reverse container mx-auto lg:pl-10  md:pl-0 pl-5 lg:justify-between lg:items-center relative  md:px-10 md:pt-[80px]">
      <div className="flex flex-col">
        <h1 className="text-[50px] font-[700] leading-[64px] text-[#232340]">
          Chats for your
          <br /> distributed teams
        </h1>
        <p className="text-[18px] font-[400] leading-[27px] text-[#232340] text-opacity-90">
          Team combines the immediacy of real-time chat <br /> with an email
          threading model. With Team, you can <br />
          catch up on important conversations while ignoring <br />
          irrelevant ones.
        </p>
        <div className="flex flex-row items-center space-x-5 ">
          <p className="font-[500] text-[16px] text-[#5468E7] underline underline-offset-4">
            {" "}
            Learn More
          </p>
          <Image src="arrowRight.svg" width={40} height={40} />
        </div>
      </div>
      <Image
        src="/mockup.png"
        height={600}
        width={900}
        alt="image"
        className=" "
      />
    </div>
  );
};

export default Chat;
