import Link from "next/link";
import { Fragment } from "react";

export function HeroSection() {
  return (
    <Fragment>
      <div
        className="flex flex-col w-full px-3 py-10 bg-fixed bg-center bg-no-repeat bg-cover bg-watchdog-blue text-off-blue"
        style={{
          backgroundImage:
            "linear-gradient(rgba(36, 69, 131, 0.8), rgba(36, 69, 131, 0.8)),url(/assets/header-background.png)",
        }}
      >
        <div className="justify-center mx-auto lg:w-[40rem]">
          <div>
            <div className="flex flex-row items-center">
              <div className="flex mr-2">
                <div className="absolute animate-ping w-3 h-3 bg-[#3dc6a3] rounded-full mr-1"></div>
                <div className="relative w-3 h-3 bg-[#31A085] rounded-full "></div>
              </div>
              Updated <span className="ml-1 text-white">NaN</span>
            </div>
            <h1 className="my-4 text-4xl font-bold leading-relaxed text-center md:text-6xl font-lora">
              <span className="text-white">NaN</span> people have been affected
              by state violence in Sri Lanka
            </h1>
            <div className="flex justify-center my-6 text-lg md:text-xl">
              between
              <span className="mx-1 text-white border-b-2 border-dashed hover:text-white">
                2022-01-01
              </span>
              and
              <span className="mx-1 text-white border-b-2 border-dashed hover:text-white">
                NaN
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center hover:text-white">
              <Link href="/methodology">Read about our methodology</Link>
            </div>
            <div className="flex items-center hover:text-white">
              <Link
                target={"_blank"}
                href="https://docs.google.com/spreadsheets/d/1rJWVn6IHITC21meLQviD5znrzZHlCjSqaG_97x5yGx4/edit#gid=0"
              >
                View the data
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
