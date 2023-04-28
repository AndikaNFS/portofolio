import React from "react";
import {
  ArrowPathIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "E-Commerce Vegetable Vendor",
    image: "./assets/images/ProjectWebsite.png",
    icon: ShoppingBagIcon,
  },
  {
    name: "Mockup Website EduInsSyariah",
    image: "./assets/images/ProjectDesainWebsite.png",
    href: "https://xd.adobe.com/view/64d6f784-cab6-4c9b-544e-0bee813760f6-12e7/",
    icon: AcademicCapIcon,
  },
];

const menus = [
  { name: "UI/UX", href: "#", id: "UI/UX" },
  { name: "Website", href: "#", id: "Website" },
];

function Features() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 z-50" id="work">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Portfolio Section
            </p>
            <div className="flex items-center mx-auto justify-between w-72 mt-6 text-lg leading-8 text-gray-600 ">
              {menus.map((menu) => (
                <div className="gap-12 justify-center mx-auto ">
                  <a
                    key={menu.name}
                    href={menu.href}
                    id={menu.id}
                    className="text-lg font-semibold leading-5 text-gray-500 gap-5 hover:text-indigo-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    <a href={feature.href}>
                      <img src={feature.image} />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
