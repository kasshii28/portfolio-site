import { Button } from "@/app/components";
import Image from "next/image";
import Link from "next/link";

const aboutPage = () => {
  return (
    <div className="pt-20">
      <h1
        className="
          flex justify-center 
          items-center lg:text-4xl
          sm:text-3xl text-2xl font-medium 
          title-font my-12 
          text-gray-900 font-sans"
      >
        About me
      </h1>
      <div>
        <div
          className="
            flex justify-center 
            items-center mb-8"
        >
          <Image
            src="/cat1.png"
            width={200}
            height={200}
            alt="my cat picture"
            priority
          ></Image>
        </div>
        <div
          className="
            flex flex-col 
            justify-center items-center"
        >
          <h1 className="text-4xl">Kasshii</h1>
          <h2 className="text-2xl my-2">University Student</h2>
        </div>
        <div
          className="
            flex flex-col 
            justify-center items-center
            mt-4"
        >
          <p className="mb-4">ゲーム、アニメ、猫を愛でる/吸う、歌を聴く/歌う</p>
          <p>CS専攻のエンジニア志望大学生です</p>
        </div>
        <div className="mt-8">
          <ul
            className="
              flex justify-center 
              items-center gap-10"
          >
            <li>
              <Link href="https://github.com/kasshii28">
                <Image
                  src="/github_2111432.png"
                  width={80}
                  height={80}
                  alt="github icon"
                  priority
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/Felt_gb">
                <Image
                  src="/twitter_5969020.png"
                  width={80}
                  height={80}
                  alt="github icon"
                  priority
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p
        className="
          flex justify-center
          items-center text-4xl
          pt-16"
      >
        Bio
      </p>

      <section className="text-gray-600 body-font">
        <div 
          className="
            container px-5 py-10 
            mx-auto flex flex-wrap"
          >
          <div 
            className="
              flex relative pt-10 
              pb-20 sm:items-center 
              md:w-2/3 mx-auto"
            >
            <div 
              className="
                h-full w-6 absolute 
                inset-0 flex items-center 
                justify-center"
              >
              <div 
                className="
                  h-full w-1 bg-gray-200 
                  pointer-events-none"
                >
              </div>
            </div>
            <div 
              className="
                flex-shrink-0 w-6 h-6 
                rounded-full mt-10 sm:mt-0 
                inline-flex items-center 
                justify-center bg-indigo-500 
                text-white relative z-10 
                title-font font-medium text-sm"
              >
            </div>
            <div 
              className="
                flex-grow md:pl-8 
                pl-6 flex sm:items-center 
                items-start flex-col sm:flex-row"
              >
            <div 
              className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  高校
                </h2>
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  大阪電気通信大学高等学校
                </h2>
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  工学科
                </h2>

                <p className="leading-relaxed">2019年4月 ～ 2022年3月</p>
              </div>
            </div>
          </div>
          <div 
            className="
              flex relative pb-20 
              sm:items-center md:w-2/3 
              mx-auto"
            >
            <div 
              className="
                h-full w-6 absolute inset-0 
                flex items-center justify-center"
              >
              <div 
                className="
                  h-full w-1 bg-gray-200 
                  pointer-events-none"
                  >
              </div>
            </div>
            <div 
              className="
                flex-shrink-0 w-6 h-6 
                rounded-full mt-10 sm:mt-0 
                inline-flex items-center 
                justify-center bg-indigo-500 
                text-white relative z-10 title-font 
                font-medium text-sm"
              >
            </div>
            <div 
              className="
                flex-grow md:pl-8 pl-6 
                flex sm:items-center 
                items-start flex-col 
                sm:flex-row"
              >
            <div 
              className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  大学
                </h2>
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  大阪電気通信大学
                </h2>
                <h2 
                className="font-medium title-font text-gray-900 mb-1 text-xl">
                  情報通信工学部情報工学科
                </h2>
                <p className="leading-relaxed">2022年4月 ～ </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6">
        <Link href="/Home">
          <Button message="Back Home" />
        </Link>
      </div>
    </div>
  );
};

export default aboutPage;
