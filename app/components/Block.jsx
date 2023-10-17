import Image from "next/image";
import React from "react";

const Block = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col lg:container mx-auto lg:px-10  justify-between md:px-0 px-5  lg:items-center pt-[120px]">
        <Image
          src="/woman.png"
          width={660}
          height={660}
          className="md:w-[400px] md:h-[500px] lg:h-[660px] lg:w-[660px] mr-auto"
        />
        <div className="flex flex-col space-y-10 ml-auto">
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
      </div>
      <div className="flex md:flex-row-reverse flex-col lg:container mx-auto lg:px-10  md:px-0 px-5 justify-between  lg:items-center pt-[120px]">
        <Image
          src="/woman2.png"
          width={660}
          height={660}
          className="md:w-[400px] md:h-[500px] lg:h-[660px] lg:w-[660px]"
        />
        <div className="flex flex-col space-y-10">
          <h1 className="text-[50px] font-[700] leading-[64px] text-[#232340]">
            Choose how you <br /> want to work
          </h1>
          <p className="text-[18px] font-[400] leading-[27px] text-[#232340] text-opacity-90">
            In Team, you’ve got all the flexibility to work when, <br /> where
            and how it’s best for you. You can easily chat,
            <br /> send audio and video clips, or hop on a huddle to <br />
            talk things out live.
          </p>
          <div className="flex flex-row items-center space-x-5 ">
            <p className="font-[500] text-[16px] text-[#5468E7] underline underline-offset-4">
              {" "}
              Learn More
            </p>
            <Image src="arrowRight.svg" width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="flex lg:container md:flex-row flex-col md:px-0 px-5 mx-auto lg:px-10  justify-between  items-center pt-[120px]">
        <Image
          src="/laptop.png"
          width={660}
          height={660}
          className="md:w-[400px] md:h-[600px] lg:h-[660px] lg:w-[660px]"
        />
        <div className="flex flex-col space-y-10">
          <h1 className="lg:text-[50px] text-[50px] font-[700] leading-[64px] text-[#232340]">
            Move faster with <br />
            your Team tools
          </h1>
          <p className="text-[18px] font-[400] leading-[27px] text-[#232340] text-opacity-90">
            With your other work apps connected to Team, you <br /> can work
            faster by switching tabs less. And with <br /> powerful tools like
            Workflow Builder, you can <br /> automate away routine tasks.
          </p>
          <div className="flex flex-row items-center space-x-5 ">
            <p className="font-[500] text-[16px] text-[#5468E7] underline underline-offset-4">
              {" "}
              Learn More
            </p>
            <Image src="arrowRight.svg" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
