import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="
          h-screen
          flex flex-col justify-center items-center"
      >
        <Image
          src="/cat1.png"
          width={300}
          height={300}
          alt="my cat picture"
          priority
          className="py-14"
        ></Image>
        <div className="text-7xl md:mx-12 md:text-8xl">KASSHII</div>
      </div>
    </main>
  );
}
