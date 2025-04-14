import { JSX } from "react";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Info from "./Info";
import Testimonial from "./Testimonial";

export default function Home() {

  const getStarted = (): JSX.Element => {
    const img =
      "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png";
  
    return (
      <>
        <div className="text-center px-4 py-12 sm:py-20">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat.
          </p>
        </div>
  
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset="1" stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
  
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  Boost your productivity. Start using our app today.
                </h2>
                <p className="mt-6 text-lg text-pretty text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
  
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src={img}
                  alt="App screenshot"
                  width="1824"
                  height="1080"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

  const statitics = (): JSX.Element => {
    return (
      <div className="bg-white py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold  text-gray-900 sm:text-5xl mb-16">
            Empowering Forex Traders across the World!
          </h1>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Transactions every 24 hours</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Assets under holding</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">New users annually</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  };  

  
  return (
    <div>
      <section id="hero">
        {getStarted()}
      </section>
      
      <section id="features">
        <Features />
      </section>

      <section id="info">
        <Info />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="statistics">
        {statitics()}
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
