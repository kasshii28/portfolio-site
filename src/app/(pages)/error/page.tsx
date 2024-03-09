"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
Button;

export default function Error() {
  const router = useRouter();

  return (
    <div>
      <div
        className="
                flex flex-col
                justify-center 
                items-center"
      >
        <h1 className="text-4xl mt-24 mb-12">Error!</h1>
        <h1 className="text-4xl">Failed to send email Please try again</h1>
        <button
          type="button"
          className="
                        flex mx-auto text-white 
                        bg-slate-700 border-0 my-12 
                        py-2 px-6 focus:outline-none 
                        hover:bg-slate-900 rounded text-lg"
          onClick={() => router.back()}
        >
          Back to Previous Page
        </button>
      </div>
    </div>
  );
}
