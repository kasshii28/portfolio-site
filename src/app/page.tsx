import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="
          h-screen
          w-screen
          flex
          justify-center
          items-center"
      >
        <Image
          src="/cat1.png"
          width={500}
          height={500}
          alt="my cat picture"
          priority
        ></Image>
        <div className="mx-12 text-9xl">KASSHII</div>
      </div>
    </main>
  );
}
