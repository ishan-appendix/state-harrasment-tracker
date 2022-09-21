import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import type { NextPage } from "next";
import { Fragment, Key, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { NavigationBar } from "../components/NavigationBar";

const yearSelector = [
  { id: 1, name: "2022", unavailable: false },
  { id: 1, name: "2021", unavailable: false },
  { id: 1, name: "2020", unavailable: false },
  { id: 1, name: "2019", unavailable: false },
  { id: 1, name: "2018", unavailable: false },
  { id: 1, name: "2017", unavailable: false },
  { id: 1, name: "2016", unavailable: false },
  { id: 1, name: "2015", unavailable: false },
  { id: 1, name: "2014", unavailable: false },
  { id: 1, name: "2013", unavailable: false },
  { id: 1, name: "2012", unavailable: false },
  { id: 1, name: "2011", unavailable: false },
  { id: 1, name: "2010", unavailable: false },
  { id: 1, name: "2009", unavailable: false },
];
const provinceSelector = [
  { id: 1, name: "All Provinces", unavailable: false },
  { id: 2, name: "Western Province", unavailable: false },
  { id: 3, name: "North Western Province", unavailable: false },
  { id: 4, name: "Southern Province", unavailable: false },
  { id: 5, name: "Sabaragamuwa Province", unavailable: false },
  { id: 6, name: "Uwa Province", unavailable: false },
  { id: 7, name: "Central Province", unavailable: false },
  { id: 8, name: "Eastern Province", unavailable: false },
  { id: 9, name: "North Central Province", unavailable: false },
  { id: 10, name: "Northern Province", unavailable: false },
];
const stateInvolvementSelector = [
  { id: 1, name: "All Forces", unavailable: false },
  { id: 2, name: "Police", unavailable: false },
  { id: 3, name: "Army", unavailable: false },
  { id: 4, name: "Navy", unavailable: false },
  { id: 4, name: "Air Force", unavailable: false },
  { id: 4, name: "Mixed", unavailable: false },
  // { id: 5, name: "Special Task Force", unavailable: false },
];

function ListSelector({ data, defaultText }: any) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected ? selected?.name : defaultText}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((singleData: any, idx: Key | null | undefined) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-off-blue text-watchdog-blue"
                        : "text-gray-900"
                    }`
                  }
                  value={singleData}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {singleData.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-watchdog-blue">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavigationBar />
      <HeroSection />
      <FilterSection />
      <div className="py-12 bg-[#F1F0F0]">
        <div className="flex justify-center mx-auto">
          <LoadingSpinner />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

function FilterSection() {
  return (
    <Fragment>
      <nav className="sticky top-0 z-40 px-4 py-3 bg-gray-200 shadow">
        <div className="items-center justify-start mx-auto sm:flex gap-x-8 max-w-7xl">
          <p className="hidden mx-0 my-2 text-lg leading-none text-left sm:block md:my-0"></p>
          <div className="flex justify-center px-2 lg:justify-start gap-x-4 gap-y-2 sm:gap-y-0 md:items-center">
            <div className="">
              <label className="block mb-1 text-xs text-gray-800 uppercase">
                Year
              </label>
              <ListSelector defaultText="Lifetime" data={yearSelector} />
            </div>
            <div className="">
              <label className="block mb-1 text-xs text-gray-800 uppercase">
                Province
              </label>
              <ListSelector
                defaultText="All Provinces"
                data={provinceSelector}
              />
            </div>

            <div className="">
              <label className="block mb-1 text-xs text-gray-800 uppercase">
                State Involvement
              </label>
              <ListSelector
                defaultText="All Provinces"
                data={stateInvolvementSelector}
              />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

function Footer() {
  return (
    <Fragment>
      <footer className="px-4 pt-6 pb-2 text-white bg-black md:px-12">
        <div className="pt-8 pb-4 text-white bg-black md:px-16 md:py-12">
          <section className="flex flex-col items-start justify-between w-full max-w-4xl md:flex-row md:mx-auto space gap-y-8 md:gap-y-0 md:gap-x-8">
            <div className="w-full max-w-md">
              <a href="https://watchdog.team">
                <img
                  src="/assets/logo.png"
                  className="h-6 my-3 sm:h-9"
                  alt="Team Watchdog Logo"
                />
              </a>
              <h1 className="text-xl font-source-sans"></h1>
            </div>
            <div className="w-full max-w-sm">
              <h1 className="text-xl font-source-sans">
                Help us enrich this data! View the{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1hivULJmq3GPUey1Sp87KHhXOK6DtHQIUkfFCTZp7GmA/edit?usp=sharing"
                  className="font-medium border-b-2 border-dashed cursor-pointer hover:text-white"
                >
                  data source
                </a>{" "}
                or reach out to us at{" "}
                <a
                  href="mailto:contact@watchdog.team"
                  className="font-medium border-b-2 border-dashed cursor-pointer hover:text-white"
                >
                  contact@watchdog.team
                </a>
              </h1>
            </div>
          </section>
          <div className="mt-10 sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://appendix.tech/" className="hover:underline">
                Appendix
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/teamwatchdog/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/teamwatchdog/?hl=en"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://twitter.com/teamwatchdog"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
