import React from "react";

function HeroSection() {
  return (
    <>
      <div className="static bg-white" id="home">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="relative h-0 w-0 z-40">
            <div class="awan absolute h-20 w-14 -left-10 -bottom-12">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="white"
                className="w-40 h-30"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Hello, I am Andika Nur Sasmito
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Front-End Web Developer and Technical Support
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                {/* <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a> */}
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className=""></div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-10 top-0 w-[18rem] max-w-none rounded-md"
                src="./assets/images/Foto-Andika-removebg.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
          {/* <div class="relative float-right h-0 w-0 z-40">
            <div class="absolute h-20 w-14 -left-20 -top-20  ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                // color="white"
                className="w-40 h-30"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
