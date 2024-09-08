import React, { Fragment, useState } from "react";

import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import {
  ShoppingBagIcon,
  AcademicCapIcon,
  ListBulletIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "E-Commerce Vegetable Vendor",
    image: "./assets/images/ProjectWebsite.png",
    href: "https://vegevendor.000webhostapp.com/",
    icon: ShoppingBagIcon,
  },
  {
    name: "Mockup Website EduInsSyariah",
    image: "./assets/images/ProjectDesainWebsite.png",
    href: "https://xd.adobe.com/view/64d6f784-cab6-4c9b-544e-0bee813760f6-12e7/",
    icon: AcademicCapIcon,
  },
  {
    name: "Luxspace",
    image: "./assets/images/Luxspace.png",
    href: "https://luxspace-rfd-xlwz.vercel.app/",
    icon: ShoppingBagIcon,
  },
  {
    name: "ToDoList",
    image: "./assets/images/ToDoList.png",
    href: "https://project-todo-1.vercel.app/",
    icon: ListBulletIcon,
  },
  {
    name: "Stream App",
    image: "./assets/images/StreamApp.png",
    href: "https://project-todo-1.vercel.app/",
    icon: FilmIcon,
  },
];

const menus = [
  { name: "UI/UX", href: "#", id: "UI/UX", value: ".ui/ux" },
  { name: "Laravel", href: "#", id: "Laravel" },
  { name: "ReactJS", href: "#", id: "ReactJS" },
  // { name: "Component", href: "#", id: "Component" },
];

function Features() {
  return (
    <>
      <div className="bg-gray-200 py-24 sm:py-32 z-50" id="work">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Portfolio Section
            </p>
            <div className="flex items-center mx-auto justify-between w-full mt-6 text-lg leading-8 text-gray-600">
              {menus.map((menu) => (
                <div className="gap-12 justify-center mx-auto ">
                  <a
                    key={menu.name}
                    href={menu.href}
                    id={menu.id}
                    data-option-value={menu.value}
                    className="text-lg font-semibold leading-5 text-gray-500 gap-5 hover:text-indigo-500 focus:outline-none "
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-16 `{feature.value}`"
                >
                  <div className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </div>
                  <div className="mt-2 text-base leading-7 text-gray-600">
                    <a href={feature.href} target="_blank">
                      <img src={feature.image} className="rounded-xl" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
