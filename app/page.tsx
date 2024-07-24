import Image from "next/image";

export default function Home() {
  return (
   <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
   <div className="absolute right-10 md:right-40 z-10 bottom-0">
    <Image src='/assets/MoustacheMan.png' alt="MoustacheMan" width={560} height={560} className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"/>
   </div>
   <Image src='/assets/top-left-img.png' alt="paint" width={230} height={230} className="absolute left-0 top-0"/>

    <div className="flex flex-col gap-3 ml-40 pt-20">
      <h1 className="text-[50px] text-white max-w-[500px]">Tranforming ideas into <span className="text-red-500">Digital Reality</span></h1>
      <p className="text-gray-200 md:text-gray-400 md:pb-2 mb-10 max-w-[400px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quaerat praesentium. Nobis quisquam hic optio doloremque tempora voluptatem aperiam in voluptate. Quis delectus quidem eligendi ullam ipsa ratione aperiam optio!</p>
      <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
    <Image src='/assets/rounded-text.png' alt="projects" width={160} height={160} className="slow-spin"/>
    </div>
    </div>
    
   </main>
  );
}
