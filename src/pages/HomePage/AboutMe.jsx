import React from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Javascript" },
  { name: "HTML" },
  { name: "Repsonsive Web Design" },
  { name: "Bootstrap" },
  { name: "ReactJS" },
  { name: "CSS" },
  { name: "TailwindCSS" },
  { name: "Framework Laravel" },
];

function AboutMe() {
  return (
    <>
      <div
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
        id="about"
      >
        <div
          className="hidden sm:absolute sm:-top:10 sm:right-1/2 sm:-z-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white sm:text-6xl text-center">
            About Me
          </h2>
          <div className="grid grid-cols-2">
            <div className="mx-auto lg:mx-0">
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Hai! My name is Andika Nur Sasmito, I am Fresh-Graduate in
                Information System from{" "}
                <i>Sekolah Tinggi Teknologi Terpadu Nurul Fikri</i>. My interest
                in technology is very high, I am proficient using CSS Framework
                with Tailwind or Boostrap, HTML and CSS.
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                I am also interested in having a good experience in ReactJS and
                JavaScript to build applications and web sites with responsive
                web designs that will look good when we are on mobile and
                desktop.
              </p>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {links.map((link) => (
                      <a key={link.name} href={link.href}>
                      {link.name} <span aria-hidden="true">&rarr;</span>
                      </a>
                  ))}
                  </div> */}
                <p className="text-2xl text-indigo-600">
                  Technologies I've been using recently :
                </p>
                <div className="ms-3 mt-0 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2 lg:grid-cols-2">
                  {stats.map((stat) => (
                    // <div key={stat.name} className="flex flex-col-reverse">
                    <ul
                      key={stat.name}
                      className="list-disc text-white text-lg"
                    >
                      <li>{stat.name}</li>
                    </ul>
                    //   {/* <dt className="text-base leading-7 text-gray-300">
                    //     {stat.name}
                    //   </dt>
                    //   <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    //     {stat.value}
                    //   </dd> */}
                    // </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-auto mt-7">
              <div className="flex justify-end ms-2">
                <img src="./assets/images/Clients-requests-V1.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
