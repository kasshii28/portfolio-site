"use client";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div className="pt-20">
      <div
        className="
          flex flex-col
          justify-center 
          items-center"
      >
        <h1 className="text-4xl mt-24 mb-12">Thank you!</h1>
        <button
          type="button"
          className="
            flex mx-auto text-white 
            bg-slate-700 border-0 
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
