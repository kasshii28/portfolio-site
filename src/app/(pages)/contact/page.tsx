"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValue } from "@/app/types/data";

export default function ContactPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? "",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );
      res.ok ? router.push("/success") : router.push("/error");
    } catch (err) {
      router.push("/error");
    }
  };
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
        Contact
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
      className="
        text-gray-600 
        body-font relative"
      >
        <div
          className="
            container mx-auto"
        >
          <div
            className="
              flex flex-col 
              text-center 
              w-full mb-12"
          >
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col justify-center items-center -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="
                      leading-7 text-sm 
                      text-gray-600"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    aria-describedby="error-name-required"
                    className="
                      w-full bg-gray-100 
                      bg-opacity-50 rounded 
                      border border-gray-300 
                      focus:border-indigo-500 
                      focus:bg-white focus:ring-2 
                      focus:ring-indigo-200 text-base 
                      outline-none text-gray-700 
                      py-1 px-3 leading-8 transition-colors 
                      duration-200 ease-in-out"
                  ></input>
                  {errors?.name && (
                    <span
                      id="error-name-required"
                      aria-live="assertive"
                      className="text-sm text-amber-500"
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    aria-label="contact"
                    className="
                      leading-7 text-sm 
                      text-gray-600"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    {...register("email", { 
                      required: "Email is required" ,
                      pattern: {
                        value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                        message: "Please enter correct email format"
                      }},
                    )}
                    aria-describedby="error-email-required"
                    className="
                      w-full bg-gray-100 
                      bg-opacity-50 rounded 
                      border border-gray-300 
                      focus:border-indigo-500 
                      focus:bg-white focus:ring-2 
                      focus:ring-indigo-200 text-base 
                      outline-none text-gray-700 
                      py-1 px-3 leading-8 transition-colors 
                      duration-200 ease-in-out"
                  ></input>
                  {errors?.email && (
                    <span
                      id="error-email-required"
                      aria-live="assertive"
                      className="text-sm text-amber-500"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="
                      leading-7 text-sm 
                      text-gray-600"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    aria-describedby="error-message-required"
                    name="message"
                    className="
                      w-full bg-gray-100 
                      bg-opacity-50 rounded 
                      border border-gray-300 
                      focus:border-indigo-500 
                      focus:bg-white focus:ring-2 
                      focus:ring-indigo-200 h-32 
                      text-base outline-none 
                      text-gray-700 py-1 px-3 
                      resize-none leading-6 
                      transition-colors 
                      duration-200 ease-in-out"
                  ></textarea>
                  {errors?.message && (
                    <span
                      id="error-message-required"
                      aria-live="assertive"
                      className="text-sm text-amber-500"
                    >
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="
                    flex mx-auto text-white 
                    bg-slate-700 border-0 
                    py-2 px-8 focus:outline-none 
                    hover:bg-slate-900 rounded text-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
