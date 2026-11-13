import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center font-outfit">
      <div className="w-full max-w-60 h-auto flex flex-col text-black rounded-lg m-4 p-3 text-[15px] shadow-2xl bg-white gap-2">
        <Image
          src={"/images/image-qr-code.png"}
          loading="eager"
          alt={"qr-code-image"}
          width={500}
          height={500}
          className="w-full h-2/3 rounded-lg"
        />
        <div className="flex flex-col gap-4 text-center p-2 ">
          <h1 className="font-bold text-[16px] text-center leading-5 text-slate-700">
            Improve your front-end skills by building projects
          </h1>
          <p className="mb-3 text-xs text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      
    </main>
  );
};

export default HomePage;
