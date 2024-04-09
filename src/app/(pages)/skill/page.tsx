"use client";
import { Button, Progress } from "../../components/";
import { skillImgData, productData } from "@/app/data";
import { SkillValue } from "../../types/data";
import Link from "next/link";
import Image from "next/image";

export default async function skillPage() {
  const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  const res = await fetch(`${apiUrl}/api/skill`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const skilldata: SkillValue[] = await res.json();

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
        Products
      </h1>

      <div className="my-12">
        <ul
          className="
            flex-none md:flex justify-center
            items-center gap-8 mx-8"
        >
          {productData.map((product) => (
            <li className="my-4" key={product.id}>
              <div
                className="
                  max-w-sm rounded-xl 
                  overflow-hidden 
                  shadow-lg"
              >
                {product.url?.charAt(0) === "/" ? (
                  <Link
                    href={"/" + product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-full"
                      src={"/" + product.img}
                      alt="my product image"
                      width={200}
                      height={200}
                      priority
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    ></Image>
                  </Link>
                ) : (
                  <Link
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="w-full"
                      src={"/" + product.img}
                      alt="my product image"
                      width={200}
                      height={200}
                    ></Image>
                  </Link>
                )}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h1
        className="
            flex justify-center 
            items-center lg:text-4xl
            sm:text-3xl text-2xl font-medium 
            title-font my-12 
            text-gray-900 font-sans"
      >
        Skills
      </h1>

      <div
        className="
            flex bg-slate-50
            flex-col items-center 
            gap-5 mx-20
            my-12 py-5
            shadow-gray shadow-xl"
      >
        <div>
          <ul
            className="
                    flex flex-wrap 
                    items-center justify-center 
                    gap-3 lg:gap-20 lg:flex-nowrap 
                    "
          >
            {skillImgData.map((img) => (
              <li key={img}>
                <span>
                  <Image
                    src={"/" + img}
                    width={80}
                    height={80}
                    alt="github icon"
                    priority
                  ></Image>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Progress skills={skilldata} />
      <div className="py-12">
        <Button message="Back Home" />
      </div>
    </div>
  );
}
