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
  // { id: 5, name: "Special Task Force", unavailable: false },
];

function ListSelector({ data, defaultText }: any) {
  const [selected, setSelected] = useState(data[0]);

  console.log(selected);

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
      <div className="pt-12 bg-[#F1F0F0]">
        <div className="flex justify-center mx-auto">
          <LoadingSpinner />
        </div>
      </div>
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
          <div className="flex justify-start sm:justify-center gap-x-4 gap-y-2 sm:gap-y-0">
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
