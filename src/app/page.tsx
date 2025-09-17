import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full max-w-[100vw] bg-linear-to-b from-black/0 to-black to-70%">
      <div className="absolute -z-1 w-full h-full">
        {/* CHANGE IMAGE FOR PRODUCTION */}
        <div className="bg-[url(https://www.sportsvideo.org/wp-content/uploads/2019/01/ES-Arlington-Arena-Overhead-Wide.jpg)] bg-cover bg-center h-full"></div>
      </div>
      {/* valorant text + players */}
      <div className="flex items-center justify-center h-[100vh]">
        <div className="flex flex-col">
          <h1 className="font-montserrat font-black text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8.5rem]">
            VALORANT
          </h1>
          <h1 className="font-montserrat font-black text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8.5rem] -mt-10 sm:-mt-15 md:-mt-20 lg:-mt-28">
            VALORANT
          </h1>
        </div>
      </div>
    </div>
  );
}
