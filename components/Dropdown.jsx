/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [defaultLang, setDefaultLang] = useState("English (US)");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 rounded-md py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {defaultLang}
          <ChevronDownIcon
            className="-mr-4 ml-1 text-blue-500 h-5 w-5"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1 cursor-pointer">
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "বাংলা" ? "বাংলা" : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "বাংলা" ? "English (US)" : "বাংলা"}
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 cursor-pointer">
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "English (UK)"
                    ? "English (UK)"
                    : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "English (UK)"
                    ? "English (US)"
                    : "English (UK)"}
                </a>
              )}
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "Português" ? "Português" : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "Português" ? "English (US)" : "Português"}
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 cursor-pointer">
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "Española" ? "Española" : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "Española" ? "English (US)" : "Española"}
                </a>
              )}
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "हिंदी" ? "हिंदी" : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "हिंदी" ? "English (US)" : "हिंदी"}
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 cursor-pointer">
            <Menu.Item
              onClick={() =>
                setDefaultLang(
                  defaultLang !== "中國人" ? "中國人" : "English (US)"
                )
              }
            >
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {defaultLang === "中國人" ? "English (US)" : "中國人"}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
